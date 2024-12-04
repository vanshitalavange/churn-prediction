import "./Tieups.css"
import Navbar from "../navbar/Navbar"
import { Footer } from "../../containers"
import Netflix from "./netflix.jpg"
import Prime from "./prime.png"
import Disney from "./disney.jpg"
import PaymentMethods from "./payment_methods.png"
import Avast from "./avast.jpg"
import McAfee from "./mcafee.png"
import Norton from "./norton.png"
import Visa from "./visa.png"
import MasterCard from "./mastercard.jpg"
import Gpay from "./gpay.png"
import { useNavigate } from "react-router-dom"
import { useAuthContext } from "../../auth-context"

export const Tieups = () => {
    const creditCard = JSON.parse(localStorage.getItem('creditCard'))
    const security = JSON.parse(localStorage.getItem('security'))
    const movie = JSON.parse(localStorage.getItem('movie'))
    console.log(creditCard, security)
    const navigate = useNavigate()
    const cardData = [{ text: "Online Payments", data: creditCard, images:[Visa,MasterCard,Gpay] }, { text: "Online Security", data: security, images:[McAfee,Avast,Norton] }, {text:"Movie Streaming",data:movie, images:[Netflix,Prime,Disney]}]
    return (
        <div>
            <Navbar />
            <div className="tieups">
                <div className="vendors">
                    <h1>Analysing users by interests</h1>
                </div>
                <div className="cards-wrapper">{
                    cardData.map(({ text, data,images }) => <div className="customer-data">
                        <div className="data-card" onClick={() => navigate("/customerdata", { state: { heading: text, customerData: data, images:images } })}>
                            <h2 className="card-text">{text}</h2>
                        </div>
                    </div>)
                }</div>

            </div>
            <Footer />
        </div>
    )
}