import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkDeleteExercise } from "../../store/exercise";
import { NavLink, useParams, useHistory} from "react-router-dom/cjs/react-router-dom.min";
import { useModal } from "../../context/Modal";


export default function DeleteExerciseModal({id}) {
    const {closeModal} = useModal()
    const dispatch = useDispatch()
    const {push} = useHistory()

    function deleteFunction() {
        dispatch(thunkDeleteExercise(id))
        closeModal()
        return push('/user')
    }
    return(<div>
        <button onClick={deleteFunction}>Yes Delete Exercise</button>
        <button onClick={closeModal}>No Don't Delete</button>
    </div>)
}