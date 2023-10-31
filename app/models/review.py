from .db import db, environment, SCHEMA, add_prefix_for_prod

class Review(db.Model):
    __tablename__ = 'reviews'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key = True)
    rating = db.Column(db.Integer, nullable = False)
    description = db.Column(db.String, nullable = False)
    owner_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable = False)
    exercise_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('exercises.id')), nullable = False)
    created_at = db.Column(db.Date, nullable = False)
    review_exercise_id = db.relationship("Exercise", back_populates = "exercise_review_id")
    review_user_id = db.relationship("User", back_populates = "user_review_id")

    def to_dict(self):
        return {
            "id": self.id,
            "rating": self.rating,
            "description": self.description,
            "ownerId": self.owner_id,
            "exerciseId": self.exercise_id,
            "createdAt": self.created_at
        }