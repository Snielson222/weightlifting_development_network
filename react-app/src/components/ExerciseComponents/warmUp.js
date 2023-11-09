import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetAllExercises } from "../../store/exercise";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

export default function WarmUp() {
    const dispatch = useDispatch()
    const allExercises = useSelector((state) => state.exercises)
    const warmUp = Object.values(allExercises).filter((exercise) => exercise.type == "Warm Up")
    
    const warmUpArr = [...warmUp]


    useEffect(() => {
        dispatch(thunkGetAllExercises())
    }, [dispatch])

    return(<div className="paddingExercises">
        <h1>Warm Up Exercises</h1>
        {warmUpArr.map((exercise) => (
             <NavLink className="exerciseNav" to={`exercise/${exercise.id}`}>
             <div key={exercise.id}>{exercise.name}</div>
             <div>{exercise.targetMuscles}</div>
         </NavLink>
        ))}
    </div>)
}