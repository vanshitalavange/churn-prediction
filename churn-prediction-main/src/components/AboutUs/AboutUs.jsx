import "./AboutUs.css"
import Navbar from "../navbar/Navbar"
import { Footer } from "../../containers"
import Vedant from "./vedant.jpg"
import Mamta from "./mamta.jpg"
import Vanshita from "./vanshita.jpg"
import Sakshi from "./sakshi.jpg"
export const AboutUs = () => {
    return (
        <div className="about-us">
            <Navbar />
            <div className="section-container" style={{ display: "flex", flexDirection: "column" }}>
                <h1 className="container-heading">About us</h1>
                <p className="container-content">
                    Welcome to our churn prediction website! We are a team of data scientists and machine learning experts dedicated to helping businesses reduce customer churn and improve customer retention rates. Our platform leverages advanced algorithms and predictive models to analyze customer data, identify potential churners, and provide actionable insights that can help businesses take proactive measures to retain their customers.
                </p>

                <p className="container-content">Our mission is to empower businesses with the tools they need to make data-driven decisions that drive customer satisfaction and loyalty. With our churn prediction platform, businesses can gain a deeper understanding of their customers' behavior, preferences, and needs, and tailor their strategies accordingly. By predicting which customers are most likely to churn, businesses can take targeted actions to prevent customer attrition, improve their customer experience, and ultimately grow their revenue and bottom line.</p>

                <p className="container-content"> We are committed to providing our clients with the most accurate and reliable churn prediction solutions on the market. Our team is constantly updating our models and algorithms to ensure that our predictions are as precise and effective as possible. We also provide comprehensive support and guidance to help businesses implement our solutions and optimize their customer retention strategies.</p>

                <p className="container-content"> Thank you for choosing our churn prediction website. We look forward to helping you reduce churn and drive growth for your business.</p>

            </div>
            <div className="section-container">
                <h1 className="container-heading">Services we offer</h1>
                <p className="container-content">Our company offers a range of data analytics services to help businesses make informed decisions and achieve their goals. Our churn prediction service uses advanced algorithms and predictive models to analyze customer data and identify those at risk of churning. This enables businesses to take proactive measures to retain their customers and improve their customer retention rates. In addition, we provide visualization services that help businesses gain deeper insights into their data, enabling them to identify trends, patterns, and areas for improvement. Our quick analytics service provides fast, actionable insights that help businesses make informed decisions and take immediate action. Whether you need to predict churn, visualize your data, or get quick insights, our team of experts is here to help.</p>
            </div>
            <div className="section-container">
                <h1 className="container-heading">Meet our team</h1>
                <div style={{ display: "flex", gap: "3rem", justifyContent: "center", marginTop: "3rem", marginBottom:"3rem" }}>
                    <div className="team-wrapper">
                        <img src={Mamta} width={300} height={300} className="team-img" />
                        <p className="team-name">Mamta Bandgar</p>
                    </div>
                    <div className="team-wrapper">
                        <img src={Vedant} width={300} height={300} className="team-img" />
                        <p className="team-name">Vedant Kathe</p>
                    </div>
                    <div className="team-wrapper">
                        <img src={Sakshi} width={300} height={300} className="team-img"/>
                        <p className="team-name">Sakshi Khair</p>
                    </div>
                    <div className="team-wrapper">
                        <img src={Vanshita} width={300} height={300} className="team-img"/>
                        <p className="team-name">Vanshita Lavange</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}