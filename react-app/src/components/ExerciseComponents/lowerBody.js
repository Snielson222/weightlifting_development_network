import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetAllExercises } from "../../store/exercise";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

export default function LowerBody() {
    const dispatch = useDispatch()
    const allExercises = useSelector((state) => state.exercises)
    const lowerBody = Object.values(allExercises).filter((exercise) => exercise.type == "Lower Body")
    
    const lowerBodyArr = [...lowerBody]

    useEffect(() => {
        dispatch(thunkGetAllExercises())
    }, [dispatch])

    return(<div>
        <h1>Lower Body Exercises</h1>
        {lowerBodyArr.map((exercise) => (
            <NavLink className="exerciseNav" to={`exercise/${exercise.id}`}>
                <div key={exercise.id}>{exercise.name}</div>
                <div>{exercise.experience}</div>
                <div>{exercise.targetMuscles}</div>
            </NavLink>
        ))}
    </div>)
}