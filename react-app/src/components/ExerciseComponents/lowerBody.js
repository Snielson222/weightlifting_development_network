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
        {lowerBodyArr.map((exercise) => (
            <NavLink to={`exercise/${exercise.id}`}>
                <div title={`${exercise.name}`} key={exercise.id}><img id="mappedImage" src={`${exercise.image}`}></img>{exercise.name}</div>
            </NavLink>
        ))}
    </div>)
}