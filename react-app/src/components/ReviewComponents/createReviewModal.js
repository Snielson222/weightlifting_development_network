import React from "react";
import ReactStars from 'react-stars'
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkCreateReview } from "../../store/review";
import { NavLink, useParams, useHistory} from "react-router-dom/cjs/react-router-dom.min";
import { useModal } from "../../context/Modal";

export default function CreateReviewModal({ id }) {
    const {closeModal} = useModal()
    const dispatch = useDispatch()
    const {push} = useHistory()
    const [description, setDescription] = useState('')
    const [rating, setRating] = useState(0)
    
    const ratingChanged = (newRating) => {
        setRating(newRating)
      }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const review = {
            "rating": rating,
            "description": description,
            "exercise_id": id
        }
        const data = await dispatch(thunkCreateReview(review))
        
        return closeModal()

    }

    return (<div>
        <form onSubmit={handleSubmit} className="createReviewForm">
        <ReactStars
  half={false}
  count={5}
  onChange={ratingChanged}
  value={rating}
  size={24}
  color2={'#ffd700'} />
  <label>Description</label>
        <textarea 
        className="textArea"
        value={description}
        onChange={e => setDescription(e.target.value)}/>
        <button className="fileCreate" type="submit">Submit</button>
        </form>
    </div>)
}