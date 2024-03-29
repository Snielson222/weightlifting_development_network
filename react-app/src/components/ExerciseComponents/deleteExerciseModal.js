import React from "react";
import { useDispatch } from "react-redux";
import { thunkDeleteExercise } from "../../store/exercise";
import { useHistory} from "react-router-dom/cjs/react-router-dom.min";
import { useModal } from "../../context/Modal";


export default function DeleteExerciseModal({id}) {
    const {closeModal} = useModal()
    const dispatch = useDispatch()
    const {push} = useHistory()

    function deleteFunction() {
        dispatch(thunkDeleteExercise(id))
        closeModal()
        return push('/')
    }
    return(<div>
        <button className="fileCreate" onClick={deleteFunction}>Yes (Delete Exercise)</button>
        <button className="fileCreate" onClick={closeModal}>No (Don't Delete Exercise)</button>
    </div>)
}