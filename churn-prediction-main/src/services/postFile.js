import axios from "axios"
export const postFile = async (formData) => {

        return fetch("/upload_excel", {
            method: 'post',
            body: formData
        }).then(res => res.json()).then(data => {
            localStorage.setItem("response",JSON.stringify(data))
            // return data 
        }).catch((error) => {

            alert("Something went wrong, please login again")
            // fetch("/upload_excel", {
            //     method: 'post',
            //     body: formData
            // }).then(res => res.json()).then(data => localStorage.setItem('response_CATCH',JSON.stringify(data)))
            localStorage.setItem("error",error)
        })
}