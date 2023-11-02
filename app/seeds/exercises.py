from app.models import db, Exercise, environment, SCHEMA
from sqlalchemy.sql import text
from datetime import date

def seed_exercises():
    bench_press = Exercise(
        name = "Bench Press",
        type = "Upper Body",
        description = "Great exercise for building strength and size in your chest and triceps, a classic!",
        image = "https://www.muscleandfitness.com/wp-content/uploads/2019/04/10-Exercises-Build-Muscle-Bench-Press.jpg?quality=86&strip=all",
        owner_id = 1,
        experience = "Intermediate",
        target_muscles = "Pectoral, Triceps",
        created_at = date.today()
    )

    squat = Exercise(
        name = "Squat",
        type = "Lower Body",
        description = "Great exercise for building strength and size in your quads, hamstrings, and glutes, a classic!",
        image = "https://images.ctfassets.net/3s5io6mnxfqz/34Npc5PKLKJi6HIYvFw9XI/3e45754912cf266e7401cb8074c63239/AdobeStock_386146138_2.jpeg",
        experience = "Advanced",
        target_muscles = "Quads, Hamstrings, Glutes",
        owner_id = 2,
        created_at = date.today()
    )

    rower = Exercise(
        name = "Rower",
        type = "Warm Up",
        description = "Great exercise for warming up! 5 minutes and you will be warm, loose, and ready to hit the weights",
        image = "https://static01.nyt.com/images/2022/11/08/multimedia/26WNT-ROWING-WORKOUT5-1-310a/26WNT-ROWING-WORKOUT5-1-310a-videoSixteenByNine3000.jpg",
        experience = "Beginner",
        target_muscles = "General Fitness",
        owner_id = 3,
        created_at = date.today()
    )


    db.session.add(bench_press)
    db.session.add(squat)
    db.session.add(rower)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_exercises():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM exercises"))
        
    db.session.commit()