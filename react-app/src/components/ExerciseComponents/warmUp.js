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

    return(<div>
        {warmUpArr.map((exercise) => (
            <NavLink to={`exercise/${exercise.id}`}>
                <div title={`${exercise.name}`} key={exercise.id}><img id="mappedImage" src={`${exercise.image}`}></img>{exercise.name}</div>
            </NavLink>
        ))}
    </div>)
}