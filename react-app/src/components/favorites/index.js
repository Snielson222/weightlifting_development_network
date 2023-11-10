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
        hidden={userFavorites.length}
        id="favoriteButton"
        onClick={createFavorite}
        >
            <i class="fa fa-2x fa-heart" 
            aria-hidden="true"
            id={"unfilled"}></i>
        </button>
        <button
        className={userId ? "" : "hidden"}
        hidden={!userFavorites.length}
        id="favoriteButton"
        onClick={deleteFavorite}
        >
            <i class="fa fa-2x fa-heart" 
            aria-hidden="true"
            id={"filled"}></i>
        </button>
    </div>)
}