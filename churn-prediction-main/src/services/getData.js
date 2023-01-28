import axios from "axios"

export const getData = async () => {
    try{
        const response = await axios.get("/get_data");
        return response.data
    }catch(e){
        console.log("error in fetching data...",e)
    }
}