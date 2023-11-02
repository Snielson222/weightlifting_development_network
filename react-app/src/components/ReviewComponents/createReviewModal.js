import React from "react";
import ReactStars from 'react-stars'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkCreateReview } from "../../store/review";
import { NavLink, useParams, useHistory} from "react-router-dom/cjs/react-router-dom.min";
import { useModal } from "../../context/Modal";

export default function CreateReviewModal({ id }) {
    const {closeModal} = useModal()
    const dispatch = useDispatch()
    const {push} = useHistory()
    const [description, setDescription] = useState('')
    const [newRating, setNewRating] = useState('')
    
    const ratingChanged = (newRating) => {
        console.log(newRating)
      }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const review = {
            "rating": newRating,
            "description": description,
            "exercise_id": id
        }
        const data = await dispatch(thunkCreateReview(review))
        console.log("🚀 ~ file: createReviewModal.js:29 ~ onSubmit ~ data:", data)
        return push(`/exercise/${id}`)

    }

    return (<div>
        <form onSubmit={handleSubmit} className="createReviewForm">
        <ReactStars
  count={5}
  onChange={ratingChanged}
  size={24}
  color2={'#ffd700'} />
  <label>Description</label>
        <textarea 
        value={description}
        onChange={e => setDescription(e.target.value)}/>
        <button className="fileCreate" type="submit">Submit</button>
        </form>
    </div>)
}