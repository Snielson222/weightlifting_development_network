import React from "react";
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetAllExercises } from "../../store/exercise";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

export default function Beginner() {
    const dispatch = useDispatch()
    const allExercises = useSelector((state) => state.exercises)
    const beginner = Object.values(allExercises).filter((exercise) => exercise.experience == "Beginner")
    
    const beginnerArr = [...beginner]

    useEffect(() => {
        dispatch(thunkGetAllExercises())
    }, [dispatch])

    return(<div className="paddingExercises">
        <h1>Beginner Exercises</h1>
        {beginnerArr.map((exercise) => (
            <NavLink className="exerciseNav" to={`exercise/${exercise.id}`}>
                <div key={exercise.id}>{exercise.name}</div>
                <div>{exercise.targetMuscles}</div>
            </NavLink>
        ))}
    </div>)
}