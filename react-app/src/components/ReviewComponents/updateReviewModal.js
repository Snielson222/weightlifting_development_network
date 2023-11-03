import React from "react";
import ReactStars from 'react-stars'
import { useState, useEffect} from "react";
import { useDispatch, useSelector} from "react-redux";
import { thunkUpdateReview } from "../../store/review";
import { useHistory} from "react-router-dom/cjs/react-router-dom.min";
import { useModal } from "../../context/Modal";

export default function UpdateReviewModal({ reviewId }) {
    console.log("🚀 ~ file: updateReviewModal.js:10 ~ UpdateReviewModal ~ reviewId:", reviewId)
    const reviews = useSelector((state) => state.reviews)
    const thisReviewArr = Object.values(reviews).filter((review) => review.id == reviewId)
    const thisReview = thisReviewArr[0]  

    const {closeModal} = useModal()
    const dispatch = useDispatch()
    const [description, setDescription] = useState(thisReview.description)
    const [rating, setRating] = useState(thisReview.rating)



    const ratingChanged = (newRating) => {
        setRating(newRating)
      }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const review = {
            "rating": rating,
            "description": description,
            "exercise_id": thisReview.exerciseId
        }
        const data = await dispatch(thunkUpdateReview(review, reviewId))
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
        value={description}
        onChange={e => setDescription(e.target.value)}/>
        <button className="fileCreate" type="submit">Submit</button>
        </form>
    </div>)
}