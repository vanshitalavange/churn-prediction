import { useState } from "react"
import { postFile } from "../../services/postFile"
import {read,utils} from "xlsx"
import exportFromJSON from "export-from-json"

export const SendExcelFile = () => {
    const [fileData, setFileData] = useState(null)
    const [excelData,setExcelData] = useState([{}])

    const handleFile = (e) => {
        setFileData(e.target.files[0])
    }
    const handleSubmit = async () => {
        if(fileData != null){
            const formData = new FormData();
            formData.append('file_from_react',fileData)
            const res = await postFile(formData)
            const data = await res.arrayBuffer()
            const workbook = read(data)
            const worksheet = workbook.Sheets[workbook.SheetNames[0]]
            const jsonData = utils.sheet_to_json(worksheet)
            console.log(jsonData)
            setExcelData(jsonData)
            }
        }
        
        const fileName = 'telco'
        const exportType = 'xls'
        const exportToExcel = () => {
            const data = excelData
            exportFromJSON({data,fileName,exportType})
        }
    
    return (
        <div style={{backgroundColor:"white", padding:"5rem"}}>
        <h1>Upload your file!</h1>
        <input type="file" onChange={handleFile} /> 
        <button onClick={handleSubmit}>Send</button>
        <button onClick={exportToExcel}>EXport</button>
        </div>

    )
}