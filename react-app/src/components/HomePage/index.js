import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { thunkSearchExercises, thunkGetAllExercises } from "../../store/exercise";

export default function HomePage() {
    const dispatch = useDispatch()
    const { push } = useHistory()
    const [search, setSearch] = useState("")
    const [errors, setErrors] = useState('')

    useEffect(() => {
        dispatch(thunkGetAllExercises())
    }, [dispatch])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = await dispatch(thunkSearchExercises(search))
        if (!data.errors) {
            setSearch('')
            return push('/search')
        } else {
            setErrors(data.errors)
        }
    }
    return(<div>
        <div id="spinningHome">
        <h1>Exercises for Enthusiasts,</h1>
        <h1>by Enthusiasts_</h1>
        <h4>Documenting exercises, including Upper Body, Lower Body, and Warm Ups, since 2023</h4>
        </div>
        <div id="search">
            <form onSubmit={handleSubmit}>
                <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="fileCreate"
                type="search"
                placeholder="Search for an Exercise" />
                <button className="fileCreate" type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
            </form>
            <p>{errors}</p>
        </div>
            <h4>Featured Exercises</h4>
        <div id="featuredExercises">
            <div id="featureContainer"></div>
            <div id="featureContainer"></div>
            <div id="featureContainer"></div>
            <div id="featureContainer"></div>
        </div>
        <h4>Recent Contributions</h4>
        <div id="featuredExercises">
            <div id="featureContainer"></div>
            <div id="featureContainer"></div>
            <div id="featureContainer"></div>
            <div id="featureContainer"></div>
        </div>
        </div>)
}