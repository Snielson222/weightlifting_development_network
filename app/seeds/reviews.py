from app.models import db, Review, environment, SCHEMA
from sqlalchemy.sql import text
from datetime import date

def seed_reviews():
    review_1 = Review(
       rating = 5,
       description = "Great exercise! Really helped me improve my fitness!",
       owner_id = 3,
       exercise_id = 1,
       created_at = date.today()
    )

    review_2 = Review(
       rating = 4,
       description = "A little too challenging for me, working up to it though.",
       owner_id = 2,
       exercise_id = 2,
       created_at = date.today()
    )

    review_3 = Review(
       rating = 1,
       description = "This exercise is not for me at all, great website though!",
       owner_id = 1,
       exercise_id = 3,
       created_at = date.today()
    )

    review_4 = Review(
       rating = 5,
       description = "Great exercise! Really helped me improve my tone!",
       owner_id = 3,
       exercise_id = 11,
       created_at = date.today()
    )

    review_5 = Review(
       rating = 4,
       description = "Difficult but rewarding.",
       owner_id = 2,
       exercise_id = 12,
       created_at = date.today()
    )

    review_6 = Review(
       rating = 1,
       description = "Not a fan of the exercise, love the app!",
       owner_id = 1,
       exercise_id = 13,
       created_at = date.today()
    )

    review_7 = Review(
       rating = 5,
       description = "Great exercise! Really helped me improve my size!",
       owner_id = 7,
       exercise_id = 1,
       created_at = date.today()
    )

    review_8 = Review(
       rating = 4,
       description = "Challenging for me!! Something to set goals for.",
       owner_id = 2,
       exercise_id = 8,
       created_at = date.today()
    )

    review_9 = Review(
       rating = 1,
       description = "Amazing website! Got hurt doing the exercise though.",
       owner_id = 1,
       exercise_id = 9,
       created_at = date.today()
    )


    db.session.add(review_1)
    db.session.add(review_2)
    db.session.add(review_3)
    db.session.add(review_4)
    db.session.add(review_5)
    db.session.add(review_6)
    db.session.add(review_7)
    db.session.add(review_8)
    db.session.add(review_9)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_reviews():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM reviews"))
        
    db.session.commit()