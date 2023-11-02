from flask import Blueprint, jsonify, session, request
from app.models import User, db, Exercise
from app.forms import LoginForm
from app.forms import SignUpForm
from flask_login import current_user, login_user, logout_user, login_required
from ..forms.exercise_form import ExerciseForm
from .aws_helpers import get_unique_filename, upload_file_to_s3
from .auth_routes import validation_errors_to_error_messages
from datetime import date
from ..forms import UpdateExerciseForm

exercise_routes = Blueprint('exercise', __name__)

@exercise_routes.route("/all")
def get_all_exercises():
    all_exercises = Exercise.query.all()
    return [exercise.to_dict() for exercise in all_exercises]

@exercise_routes.route("/new", methods=["POST"])
@login_required
def upload_image():
    form = ExerciseForm()

    form['csrf_token'].data = request.cookies['csrf_token']
 
    if form.validate_on_submit():
          
        image = form.data["image"]
        image.filename = get_unique_filename(image.filename)
        upload = upload_file_to_s3(image)
        image_url = upload['url']
        print(upload)

        if "url" not in upload:
        # if the dictionary doesn't have a url key
        # it means that there was an error when you tried to upload
        # so you send back that error message (and you printed it above)
            return {'errors': validation_errors_to_error_messages(form.errors)}, 401
        else:
            new_exercise = Exercise(
                name = form.data['name'],
                type = form.data['type'],
                description = form.data['description'],
                image = image_url,
                experience = form.data['experience'],
                target_muscles = form.data['target_muscles'],
                created_at = date.today(),
                owner_id = current_user.id
            )

            db.session.add(new_exercise)
            db.session.commit()
            return new_exercise.to_dict()
    else:
        print(form.errors)
        return {'errors': validation_errors_to_error_messages(form.errors)}, 401
    
@exercise_routes.route('/<int:id>/delete', methods=['DELETE'])
@login_required
def delete_exercise(id):
    exercise_to_delete = Exercise.query.get(id)
    if exercise_to_delete:
        db.session.delete(exercise_to_delete)
        db.session.commit()
        return exercise_to_delete.to_dict()
    else:
        return {"error": "No Exercise Found"}
    
@exercise_routes.route('/<int:id>', methods=["PUT"])
@login_required
def update_exercise(id):
    exercise_to_update = Exercise.query.get(id)
    form = UpdateExerciseForm()
    data = form.data

    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        exercise_to_update.name = data['name']
        exercise_to_update.type = data['type']
        exercise_to_update.description = data['description']
        exercise_to_update.experience = data['experience']
        exercise_to_update.target_muscles = data['target_muscles']
        db.session.commit()
        return exercise_to_update.to_dict()
    else:
        return {'errors': validation_errors_to_error_messages(form.errors)}, 400
