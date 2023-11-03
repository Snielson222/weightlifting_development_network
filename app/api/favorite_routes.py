from flask import Blueprint, jsonify, session, request
from app.models import User, db, Favorite
from flask_login import current_user, login_user, logout_user, login_required
from datetime import date
from .auth_routes import validation_errors_to_error_messages

favorite_routes = Blueprint('favorite', __name__)

@favorite_routes.route('/all')
def get_all_favorites():
    all_favorites = Favorite.query.all()
    return [favorite.to_dict() for favorite in all_favorites]

@favorite_routes.route('/<int:id>')
@login_required
def create_new_favorite(id):
    new_favorite = Favorite(
        owner_id = current_user.id,
        exercise_id = id,
        created_at = date.today()
    )
    db.session.add(new_favorite)
    db.session.commit()
    return new_favorite.to_dict()

@favorite_routes.route('/<int:id>/delete', methods=['DELETE'])
def delete_favorite(id):
    favorite_to_delete = Favorite.query.get(id)
    if favorite_to_delete:
        db.session.delete(favorite_to_delete)
        db.session.commit()
        return favorite_to_delete.to_dict()
    else:
        return {"errors": "favorite Not Found"}


    