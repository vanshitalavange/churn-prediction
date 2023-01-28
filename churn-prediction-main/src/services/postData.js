import axios from "axios"
export const postData = async (clientObj) => {
    try {
        const response = await axios.post("/add_data",{
            name:clientObj.name,
            age:clientObj.age
        })
        return response.status
    } catch (e) {
        console.log("error in posting data...", e);
    }
}