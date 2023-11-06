from .db import db, environment, SCHEMA, add_prefix_for_prod

class Favorite(db.Model):
    __tablename__ = 'favorites'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key = True)
    owner_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable= False)
    exercise_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('exercises.id')), nullable = False)
    created_at = db.Column(db.Date, nullable = False)
    favorite_exercise_id = db.relationship("Exercise", back_populates = "exercise_favorite_id")
    favorite_user_id = db.relationship("User", back_populates = "user_favorite_id")

    def to_dict(self):
        return {
            "id": self.id,
            "ownerId": self.owner_id,
            "exerciseId": self.exercise_id,
            "createdAt": self.created_at,
        }
            