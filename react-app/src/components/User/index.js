import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetAllExercises } from "../../store/exercise";
import { NavLink, useParams} from "react-router-dom/cjs/react-router-dom.min";


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
        {userExercises.map((exercise) => (
            <NavLink to={`exercise/${exercise.id}`}>
                <div title={`${exercise.name}`} key={exercise.id}><img id="mappedImage" src={`${exercise.image}`}></img>{exercise.name}</div>
            </NavLink>
        ))}
    </div>)
}