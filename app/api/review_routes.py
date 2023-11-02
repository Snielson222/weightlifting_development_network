from flask import Blueprint, jsonify, session, request
from app.models import User, db, Review
from flask_login import current_user, login_user, logout_user, login_required
from app.forms import ReviewForm
from datetime import date
from .auth_routes import validation_errors_to_error_messages

review_routes = Blueprint('review', __name__)

@review_routes.route('/all')
def get_all_reviews():
    all_reviews = Review.query.all()
    return [review.to_dict() for review in all_reviews]

@review_routes.route('/new', methods=['POST'])
@login_required
def create_new_review():
    print("HELLO")
    form = ReviewForm()
    data = form.data

    form['csrf_token'].data = request.cookies['csrf_token']
 
    if form.validate_on_submit():
        print("VALIDATE!!!")
        new_review = Review(
            rating = data['rating'],
            description = data['description'],
            owner_id = current_user.id,
            exercise_id = data['exercise_id'],
            created_at = date.today()
        )
        db.session.add(new_review)
        db.session.commit()
        return new_review.to_dict()
    else:
        return {'errors': validation_errors_to_error_messages(form.errors)}, 401