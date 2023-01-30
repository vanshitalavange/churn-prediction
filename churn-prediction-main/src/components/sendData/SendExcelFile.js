import { useState } from "react"
import { postFile } from "../../services/postFile"

export const SendExcelFile = () => {
    const [fileData, setFileData] = useState(null)

    const handleFile = (e) => {
        setFileData(e.target.files[0])
    }
    const handleSubmit = async () => {
        if(fileData != null){
            const formData = new FormData();
            formData.append('file_from_react',fileData)
            const res = await postFile(formData)
            console.log(res)
        }
    }
    return (
        <div style={{backgroundColor:"white", padding:"5rem"}}>
        <h1>Upload your file!</h1>
        <input type="file" onChange={handleFile}/> 
        <button onClick={handleSubmit}>Send</button>
        </div>

    )
}