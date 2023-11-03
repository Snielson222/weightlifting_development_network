const GET_ALL_EXERCISES = "exercise/GET_ALL_EXERCISES"
const CREATE_EXERCISE = "exercise/CREATE_EXERCISE"
const DELETE_EXERCISE = "exercise/DELETE_EXERCISE"
const SEARCH_EXERCISES = "exercise/SEARCH_EXERCISES"

const actionGetAllExercises = (exercises) => ({type: GET_ALL_EXERCISES, exercises})
const actionCreateExercise = (exercise) => ({type: CREATE_EXERCISE, exercise})
const actionDeleteExercise = (id) => ({type: DELETE_EXERCISE, id})
const actionSearchExercises = (exercises) => ({type: SEARCH_EXERCISES, exercises})

//GET ALL EXERCISES
export const thunkGetAllExercises = () => async (dispatch) => {
    const res = await fetch("/api/exercise/all");
    if (res.ok) {
       const data = await res.json();
       dispatch(actionGetAllExercises(data));
       return data;
    } else {
       const errors = await res.json();
       return errors;
    }
};

//CREATE EXERCISE
export const thunkCreateExercise = (form) => async (dispatch) => {
    const res = await fetch("/api/exercise/new", {
        method: "POST",
        body: form
    });
    if (res.ok) {
       const data = await res.json();
       dispatch(actionCreateExercise(data));
       return data;
    } else {
       const errors = await res.json();
       return errors;
    }
};

//UPDATE EXERCISE
export const thunkUpdateExercise = (updatedExercise, id) => async (dispatch) => {
    const res = await fetch(`/api/exercise/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedExercise)
    });
    if (res.ok) {
       const data = await res.json();
       dispatch(actionCreateExercise(data));
       return data;
    } else {
       const errors = await res.json();
       return errors;
    }
};

//DELETE EXERCISE
export const thunkDeleteExercise = (id) => async (dispatch) => {
    const res = await fetch(`/api/exercise/${id}/delete`, {
        method:"DELETE"
    });
    if (res.ok) {
       const data = await res.json();
       dispatch(actionDeleteExercise(id));
       return data;
    } else {
       const errors = await res.json();
       return errors;
    }
};

//SEARCH EXERCISES
export const thunkSearchExercises = (search) => async (dispatch) => {
    const res = await fetch(`/api/exercise/search/${search}`)
    if (res.ok) {
        const data = await res.json();
        dispatch(actionSearchExercises(data));
        return data;
    } else {
        const errors = await res.json();
        return errors;
    }
}


//EXERCISE REDUCER

const initialState = {}

export default function exerciseReducer(state = initialState, action) {
    let newState
    switch(action.type) {
        case GET_ALL_EXERCISES:
            newState = {...state}
            action.exercises.forEach((exercise) => newState[exercise.id] = exercise)
            return newState
        case CREATE_EXERCISE:
            newState = {...state}
            newState[action.exercise.id] = action.exercise
            return newState
        case DELETE_EXERCISE:
            newState = {...state}
            delete newState[action.id]
            return newState
        case SEARCH_EXERCISES:
            newState = {}
            action.exercises.forEach((exercise) => newState[exercise.id] = exercise)
            return newState
        default:
            return state
    }
}