import './AttributeSpecificData.css'
import { useAuthContext } from '../../auth-context'
import { Table } from "../Table/Table"
export const AttributeSpecificData = () => {
    const creditCard = JSON.parse(localStorage.getItem('creditCard'))
    const security = JSON.parse(localStorage.getItem('security'))
    console.log(creditCard, security)
    return <div style={{backgroundColor:"white"}}>
        <h2>Tie ups</h2>
        <Table customers={creditCard}/>
    </div>
}