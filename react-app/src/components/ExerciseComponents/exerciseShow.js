import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetAllExercises } from "../../store/exercise";
import { NavLink, useParams} from "react-router-dom/cjs/react-router-dom.min";
import OpenModalButton from "../OpenModalButton";
import DeleteExerciseModal from "./deleteExerciseModal";
import UpdateExerciseModal from "./updateExerciseModel";


export default function ExerciseShow() {
    const dispatch = useDispatch()
    const { id } = useParams()
    const allExercises = useSelector((state) => state.exercises)
    const user = useSelector((state) => state.session.user)
    const userId = user?.id
    const thisExerciseArr = Object.values(allExercises).filter((exercise) => exercise.id == id)
    const thisExercise = thisExerciseArr[0]
    
    useEffect(() => {
        dispatch(thunkGetAllExercises())
    }, [dispatch])

    return(<div id="exerciseShow">
        <h1>{thisExercise?.name}</h1>
        <h3>Recommended Experience Level: {thisExercise?.experience}</h3>
        <img title={`${thisExercise?.name}`} id="thisExerciseImage" src={thisExercise?.image}></img>
        <div className={thisExercise?.ownerId !== userId ? "hidden" : "notHidden"}>
        <OpenModalButton 
            buttonText="Delete Exercise"
            modalComponent={<DeleteExerciseModal id={id} />}
            />
        <OpenModalButton 
            buttonText="Update Exercise"
            modalComponent={<UpdateExerciseModal id={id} />}
            />
        </div>
        <h4>Muscles Targeted: {thisExercise?.targetMuscles}</h4>
        <p>{thisExercise?.description}</p>
    </div>)
}