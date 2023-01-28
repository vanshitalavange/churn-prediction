import { useState, useEffect } from "react"
import { getData } from "../../services/getData";
export const FetchData = () => {

    const [data, setData] = useState({});

    useEffect(() => {
        (async() => {
            const val = await getData();
            setData(val)
        })();
    },[])
  

    return (
        <div style={{backgroundColor:"white"}}>
            <h1>I am fetched data</h1>
            {Object.keys(data).length > 0 && data.members.map((ele) => <h1>{ele}</h1>)}
        </div>
    )
}