// import __html from "./index.html.js"
// var template = { __html: __html };
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
export const Map = () => {
    const navigate = useNavigate()
    useEffect(() => {
        // navigate('/geo.html')
    },[])
    return (
        <div>hello</div>
    // <div className="geo-map" style={{width:"20rem",height:"20rem"}}>
    //     <span dangerouslySetInnerHTML={template} />
    //   </div>
        // <iframe src="https://mapping.vanshitalavange.repl.co" width={"100%"} height={1000} ></iframe>
    )
}