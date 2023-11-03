import React from "react";
import { useDispatch } from "react-redux";
import { thunkDeleteReview } from "../../store/review";
import { useModal } from "../../context/Modal";


export default function DeleteReviewModal({reviewId}) {
    const {closeModal} = useModal()
    const dispatch = useDispatch()

    function deleteFunction() {
        dispatch(thunkDeleteReview(reviewId))
        return closeModal()
    }
    return(<div>
        <button className="fileCreate" onClick={deleteFunction}>Yes Delete Review</button>
        <button className="fileCreate" onClick={closeModal}>No Don't Delete</button>
    </div>)
}