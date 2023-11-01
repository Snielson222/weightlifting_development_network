import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetAllExercises } from "../../store/exercise";
import { NavLink, useParams} from "react-router-dom/cjs/react-router-dom.min";


export default function ExerciseShow() {
    const dispatch = useDispatch()
    const { id } = useParams()
    const allExercises = useSelector((state) => state.exercises)
    const thisExerciseArr = Object.values(allExercises).filter((exercise) => exercise.id == id)
    const thisExercise = thisExerciseArr[0]
    
    useEffect(() => {
        dispatch(thunkGetAllExercises())
    }, [dispatch])

    return(<div>
        <h1>{thisExercise?.name}</h1>
        <img id="thisExerciseImage" src={thisExercise?.image}></img>
        <p>{thisExercise?.description}</p>
        {thisExercise?.reviews.map((review) => (
            <div key={review.id}>
                <div>{review.createdAt}</div>
                <div>{review.description}</div>
            </div>
        ))}
    </div>)
}