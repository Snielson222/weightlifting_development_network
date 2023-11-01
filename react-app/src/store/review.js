const GET_ALL_REVIEWS = "review/GET_ALL_REVIEWS"
const CREATE_REVIEW = "review/CREATE_REVIEW"
const DELETE_REVIEW = "review/DELETE_REVIEW"

const actionGetAllReviews = (reviews) => ({type: GET_ALL_REVIEWS, reviews})
const actionCreateReview = (review) => ({type: CREATE_REVIEW, review})
const actionDeleteReview = (id) => ({type: DELETE_REVIEW, id})

//GET ALL REVIEWS
export const thunkGetAllReviews = () => async (dispatch) => {
    const res = await fetch("/api/review/all");
    if (res.ok) {
       const data = await res.json();
       dispatch(actionGetAllReviews(data));
       return data;
    } else {
       const errors = await res.json();
       return errors;
    }
};

//CREATE REVIEW
export const thunkCreateReview = (form) => async (dispatch) => {
    const res = await fetch("/api/review/new", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
    });
    if (res.ok) {
       const data = await res.json();
       dispatch(actionCreateReview(data));
       return data;
    } else {
       const errors = await res.json();
       return errors;
    }
};

//UPDATE REVIEW
export const thunkUpdateReview = (form, id) => async (dispatch) => {
    const res = await fetch(`/api/review/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
    });
    if (res.ok) {
       const data = await res.json();
       dispatch(actionCreateReview(data));
       return data;
    } else {
       const errors = await res.json();
       return errors;
    }
};

//DELETE REVIEW
export const thunkDeleteReview = (id) => async (dispatch) => {
    const res = await fetch(`/api/review/${id}/delete`);
    if (res.ok) {
       const data = await res.json();
       dispatch(actionDeleteReview(id));
       return data;
    } else {
       const errors = await res.json();
       return errors;
    }
};

//REVIEW REDUCER

const initialState = {}

export default function reviewReducer(state = initialState, action) {
    let newState
    switch(action.type) {
        case GET_ALL_REVIEWS:
            newState = {...state}
            action.reviews.forEach((review) => newState[review.id] = review)
            return newState
        case CREATE_REVIEW:
            newState = {...state}
            newState[action.review.id] = action.review
            return newState
        case DELETE_REVIEW:
            newState = {...state}
            delete newState[action.id]
            return newState
        default:
            return state
    }
}