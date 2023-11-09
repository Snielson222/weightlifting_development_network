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
    const allExerciseArr = Object.values(allExercises)
    const featuredExercises = []

    function randInt(num) {
        return Math.floor(Math.random() * num);
      }
    
    for (let i = 0; i < 4; i++) {
        featuredExercises.push(allExerciseArr[randInt(allExerciseArr.length - 1)])
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
            <div>
        <h1>Exercises for Enthusiasts,</h1>
        <h1>by Enthusiasts_</h1>
        <h4>Documenting exercises, including Upper Body, Lower Body, and Warm Ups, since 2023</h4>
        <div id="search">
            <form onSubmit={handleSubmit}>
                <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="fileCreate"
                id="searchBar"
                type="search"
                placeholder="Search for an Exercise By Name" />
                <button className="fileCreate" type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
            </form>
            <p>{errors}</p>
        </div>
            </div>
        <img className="weightPlate" src="https://workout-development-network.s3.us-east-2.amazonaws.com/imageedit_2_6458890741.png" alt="weightPlate" />
        </div>
        <div  id="homePageId">
            <h2>Featured Exercises</h2>
        <div id="featuredExercises">
            <div id="featureContainer">
                <NavLink className="featured" to={`exercise/${featuredExercises[0]?.id}`}>
                    <h3>{featuredExercises[0]?.name}</h3>
                    <p className="dontOverflow">{featuredExercises[0]?.description}</p>
                </NavLink>
            </div>
            <div id="featureContainer">
            <NavLink className="featured" to={`exercise/${featuredExercises[1]?.id}`}>
                    <h3>{featuredExercises[1]?.name}</h3>
                    <p className="dontOverflow">{featuredExercises[1]?.description}</p>
                </NavLink>
            </div>
            <div id="featureContainer">
            <NavLink className="featured" to={`exercise/${featuredExercises[2]?.id}`}>
                    <h3>{featuredExercises[2]?.name}</h3>
                    <p className="dontOverflow">{featuredExercises[2]?.description}</p>
                </NavLink>
            </div>
            <div id="featureContainer">
            <NavLink className="featured" to={`exercise/${featuredExercises[3]?.id}`}>
                    <h3>{featuredExercises[3]?.name}</h3>
                    <p className="dontOverflow">{featuredExercises[3]?.description}</p>
                </NavLink>
            </div>
        </div>
        <h2>Recent Contributions</h2>
        <div id="featuredExercises">
            <div id="featureContainer">
            <NavLink className="featured" to={`exercise/${sortedByDateExercises[0]?.id}`}>
                    <h3>{sortedByDateExercises[0]?.name}</h3>
                    <p className="dontOverflow">{sortedByDateExercises[0]?.description}</p>
                </NavLink>
            </div>
            <div id="featureContainer">
            <NavLink className="featured" to={`exercise/${sortedByDateExercises[1]?.id}`}>
                    <h3>{sortedByDateExercises[1]?.name}</h3>
                    <p className="dontOverflow">{sortedByDateExercises[1]?.description}</p>
                </NavLink>
            </div>
            <div id="featureContainer">
            <NavLink className="featured" to={`exercise/${sortedByDateExercises[2]?.id}`}>
                    <h3>{sortedByDateExercises[2]?.name}</h3>
                    <p className="dontOverflow">{sortedByDateExercises[2]?.description}</p>
                </NavLink>
            </div>
            <div id="featureContainer">
            <NavLink className="featured" to={`exercise/${sortedByDateExercises[3]?.id}`}>
                    <h3>{sortedByDateExercises[3]?.name}</h3>
                    <p className="dontOverflow">{sortedByDateExercises[3]?.description}</p>
                </NavLink>
            </div>
        </div>
        </div>
        </div>)
}