import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetAllExercises } from "../../store/exercise";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

export default function UpperBody() {
    const dispatch = useDispatch()
    const allExercises = useSelector((state) => state.exercises)
    const upperBody = Object.values(allExercises).filter((exercise) => exercise.type == "Upper Body")
    
    const upperBodyArr = [...upperBody]

    useEffect(() => {
        dispatch(thunkGetAllExercises())
    }, [dispatch])

    return (<div className="paddingExercises">
        <h1>Upper-Body Exercises</h1>
        {upperBodyArr.map((exercise) => (
             <NavLink className="exerciseNav" to={`exercise/${exercise.id}`}>
             <div key={exercise.id}>{exercise.name}</div>
             <div>{exercise.targetMuscles}</div>
         </NavLink>
        ))}
    </div>)
}