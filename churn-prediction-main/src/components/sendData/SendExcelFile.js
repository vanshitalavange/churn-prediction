import { useState, useEffect } from "react"
import { postFile } from "../../services/postFile"
import { read, utils } from "xlsx"
import exportFromJSON from "export-from-json"
import Navbar from "../navbar/Navbar"
import { Footer } from "../../containers"
import "./SendExcelFile.css"

export const SendExcelFile = () => {
    const [fileData, setFileData] = useState(null)
    const [excelData, setExcelData] = useState()

    const [dataStatus, setDataStatus] = useState("pending")

    useEffect(() => {
        console.log("excel data variable changing...")
        if (excelData !== undefined) {
            setDataStatus("response received")
        }
    }, [excelData])

    const handleFile = (e) => {
        setFileData(e.target.files[0])
    }
    const handleSubmit = async () => {
        if (fileData != null) {
            const formData = new FormData();
            formData.append('file_from_react', fileData)
            setDataStatus("loading")
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
        exportFromJSON({ data, fileName, exportType })
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
                        {dataStatus !== "response received" ? <button disabled={dataStatus === "loading" ? true : false} className="btn-submit" onClick={handleSubmit}>Start Predicting</button> : <button className="btn-submit" onClick={exportToExcel}>Download</button>}
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