import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { thunkCreateFavorite, thunkDeleteFavorite, thunkGetAllFavorites } from "../../store/favorite";

export default function FavoriteAnExercise({ favoriteId }) {
    const dispatch = useDispatch()
    const [favorite, setFavorite] = useState(false)

    const favorites = useSelector((state) => state.favorites)
    const thisExerciseFavorite = Object.values(favorites).filter((favorite) => favorite.exerciseId == favoriteId)

    useEffect(() => {
        dispatch(thunkGetAllFavorites())
    }, [dispatch, favorite])

    function deleteFavorite() {
        dispatch(thunkDeleteFavorite(thisExerciseFavorite[0].id))
        return setFavorite(false)
    }

    function createFavorite() {
        dispatch(thunkCreateFavorite(favoriteId))
        return setFavorite(true)
    }

    return (<div>
        <button
        id="favoriteButton"
        onClick={thisExerciseFavorite.length ? deleteFavorite : createFavorite}
        >
            <i class="fa fa-2x fa-heart" 
            aria-hidden="true"
            id={thisExerciseFavorite.length ? "filled" : "unfilled"}></i>
        </button>
    </div>)
}