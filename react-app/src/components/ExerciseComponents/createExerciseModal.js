import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkCreateExercise } from "../../store/exercise";
import { NavLink, useParams, useHistory} from "react-router-dom/cjs/react-router-dom.min";



export default function CreateExerciseModal() {
    const [image, setImage] = useState(null)
    console.log("🚀 ~ file: createExerciseModal.js:11 ~ CreateExerciseModal ~ image:", image)
    const [imageLoading, setImageLoading] = useState(false);
    const [name, setName] = useState("")
    console.log("🚀 ~ file: createExerciseModal.js:13 ~ CreateExerciseModal ~ name:", name)
    const [type, setType] = useState("")
    console.log("🚀 ~ file: createExerciseModal.js:14 ~ CreateExerciseModal ~ type:", type)
    const [description, setDescription] = useState("")

    const dispatch = useDispatch()
    const {push} = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("image", image);
        formData.append("name", name);
        formData.append("description", description);
        formData.append("type", type);
        // aws uploads can be a bit slow—displaying
        // some sort of loading message is a good idea
        setImageLoading(true);
        await dispatch(thunkCreateExercise(formData));
        push("/");
    }
    const ub = "Upper Body"
    const lb = "Lower Body"
    const wu = "Warm Up"

    return (<div>
        <form 
            onSubmit={handleSubmit}
            encType="multipart/form-data"
        >
            <label>
            <input type="text"
            onChange={(e) => setName(e.target.value)}>
            </input>
            Name
            </label>
            <label>
            <textarea
            onChange={(e) => setDescription(e.target.value)}>
            </textarea>
            Description
            </label>
            <fieldset>
                <legend>Select an Exercise Type:</legend>
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
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
            />
            <button type="submit">Submit</button>
            {(imageLoading)&& <p>Loading...</p>}
        </form>
    </div>)
}