import React from "react";
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetAllExercises } from "../../store/exercise";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

export default function Advanced() {
    const dispatch = useDispatch()
    const allExercises = useSelector((state) => state.exercises)
    const advanced = Object.values(allExercises).filter((exercise) => exercise.experience == "Advanced")
    
    const advancedArr = [...advanced]

    useEffect(() => {
        dispatch(thunkGetAllExercises())
    }, [dispatch])

    return(<div className="paddingExercises">
        <h1>Advanced Exercises</h1>
        {advancedArr.map((exercise) => (
            <NavLink className="exerciseNav" to={`exercise/${exercise.id}`}>
                <div key={exercise.id}>{exercise.name}</div>
                <div>{exercise.targetMuscles}</div>
            </NavLink>
        ))}
    </div>)
}