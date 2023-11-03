import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetAllExercises } from "../../store/exercise";
import { NavLink, useParams} from "react-router-dom/cjs/react-router-dom.min";
import OpenModalButton from "../OpenModalButton";
import CreateExerciseModal from "../ExerciseComponents/createExerciseModal";


export default function UserPage() {
    const dispatch = useDispatch()
    const allExercises = useSelector((state) => state.exercises)
    const user = useSelector((state) => state.session.user)
    const userId = user.id
    const userExerciseArr = Object.values(allExercises).filter((exercise) => exercise.ownerId == userId)
    const userExercises = [...userExerciseArr]
    
    useEffect(() => {
        dispatch(thunkGetAllExercises())
    }, [dispatch])

    return(<div>
        <div className="centerMe">
        <OpenModalButton
              buttonText="Create an Exercise"
              modalComponent={<CreateExerciseModal />}
            />
        </div>
        <h1>My Posted Exercises</h1>
        {userExercises.map((exercise) => (
            <NavLink className="exerciseNav" to={`exercise/${exercise.id}`}>
            <div key={exercise.id}>{exercise.name}</div>
            <div>{exercise.experience}</div>
            <div>{exercise.targetMuscles}</div>
        </NavLink>
        ))}
        <h1>My Favorite Exercises</h1>
    </div>)
}