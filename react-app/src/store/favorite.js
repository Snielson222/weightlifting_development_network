const GET_ALL_FAVORITES = "favorite/GET_ALL_FAVORITES"
const CREATE_FAVORITE = "favorite/CREATE_FAVORITE"
const DELETE_FAVORITE = "favorite/DELETE_FAVORITE"

const actionGetAllFavorites = (favorites) => ({type: GET_ALL_FAVORITES, favorites})
const actionCreateFavorite = (favorite) => ({type: CREATE_FAVORITE, favorite})
const actionDeleteFavorite = (id) => ({type: DELETE_FAVORITE, id})

//GET ALL FAVORITES
export const thunkGetAllFavorites = () => async (dispatch) => {
    const res = await fetch("/api/favorite/all");
    if (res.ok) {
       const data = await res.json();
       dispatch(actionGetAllFavorites(data));
       return data;
    } else {
       const errors = await res.json();
       return errors;
    }
};

//CREATE FAVORITE
export const thunkCreateFavorite = (id) => async (dispatch) => {
    const res = await fetch(`/api/favorite/${id}`);
    if (res.ok) {
       const data = await res.json();
       dispatch(actionCreateFavorite(data));
       return data;
    } else {
       const errors = await res.json();
       return errors;
    }
};


//DELETE FAVORITE
export const thunkDeleteFavorite = (id) => async (dispatch) => {
    const res = await fetch(`/api/favorite/${id}/delete`, {
        method: 'DELETE'
    });
    if (res.ok) {
       const data = await res.json();
       dispatch(actionDeleteFavorite(id));
       return data;
    } else {
       const errors = await res.json();
       return errors;
    }
};

//FAVORITE REDUCER

const initialState = {}

export default function favoriteReducer(state = initialState, action) {
    let newState
    switch(action.type) {
        case GET_ALL_FAVORITES:
            newState = {...state}
            action.favorites.forEach((favorite) => newState[favorite.id] = favorite)
            return newState
        case CREATE_FAVORITE:
            newState = {...state}
            newState[action.favorite.id] = action.favorite
            return newState
        case DELETE_FAVORITE:
            newState = {...state}
            delete newState[action.id]
            return newState
        default:
            return state
    }
}