import axios from "axios"

export const postFile = async (formData) => {
    try {
        const response = await fetch("/upload_excel", {
            method: 'post',
            body: formData
        })
        return response.status
    } catch (e) {
        console.log(e)
    }
}