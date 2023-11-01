from app.models import db, Review, environment, SCHEMA
from sqlalchemy.sql import text
from datetime import date

def seed_reviews():
    review_1 = Review(
       rating = 1,
       description = "test",
       owner_id = 3,
       exercise_id = 1,
       created_at = date.today()
    )

    review_2 = Review(
       rating = 2,
       description = "test2",
       owner_id = 2,
       exercise_id = 2,
       created_at = date.today()
    )

    review_3 = Review(
       rating = 3,
       description = "test3",
       owner_id = 1,
       exercise_id = 3,
       created_at = date.today()
    )


    db.session.add(review_1)
    db.session.add(review_2)
    db.session.add(review_3)
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