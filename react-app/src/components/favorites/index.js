import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkCreateFavorite, thunkDeleteFavorite, thunkGetAllFavorites } from "../../store/favorite";

export default function FavoriteAnExercise({ favoriteId }) {
    const dispatch = useDispatch()
    const [favorite, setFavorite] = useState(false)

    const user = useSelector((state) => state.session.user)
    const userId = user?.id

    const favorites = useSelector((state) => state.favorites)
    const thisExerciseFavorite = Object.values(favorites).filter((favorite) => favorite.exerciseId == favoriteId)
    const userFavorites = thisExerciseFavorite.filter((favorite) => favorite.ownerId == userId)
    console.log("🚀 ~ file: index.js:13 ~ FavoriteAnExercise ~ thisExerciseFavorite:", thisExerciseFavorite)

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
        className={userId ? "" : "hidden"}
        id="favoriteButton"
        onClick={userFavorites.length ? deleteFavorite : createFavorite}
        >
            <i class="fa fa-2x fa-heart" 
            aria-hidden="true"
            id={userFavorites.length > 0 ? "filled" : "unfilled"}></i>
        </button>
    </div>)
}