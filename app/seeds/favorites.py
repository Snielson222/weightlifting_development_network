from app.models import db, Favorite, environment, SCHEMA
from sqlalchemy.sql import text
from datetime import date

def seed_favorites():
    Favorite_1 = Favorite(
       owner_id = 3,
       exercise_id = 1,
       created_at = date.today()
    )

    Favorite_2 = Favorite(
       owner_id = 2,
       exercise_id = 2,
       created_at = date.today()
    )

    Favorite_3 = Favorite(
       owner_id = 1,
       exercise_id = 3,
       created_at = date.today()
    )


    db.session.add(Favorite_1)
    db.session.add(Favorite_2)
    db.session.add(Favorite_3)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_favorites():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.favorites RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM favorites"))
        
    db.session.commit()