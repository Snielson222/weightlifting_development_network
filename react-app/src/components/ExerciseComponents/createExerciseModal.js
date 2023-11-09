import React from "react";
import { useEffect, useState } from "react";
import { useDispatch} from "react-redux";
import { thunkCreateExercise } from "../../store/exercise";
import { useHistory} from "react-router-dom/cjs/react-router-dom.min";
import { useModal } from "../../context/Modal";


export default function CreateExerciseModal() {
    const [image, setImage] = useState(null)
    const [imageLoading, setImageLoading] = useState(false);
    const [name, setName] = useState("")
    const [type, setType] = useState("")
    const [description, setDescription] = useState("")
    const [experience, setExperience] = useState("")
    const [muscles, setMuscles] = useState("")
    const [errors, setErrors] = useState({})
    const [e, setE] = useState({})
    

    const {closeModal} = useModal()
    const dispatch = useDispatch()
    const {push} = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("image", image);
        formData.append("name", name);
        formData.append("description", description);
        formData.append("type", type);
        formData.append("experience", experience);
        formData.append("target_muscles", muscles);
       
        setImageLoading(true);
        const data = await dispatch(thunkCreateExercise(formData));
        if (data.errors) {
            setErrors(data.errors)
            console.log("🚀 ~ file: createExerciseModal.js:37 ~ handleSubmit ~ (data:", data)
        } else {
            closeModal()
            return push("/user");
        }
    }
    const ub = "Upper Body"
    const lb = "Lower Body"
    const wu = "Warm Up"

    useEffect(() => {
        const obj = {}
        

            if (name.length < 6) {
                obj.name = "Name Must Be Greater Than 6 characters."
            }
            if (description.length < 12) {
                obj.description = "Description Must Be Greater Than 12 characters."
            }
            if (type == "") {
                obj.type = "You Must Choose a Type."
            }
            if (experience == "") {
                obj.experience = "You Must Choose a Difficulty."
            }
            if (muscles == "") {
                obj.muscles = "You Must Choose Targeted Muscles."
            }
            setE(obj)
        
    }, [name, description, type, experience, muscles])

    return (<div>
        <div className="centerMe">
        <h2>Create an Exercise</h2>
            </div>
        <form 
            className="update-delete-form"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
        >
            <label>
            Name
            </label>
            <input type="text"
            onChange={(e) => setName(e.target.value)}>
            </input>
            <p className="smallFont">{e.name }</p>
            <label>
            Description
            </label>
            <textarea
            className="textArea"
            onChange={(e) => setDescription(e.target.value)}>
            </textarea>
            <p className="smallFont">{e.description}</p>
            <label>
            Muscles Targeted 
            </label>
            <input type="text"
            onChange={(e) => setMuscles(e.target.value)}>
            </input>
            <p className="smallFont">{e.muscles}</p>
            <fieldset>
                <legend>Exercise Type</legend>
                <div>
                    <input type="radio" id="Upper Body" name="exerciseType" value={ub} onChange={(e) => setType(e.target.value)}/>
                    <label for="Upper Body">Upper Body</label>
                </div>
                <div>
                    <input type="radio" id="Lower Body" name="exerciseType" value={lb} onChange={(e) => setType(e.target.value)}/>
                    <label for="Lower Body">Lower Body</label>
                </div>
                <div>
                    <input type="radio" id="Warm Up" name="exerciseType" value={wu} onChange={(e) => setType(e.target.value)}/>
                    <label for="Warm Up">Warm Up</label>
                </div>
            </fieldset>
            <p className="smallFont">{e.type}</p>
            <fieldset>
                <legend>Exercise Difficulty</legend>
                <div>
                    <input type="radio" id="Beginner" name="experience" value={"Beginner"} onChange={(e) => setExperience(e.target.value)}/>
                    <label for="Beginner">Beginner</label>
                </div>
                <div>
                    <input type="radio" id="Intermediate" name="experience" value={"Intermediate"} onChange={(e) => setExperience(e.target.value)}/>
                    <label for="Intermediate">Intermediate</label>
                </div>
                <div>
                    <input type="radio" id="Advanced" name="experience" value={"Advanced"} onChange={(e) => setExperience(e.target.value)}/>
                    <label for="Advanced">Advanced</label>
                </div>
            </fieldset>
            <p className="smallFont">{e.experience}</p>
            <label className="fileCreate">
            <input
              className="hidden"
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
            />
            Upload
            </label>
            <div>{image == null ? "Choose Exercise Image" : image['name']}</div>
            <p className="smallFont">{errors.length ? errors[0] : ""}</p>
            <button className="fileCreate" type="submit" disabled={Object.values(e).length >0}>Submit</button>
            {imageLoading && (<div aria-busy="true" aria-describedby="progress-bar">
        <progress id="progress-bar" aria-label="Content loading…"></progress>
         </div>)}
        </form>
    </div>)
}