import React from "react";
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetAllExercises } from "../../store/exercise";
import { thunkGetAllFavorites } from "../../store/favorite";
import { NavLink} from "react-router-dom/cjs/react-router-dom.min";
import OpenModalButton from "../OpenModalButton";
import CreateExerciseModal from "../ExerciseComponents/createExerciseModal";


export default function UserPage() {
    const dispatch = useDispatch()
    const allExercises = useSelector((state) => state.exercises)
    const user = useSelector((state) => state.session.user)
    const userId = user?.id
    const userExerciseArr = Object.values(allExercises).filter((exercise) => exercise.ownerId == userId)
    const userExercises = [...userExerciseArr]
    const allFavorites = useSelector((state) => state.favorites)
    const userFavorites = Object.values(allFavorites).filter((favorite) => favorite.ownerId == userId)

    const favoriteExercises = []
    
    userFavorites.forEach((favorite) => {
        Object.values(allExercises).forEach((exercise) => {
            if (favorite.exerciseId == exercise.id) {
                favoriteExercises.push(exercise)
            }
        })
    })
    console.log("🚀 ~ file: index.js:22 ~ UserPage ~ favoriteExercises:", favoriteExercises)

    useEffect(() => {
        dispatch(thunkGetAllExercises())
        dispatch(thunkGetAllFavorites())
    }, [dispatch])

    return(<div>
        <div className="centerMe">
        <OpenModalButton
              buttonText="Create an Exercise"
              modalComponent={<CreateExerciseModal />}
            />
        </div>
        <h1>My Posted Exercises</h1>
        <div>{userExercises.length ? "" : "Click the Create an Exercise button above to post your first exercise!"}</div>
        {userExercises.map((exercise) => (
            <NavLink className="exerciseNav" to={`exercise/${exercise.id}`}>
            <div key={exercise.id}>{exercise.name}</div>
            <div>{exercise.experience}</div>
            <div>{exercise.targetMuscles}</div>
        </NavLink>
        ))}
        <h1>My Favorite Exercises</h1>
        <div>{favoriteExercises.length ? "" : "Click the heart button on an exercise to add it to favorites!"}</div>
        {favoriteExercises.map((exercise) => (
            <NavLink className="exerciseNav" to={`exercise/${exercise.id}`}>
            <div key={exercise.id}>{exercise.name}</div>
            <div>{exercise.experience}</div>
            <div>{exercise.targetMuscles}</div>
        </NavLink>
        ))}
    </div>)
}