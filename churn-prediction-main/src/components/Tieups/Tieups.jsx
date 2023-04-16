import "./Tieups.css"
import Navbar from "../navbar/Navbar"
import { Footer } from "../../containers"
import Netflix from "./netflix.jpg"
import Prime from "./prime.png"
import Disney from "./disney.jpg"
import { useNavigate } from "react-router-dom"
export const Tieups = () => {
    const creditCard = JSON.parse(localStorage.getItem('creditCard'))
    const security = JSON.parse(localStorage.getItem('security'))
    console.log(creditCard, security)
    const navigate = useNavigate()
    const cardData = [{ text: "Online Payments", data: creditCard }, { text: "Online Security", data: security }, {text:"Movie Streaming",data:[]}]
    return (
        <div>
            <Navbar />
            <div className="tieups">
                <div className="vendors">
                    <h1>Vendor Tie-ups</h1>
                    <div className="vendor-imgs">
                        <img src={Netflix} />
                        <img src={Prime} />
                        <img src={Disney} />
                    </div>
                </div>
                <div className="cards-wrapper">{
                    cardData.map(({ text, data }) => <div className="customer-data">
                        <div className="data-card" onClick={() => navigate("/customerdata", { state: { heading: text, customerData: data } })}>
                            <h2 className="card-text">{text}</h2>
                        </div>
                    </div>)
                }</div>

            </div>
            <Footer />
        </div>
    )
}