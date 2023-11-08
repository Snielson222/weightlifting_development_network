import React from "react";
import ReactStars from 'react-stars'
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetAllExercises } from "../../store/exercise";
import { thunkGetAllReviews } from "../../store/review"
import { useParams} from "react-router-dom/cjs/react-router-dom.min";
import OpenModalButton from "../OpenModalButton";
import DeleteExerciseModal from "./deleteExerciseModal";
import UpdateExerciseModal from "./updateExerciseModel";
import CreateReviewModal from "../ReviewComponents/createReviewModal";
import UpdateReviewModal from "../ReviewComponents/updateReviewModal";
import DeleteReviewModal from "../ReviewComponents/deleteReviewModal";
import FavoriteAnExercise from "../favorites";


export default function ExerciseShow() {
    const dispatch = useDispatch()
    const { id } = useParams()

    const allExercises = useSelector((state) => state.exercises)
    const thisExerciseArr = Object.values(allExercises).filter((exercise) => exercise.id == id)
    const thisExercise = thisExerciseArr[0]

    const user = useSelector((state) => state.session.user)
    const userId = user?.id

    const allReviews = useSelector((state) => state.reviews)
    const thisExerciseReviews = Object.values(allReviews).filter((review) => review.exerciseId == id)
    const reviewArr = [...thisExerciseReviews]

    const userReviews = reviewArr.filter((review) => review.ownerId == userId)

    const ratingChanged = (newRating) => {
        console.log(newRating)
      }

    
    useEffect(() => {
        dispatch(thunkGetAllExercises())
        dispatch(thunkGetAllReviews())
    }, [dispatch])

    return(<div id="exerciseShow">
        <h1>{thisExercise?.name}</h1>
        <h3>Recommended Experience Level: {thisExercise?.experience}</h3>
        <img title={`${thisExercise?.name}`} id="thisExerciseImage" src={thisExercise?.image}></img>
        <FavoriteAnExercise favoriteId={id}/>
        <div className={thisExercise?.ownerId !== userId ? "hidden" : "notHidden"}>
        <OpenModalButton 
            buttonText="Delete Exercise"
            modalComponent={<DeleteExerciseModal id={id} />}
            />
        <OpenModalButton 
            buttonText="Update Exercise"
            modalComponent={<UpdateExerciseModal id={id} />}
            />
        </div>
        <h4>Muscles Targeted: {thisExercise?.targetMuscles}</h4>
        <p>{thisExercise?.description}</p>
        <div className={!userReviews.length && userId && userId !== thisExercise?.ownerId ? "centerMe" : "hidden"}>
        <OpenModalButton 
            buttonText="Review This Exercise"
            modalComponent={<CreateReviewModal id={id} />}
            />
        <h2>{reviewArr.length ? "Reviews" : "Be the First To Post a Review"}</h2>
        </div>
        {reviewArr?.map((review) => (
            <div id="review" key={review.id}>
            <ReactStars
            value={review.rating}
            edit={false}
            size={24}
            color2={'#ffd700'} />
            <p>{review.description}</p>
            <div className={review?.ownerId !== userId ? "hidden" : "notHidden"}>
            <OpenModalButton 
            buttonText="Update"
            modalComponent={<UpdateReviewModal reviewId={review.id} />}
            />
            <OpenModalButton 
            buttonText="Delete"
            modalComponent={<DeleteReviewModal reviewId={review.id} />}
            />
            </div>
            </div>
        ))}
    </div>)
}