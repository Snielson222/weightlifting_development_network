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

    lateral_raise = Exercise(
        name = "Lateral Raise",
        type = "Upper Body",
        description = "Grip a light dumbbell in each hand palms facing inwards arms at your side, elbows slightly bent. Raise both arms slightly above your head being careful not to use your elbows or body too much, focus on the shoulders. Lower back to starting position. Repeat for desired number of repetitions.",
        image = "https://www.muscleandfitness.com/wp-content/uploads/2019/04/10-Exercises-Build-Muscle-Bench-Press.jpg?quality=86&strip=all",
        owner_id = 1,
        experience = "Intermediate",
        target_muscles = "Medial Delts",
        created_at = date.today()
    )

    rdl = Exercise(
        name = "Romanian Dead Lift",
        type = "Lower Body",
        description = "Holding a dumbbell in each hand, feet shoulder width apart, bending over at the hips. Touch the dumbells to the ground then bracing your core careful not to round your back straighten back up. Repeat for desired repetitions.",
        image = "https://workout-development-network.s3.us-east-2.amazonaws.com/imageedit_2_6458890741.png",
        experience = "Intermediate",
        target_muscles = "Hamstrings, Glutes",
        owner_id = 1,
        created_at = date.today()
    )

    battle_ropes = Exercise(
        name = "Battle Ropes",
        type = "Warm Up",
        description = "Gripping a rope in each hand and alternating arms move the rope like a wave slamming it into the ground. Repeat until warmed up for your exercises.",
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

    calf_raise = Exercise(
        name = "Calf Raise",
        type = "Lower Body",
        description = "Holding your desired level of weight place the balls of your feet and toes on a raised surface such as a block of wood. Lower your heels as much as you safely can then raise your heels so you are on your tip-toes as much as you can. Do this slowly and try not to bounce. Repeat for as many reps as directed.",
        image = "https://images.ctfassets.net/3s5io6mnxfqz/34Npc5PKLKJi6HIYvFw9XI/3e45754912cf266e7401cb8074c63239/AdobeStock_386146138_2.jpeg",
        experience = "Intermediate",
        target_muscles = "Calfs",
        owner_id = 2,
        created_at = date.today()
    )

    step_ups = Exercise(
        name = "Step Ups",
        type = "Warm Up",
        description = "Stand close to a mild-moderate height platform that can support your weight. Step onto the platform with one foot then stand tall on the platform with both feet. Step backwards off of the platform with the same foot then stand tall on the ground again. Repeat alternating feet until warmed up.",
        image = "https://workout-development-network.s3.us-east-2.amazonaws.com/imageedit_2_6458890741.png",
        experience = "Beginner",
        target_muscles = "Legs",
        owner_id = 2,
        created_at = date.today()
    )

    lat_pulldown = Exercise(
        name = "Lat Pulldown",
        type = "Upper Body",
        description = " In a seated or on your knees position grip a bar attached to a pulley system or cable machine shoulder width apart. Let the weight stretch your back until you can feel the pull in your lats. In one smooth fluid motion bring the bar to your chest first retracting your scapulas then bringing your elbows in. Slowly let the weight out to the starting position. Repeat for as many reps as needed. ",
        image = "https://workout-development-network.s3.us-east-2.amazonaws.com/imageedit_2_6458890741.png",
        experience = "Intermediate",
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

    jogging = Exercise(
        name = "Jogging",
        type = "Warm Up",
        description = "Jog around to your desired comfort level, you can jog around the neighborhood or in the park.",
        image = "https://static01.nyt.com/images/2022/11/08/multimedia/26WNT-ROWING-WORKOUT5-1-310a/26WNT-ROWING-WORKOUT5-1-310a-videoSixteenByNine3000.jpg",
        experience = "Beginner",
        target_muscles = "Full Body",
        owner_id = 3,
        created_at = date.today()
    )

    bicep_curls = Exercise(
        name = "Bicep Curls",
        type = "Upper Body",
        description = "Start holding a dumbbell in each hand at your side not relaxing your arms with tension going through your biceps. Bring both dumbbells up to your chest twisting so they are even with your chest and contracting your bicep as hard as possible being careful not to swing. Slowly lower your arms untwisting as you go careful to keep tension in your biceps. Repeat for recommended reps.",
        image = "https://workout-development-network.s3.us-east-2.amazonaws.com/imageedit_2_6458890741.png",
        experience = "Beginner",
        target_muscles = "Biceps",
        owner_id = 3,
        created_at = date.today()
    )

    ghd = Exercise(
        name = "Glute Hamstring Raise",
        type = "Lower Body",
        description = "Seat your feet firmly in the leg rollers of the GHD with your thighs secure against the pads. Keeping your back straight raise your upper body straight up using your glutes and hamstrings and sink slightly below the pads. Lower yourself back down against the pads so you are overhanging the ghd totally bent at the hips. Repeat for needed reps.  ",
        image = "https://workout-development-network.s3.us-east-2.amazonaws.com/imageedit_2_6458890741.png",
        experience = "Advanced",
        target_muscles = "Glutes, Hamstrings, and Lower Back",
        owner_id = 3,
        created_at = date.today()
    )

    tricep_pulldown = Exercise(
        name = "Tricep Pulldown",
        type = "Upper Body",
        description = "Grip a bar or rope attached to a pulley system, cable system, or band. Pull down as much as you can until the ropes are at your sides or the bar is resting on your thighs. Slowly raise the bar/rope until tension just comes off of it. Repeat for reps.",
        image = "https://workout-development-network.s3.us-east-2.amazonaws.com/imageedit_2_6458890741.png",
        experience = "Beginner",
        target_muscles = "Triceps",
        owner_id = 1,
        created_at = date.today()
    )

    prisoner_squats = Exercise(
        name = "Glute Hamstring Raise",
        type = "Lower Body",
        description = "Start with your feet slightly more than shoulder width apart and toes positioned at a slight outward angle. Take a breath and brace your core. Start squatting down keeping your back straight pushing your knees out and never letting them cave in, bending at the waist pushing your hips backwards and not flexing your back. Squat down until your quads are parallel to the floor. Maintaining that brace start to rise up from the squat driving with your hips and quads until you are standing straight. Repeat for desired reps.",
        image = "https://workout-development-network.s3.us-east-2.amazonaws.com/imageedit_2_6458890741.png",
        experience = "Intermediate",
        target_muscles = "Glutes, Hamstrings, and Lower Back",
        owner_id = 1,
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
    db.session.add(lateral_raise)
    db.session.add(battle_ropes)
    db.session.add(rdl)
    db.session.add(calf_raise)
    db.session.add(step_ups)
    db.session.add(lat_pulldown)
    db.session.add(ghd)
    db.session.add(jogging)
    db.session.add(bicep_curls)
    db.session.add(tricep_pulldown)
    db.session.add(prisoner_squats)
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