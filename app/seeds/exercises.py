from app.models import db, Exercise, environment, SCHEMA
from sqlalchemy.sql import text
from datetime import date

def seed_exercises():
    bench_press = Exercise(
        name = "Bench Press",
        type = "Upper Body",
        description = "Start with your hands shoulder width apart on the weighted bar with your lats tucked underneath you, back arched, and feet on the floor. Squeezing tightly to activate stabilizer muscles bring the bar down to your mid chest with your upper arms at a 45 degree angle to your body bracing your core throughout. Push off from your chest bringing the bar up and a bit back to keep a natural path with your body mechanics. Repeat for desired repetitions.",
        image = "https://www.muscleandfitness.com/wp-content/uploads/2019/04/10-Exercises-Build-Muscle-Bench-Press.jpg?quality=86&strip=all",
        owner_id = 1,
        experience = "Intermediate",
        target_muscles = "Pectoral, Triceps, Anterior Delts",
        created_at = date.today()
    )

    split_squat = Exercise(
        name = "Split Squat",
        type = "Lower Body",
        description = "Start with one leg bent behind you with your foot on a stable surface such as a bench. Squat down maintaining a stable core using both of your legs to lower you down taking care not to let your forward knee cave inwards. When your back knee almost touches the floor use both legs to drive yourself upwards to the starting position.",
        image = "https://workout-development-network.s3.us-east-2.amazonaws.com/imageedit_2_6458890741.png",
        experience = "Intermediate",
        target_muscles = "Quads, Hamstrings, Glutes",
        owner_id = 1,
        created_at = date.today()
    )

    kettlebell_swing = Exercise(
        name = "Kettlebell Swing",
        type = "Warm Up",
        description = "Start with your feet shoulder width apart gripping a kettlebell in both hands bend over, keeping your back straight, and letting the kettlebell swing between your legs. Once the kettlebell is between your legs straighten your body up driving with your hips and using that momentum to propel the kettlebell over your head keeping your arms straight. Bring the kettlebell back down in a controlled motion between your legs and repeat",
        image = "https://workout-development-network.s3.us-east-2.amazonaws.com/imageedit_2_6458890741.png",
        experience = "Advanced",
        target_muscles = "Full Body",
        owner_id = 1,
        created_at = date.today()
    )

    squat = Exercise(
        name = "Squat",
        type = "Lower Body",
        description = "Start with your feet slightly more than shoulder width apart and toes positioned at a slight outward angle with the weighted bar resting on your upper traps and your hands gripping either side of the bar. Take a breath and brace your core. Start squatting down keeping your back straight pushing your knees out and never letting them cave in, bending at the waist pushing your hips backwards and not flexing your back. Squat down until your quads are parallel to the floor. Maintaining that brace start to rise up from the squat driving with your hips and quads until you are standing straight. Repeat for desired reps.",
        image = "https://images.ctfassets.net/3s5io6mnxfqz/34Npc5PKLKJi6HIYvFw9XI/3e45754912cf266e7401cb8074c63239/AdobeStock_386146138_2.jpeg",
        experience = "Advanced",
        target_muscles = "Quads, Hamstrings, Glutes",
        owner_id = 2,
        created_at = date.today()
    )

    band_pull_aparts = Exercise(
        name = "Band Pull Aparts",
        type = "Warm Up",
        description = "Hold a light exercise band in both hands and fluidly pull the band apart straight in front of you until the band touches your chest, slowly relax the band back inwards resisting the pull. Move your hands a few inches up or down from this starting point and repeat for your desired repetitions",
        image = "https://workout-development-network.s3.us-east-2.amazonaws.com/imageedit_2_6458890741.png",
        experience = "Beginner",
        target_muscles = "Shoulder, Rotator Cuff",
        owner_id = 2,
        created_at = date.today()
    )

    bent_over_row = Exercise(
        name = "Bent Over Row",
        type = "Upper Body",
        description = "Start with your hands shoulder width apart gripping a bar, lower back straight and feet shoulder width apart on the floor. Slowly raise the weighted bar to your lower chest maintaining the same posture. Lower the bar to the floor and repeat for desired repetitions.",
        image = "https://workout-development-network.s3.us-east-2.amazonaws.com/imageedit_2_6458890741.png",
        experience = "Advanced",
        target_muscles = "Lats, Rhomboids, Spinal Erectors, Traps",
        owner_id = 2,
        created_at = date.today()
    )

    rower = Exercise(
        name = "Rower",
        type = "Warm Up",
        description = "Start with your core stabilized leaning forward with hands on the rowing bar, knees bent and feet placed on the foot wells. Lean your torso back as you extend your legs and push off from the foot wells in a fluid whole body motion. Repeat for desired time and intensity level",
        image = "https://static01.nyt.com/images/2022/11/08/multimedia/26WNT-ROWING-WORKOUT5-1-310a/26WNT-ROWING-WORKOUT5-1-310a-videoSixteenByNine3000.jpg",
        experience = "Beginner",
        target_muscles = "General Fitness",
        owner_id = 3,
        created_at = date.today()
    )

    push_up = Exercise(
        name = "Push Up",
        type = "Upper Body",
        description = "Start with your hands shoulder width apart, back straight and toes on the floor. Slowly lower your chest down until it touches the floor and push yourself back up into the starting position maintaining posture throughout.",
        image = "https://workout-development-network.s3.us-east-2.amazonaws.com/imageedit_2_6458890741.png",
        experience = "Beginner",
        target_muscles = "Chest, triceps",
        owner_id = 3,
        created_at = date.today()
    )

    deadlift = Exercise(
        name = "Deadlift",
        type = "Lower Body",
        description = "Start with your feet shoulder width apart and lower back straight bend down with your legs and grab the bar overhand with straight arms. Brace your core and lift the bar up with your legs unfolding your body like a book and driving through with your hips until you are standing straight up.",
        image = "https://workout-development-network.s3.us-east-2.amazonaws.com/imageedit_2_6458890741.png",
        experience = "Advanced",
        target_muscles = "Glutes, Quads, Hamstrings, and Back",
        owner_id = 3,
        created_at = date.today()
    )


    db.session.add(bench_press)
    db.session.add(squat)
    db.session.add(rower)
    db.session.add(push_up)
    db.session.add(deadlift)
    db.session.add(bent_over_row)
    db.session.add(band_pull_aparts)
    db.session.add(kettlebell_swing)
    db.session.add(split_squat)
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