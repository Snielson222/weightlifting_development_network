import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { useHistory, NavLink} from "react-router-dom/cjs/react-router-dom.min";
import { thunkSearchExercises, thunkGetAllExercises } from "../../store/exercise";

export default function HomePage() {
    const dispatch = useDispatch()
    const { push } = useHistory()
    const [search, setSearch] = useState("")
    const [errors, setErrors] = useState('')

    const allExercises = useSelector((state) => state.exercises)
    const featuredExercises = []
    
    for (let i = 0; i < 4; i++) {
        featuredExercises.push(Object.values(allExercises)[i])
    }
    function sortDate(a, b) {
        if (a.createdAt > b.createdAt) {
            return -1;
        } else if (a.createdAt < b.createdAt) {
            return 1;
        }
            return 0;
    }
    const sortedByDateExercises = Object.values(allExercises).sort(sortDate)
    console.log("🚀 ~ file: index.js:28 ~ HomePage ~ sortedByDateExercises:", sortedByDateExercises)

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
            <div id="featureContainer">
                <NavLink className="featured" to={`exercise/${featuredExercises[0]?.id}`}>
                    <h3>{featuredExercises[0]?.name}</h3>
                    <p>{featuredExercises[0]?.description}</p>
                </NavLink>
            </div>
            <div id="featureContainer">
            <NavLink className="featured" to={`exercise/${featuredExercises[1]?.id}`}>
                    <h3>{featuredExercises[1]?.name}</h3>
                    <p>{featuredExercises[1]?.description}</p>
                </NavLink>
            </div>
            <div id="featureContainer">
            <NavLink className="featured" to={`exercise/${featuredExercises[2]?.id}`}>
                    <h3>{featuredExercises[2]?.name}</h3>
                    <p>{featuredExercises[2]?.description}</p>
                </NavLink>
            </div>
            <div id="featureContainer">
            <NavLink className="featured" to={`exercise/${featuredExercises[3]?.id}`}>
                    <h3>{featuredExercises[3]?.name}</h3>
                    <p>{featuredExercises[3]?.description}</p>
                </NavLink>
            </div>
        </div>
        <h4>Recent Contributions</h4>
        <div id="featuredExercises">
            <div id="featureContainer">
            <NavLink className="featured" to={`exercise/${sortedByDateExercises[0]?.id}`}>
                    <h3>{sortedByDateExercises[0]?.name}</h3>
                    <p>{sortedByDateExercises[0]?.description}</p>
                </NavLink>
            </div>
            <div id="featureContainer">
            <NavLink className="featured" to={`exercise/${sortedByDateExercises[1]?.id}`}>
                    <h3>{sortedByDateExercises[1]?.name}</h3>
                    <p>{sortedByDateExercises[1]?.description}</p>
                </NavLink>
            </div>
            <div id="featureContainer">
            <NavLink className="featured" to={`exercise/${sortedByDateExercises[2]?.id}`}>
                    <h3>{sortedByDateExercises[2]?.name}</h3>
                    <p>{sortedByDateExercises[2]?.description}</p>
                </NavLink>
            </div>
            <div id="featureContainer">
            <NavLink className="featured" to={`exercise/${sortedByDateExercises[3]?.id}`}>
                    <h3>{sortedByDateExercises[3]?.name}</h3>
                    <p>{sortedByDateExercises[3]?.description}</p>
                </NavLink>
            </div>
        </div>
        </div>)
}