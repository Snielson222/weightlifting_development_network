import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkCreateFavorite, thunkDeleteFavorite, thunkGetAllFavorites } from "../../store/favorite";

export default function FavoriteAnExercise({ favoriteId }) {
    const dispatch = useDispatch()

    const user = useSelector((state) => state.session.user)
    const userId = user?.id

    const favorites = useSelector((state) => state.favorites)
    const thisExerciseFavorite = Object.values(favorites).filter((favorite) => favorite.exerciseId == favoriteId)
    const userFavorites = thisExerciseFavorite.filter((favorite) => favorite.ownerId == userId)
    console.log("🚀 ~ file: index.js:13 ~ FavoriteAnExercise ~ thisExerciseFavorite:", thisExerciseFavorite)

    useEffect(() => {
        dispatch(thunkGetAllFavorites())
    }, [dispatch])

    function deleteFavorite() {
        return dispatch(thunkDeleteFavorite(thisExerciseFavorite[0].id))
        
    }

    function createFavorite() {
        return dispatch(thunkCreateFavorite(favoriteId))
        
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