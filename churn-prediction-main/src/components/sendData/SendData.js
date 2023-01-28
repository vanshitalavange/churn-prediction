import { useState } from "react"
import { postData } from "../../services/postData";

export const SendData = () => {
    const [input,setInput] = useState({});

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async () => {
        const res = await postData(input)
        console.log("RESULT: ",res)
    }
    return (
        <div><h1 style={{color:"white"}}>You can post data from here</h1>
        <input type="text" name="name" placeholder="name" onChange={handleChange}/>
        <input type="age" name="age" placeholder="age" onChange={handleChange}/>
        <button onClick={handleSubmit}>submit</button>
        </div>
    )
}