import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";


export default function SearchPage() {
    const searchedExercises = useSelector((state) => state.exercises)

    return (<div>
        <h1>Exercises That Match Your Search</h1>
        <h3 className={Object.values(searchedExercises).length ? "hidden" : "bigHeader"}>{Object.values(searchedExercises).length ? "" : "Sorry No Exercises Match Your Search."}</h3>
        {Object.values(searchedExercises).map((exercise) => (
            <NavLink className="exerciseNav" to={`exercise/${exercise.id}`}>
            <div key={exercise.id}>{exercise.name}</div>
            <div>{exercise.experience}</div>
            <div>{exercise.targetMuscles}</div>
        </NavLink>
        ))}
    </div>)

}