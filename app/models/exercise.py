from .db import db, environment, SCHEMA, add_prefix_for_prod

class Exercise(db.Model):
    __tablename__ = 'exercises'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String, nullable = False)
    type = db.Column(db.String, nullable = False)
    description = db.Column(db.String, nullable = False)
    image = db.Column(db.String, nullable = False)
    owner_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable = False)
    created_at = db.Column(db.Date, nullable = False)
    experience = db.Column(db.String, nullable = False)
    target_muscles = db.Column(db.String, nullable = False)
    exercise_review_id = db.relationship("Review", back_populates = "review_exercise_id", cascade="all, delete-orphan")
    exercise_user_id = db.relationship("User", back_populates = "user_exercise_id")
    exercise_favorite_id = db.relationship("Favorite", back_populates = "favorite_exercise_id", cascade="all, delete-orphan" )

    def to_dict(self):
        return_dict = {
            "id": self.id,
            "name": self.name,
            "type": self.type,
            "image": self.image,
            "description": self.description,
            "ownerId": self.owner_id,
            "targetMuscles":self.target_muscles,
            "experience": self.experience,
            "createdAt": self.created_at
        }
        if self.exercise_review_id:
            return_dict["reviews"] = [review.to_dict() for review in self.exercise_review_id]

        return return_dict
