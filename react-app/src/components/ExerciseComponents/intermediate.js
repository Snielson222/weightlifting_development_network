import React from "react";
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetAllExercises } from "../../store/exercise";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

export default function Intermediate() {
    const dispatch = useDispatch()
    const allExercises = useSelector((state) => state.exercises)
    const intermediate = Object.values(allExercises).filter((exercise) => exercise.experience == "Intermediate")
    
    const intermediateArr = [...intermediate]

    useEffect(() => {
        dispatch(thunkGetAllExercises())
    }, [dispatch])

    return(<div>
        <h1>Lower Body Exercises</h1>
        {intermediateArr.map((exercise) => (
            <NavLink className="exerciseNav" to={`exercise/${exercise.id}`}>
                <div key={exercise.id}>{exercise.name}</div>
                <div>{exercise.experience}</div>
                <div>{exercise.targetMuscles}</div>
            </NavLink>
        ))}
    </div>)
}