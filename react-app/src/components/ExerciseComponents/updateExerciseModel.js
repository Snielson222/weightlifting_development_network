import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkUpdateExercise, thunkGetAllExercises} from "../../store/exercise";
import { useHistory} from "react-router-dom/cjs/react-router-dom.min";
import { useModal } from "../../context/Modal";


export default function UpdateExerciseModal({id}) {
    const allExercises = useSelector((state) => state.exercises)
    const thisExerciseArr = Object.values(allExercises).filter((exercise) => exercise.id == id)
    const thisExercise = thisExerciseArr[0]
    console.log("🚀 ~ file: updateExerciseModel.js:12 ~ UpdateExerciseModal ~ thisExercise:", thisExercise)

    const [name, setName] = useState('')
    const [type, setType] = useState("")
    console.log("🚀 ~ file: updateExerciseModel.js:17 ~ UpdateExerciseModal ~ type:", type)
    const [description, setDescription] = useState('')
    const [experience, setExperience] = useState('')
    const [muscles, setMuscles] = useState('')
    const [imageChosen, setImageChosen] = useState(false)
    const [e, setE] = useState({})
    const [errors, setErrors] = useState({})

    const {closeModal} = useModal()
    const dispatch = useDispatch()
    const {push} = useHistory()


    useEffect(() => {
        dispatch(thunkGetAllExercises())
        setDescription(thisExercise?.description)
        setExperience(thisExercise?.experience)
        setType(thisExercise?.type)
        setName(thisExercise?.name)
        setMuscles(thisExercise?.targetMuscles)
    }, [dispatch])

    useEffect(() => {

        const obj = {}

            if (name.length < 6) {
                obj.name = "Name Must Be Greater Than 6 characters."
            }
            if (description.length < 12) {
                obj.description = "Description Must Be Greater Than 12 characters."
            }
            if (muscles == "") {
                obj.muscles = "You Must Choose Targeted Muscles."
            }
            setE(obj)


    }, [muscles, name, description])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedExercise = {
            "name": name,
            "type": type,
            "description": description,
            "experience": experience,
            "target_muscles": muscles
        }
        
        const data = await dispatch(thunkUpdateExercise(updatedExercise, id))
        if (data.errors) {
            setErrors(data.errors)
            console.log("🚀 ~ file: createExerciseModal.js:37 ~ handleSubmit ~ (data:", data)
        } else {
            closeModal()
            return push(`/exercise/${thisExercise?.id}`);
        }
    }

    return (<div>
        <div className="centerMe">
        <h2>Update Exercise</h2>
        </div>
        <ul>
			{errors.length ? errors?.map((error, idx) => (
				<div key={idx}>{error}</div>
			)): ""}
		</ul>
        <form 
            className="update-delete-form"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
        >
            <label>
            Name
            </label>
            <input type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}>
            </input>
            <p className="smallFont">{e.name }</p>
            <label>
            Description
            </label>
            <textarea
            className="textArea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}>
            </textarea>
            <p className="smallFont">{e.description }</p>
            <label>
            Muscles Targeted
            </label>
            <input type="text"
            value={muscles}
            onChange={(e) => setMuscles(e.target.value)}>
            </input>
            <p className="smallFont">{e.muscles }</p>
            <fieldset>
                <legend>Exercise Type</legend>
                <div>
                    <input checked={type === 'Upper Body'} type="radio" id="Upper Body" name="exerciseType" value="Upper Body" onChange={(e) => setType(e.target.value)}/>
                    <label for="Upper Body">Upper Body</label>
                </div>
                <div>
                    <input checked={type === 'Lower Body'} type="radio" id="Lower Body" name="exerciseType" value="Lower Body" onChange={(e) => setType(e.target.value)}/>
                    <label for="Lower Body">Lower Body</label>
                </div>
                <div>
                    <input checked={type === 'Warm Up'} type="radio" id="Warm Up" name="exerciseType" value="Warm Up" onChange={(e) => setType(e.target.value)}/>
                    <label for="Warm Up">Warm Up</label>
                </div>
            </fieldset>
            <br />
            <fieldset>
                <legend>Exercise Difficulty</legend>
                <div>
                    <input checked={experience === 'Beginner'} type="radio" id="Beginner" name="experience" value={"Beginner"} onChange={(e) => setExperience(e.target.value)}/>
                    <label for="Beginner">Beginner</label>
                </div>
                <div>
                    <input checked={experience === 'Intermediate'} type="radio" id="Intermediate" name="experience" value={"Intermediate"} onChange={(e) => setExperience(e.target.value)}/>
                    <label for="Intermediate">Intermediate</label>
                </div>
                <div>
                    <input checked={experience === 'Advanced'} type="radio" id="Advanced" name="experience" value={"Advanced"} onChange={(e) => setExperience(e.target.value)}/>
                    <label for="Advanced">Advanced</label>
                </div>
            </fieldset>
            <button className="fileCreate" type="submit">Submit</button>
        </form>
    </div>)
}