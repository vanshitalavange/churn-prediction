import { useState, useEffect } from "react"
import { postFile } from "../../services/postFile"
import Navbar from "../navbar/Navbar"
import { Footer } from "../../containers"
import { Link } from "react-router-dom"
import { read, utils } from "xlsx";
import { useAuthContext } from "../../auth-context"
import "./SendExcelFile.css"

export const SendExcelFile = () => {
    const [fileData, setFileData] = useState(null)
    const [excelData, setExcelData] = useState()
    const [dataStatus, setDataStatus] = useState("pending")
    const [excelFile, setExcelFile] = useState()
    const { filteredUsers, setFilteredUsers } = useAuthContext()
    const [jsonData,setJsonData] = useState(null)

    useEffect(() => {
        if (localStorage.getItem("response") !== null) {
            setDataStatus("response received")
        }

    }, [localStorage.getItem("response")])


    useEffect(() => {
        if(jsonData !== null){
            setFilteredUsers({attempt:"first",json:jsonData})
        }
    },[jsonData])

    const handleFile = async (e) => {
        setFileData(e.target.files[0])
        const file = e.target.files[0]
        const data = await file.arrayBuffer();
        const workbook = read(data);
        const worksheet = workbook.Sheets[workbook.SheetNames[1]];
        const json = utils.sheet_to_json(worksheet);
        setJsonData(json)
    }
    const handleSubmit = async () => {
        if (fileData != null) {
            const formData = new FormData();
            formData.append('file_from_react', fileData)
            setDataStatus("loading")
            await postFile(formData)
        }
    }


    return (
        <>
            <div class="gradient_bg">

                <Navbar />
                <div class="predict-churn-container">
                    <div class="predict-churn-text">
                        <h1 className="gradient__text">Get started by uploading your data. Our churn prediction service can save you from loosing a bunch of customers</h1>
                    </div>

                    <div class="upload-file-container">
                        <h1 className="upload-file-heading">{
                            dataStatus === "pending" ? "Upload your file!" : dataStatus === "loading" ? "Please wait your file is being processed..." : "Predicted results are ready to download"
                        }</h1>
                        {dataStatus !== "response received" && <input style={{ color: "#fff" }} type="file" onChange={handleFile} disabled={dataStatus === "loading" ? true : false} />}
                        {dataStatus !== "response received" ? <button disabled={dataStatus === "loading" ? true : false} className="btn-submit" onClick={handleSubmit}>Start Predicting</button> : <button className="btn-submit"><Link className="btn-submit" to="/charts/output.xlsx" target="_blank" download>Download</Link></button>}
                    </div>
                </div>
            </div>
            {dataStatus === "loading" && <div class="loader">
                <i class="loader-el"></i>
                <i class="loader-el"></i>
            </div>}
            <Footer />
        </>


    )
}