import './AttributeSpecificData.css'
import { useAuthContext } from '../../auth-context'
import Navbar from '../navbar/Navbar'
import { Footer } from '../../containers'
import { Table } from "../Table/Table"
import { useLocation } from 'react-router-dom'
export const AttributeSpecificData = () => {
    const {state} = useLocation()
    const {heading, customerData} = state
    return <div>
        <Navbar />
        <div className='table-wrapper'>
            <h2 className='table-heading'>{heading}</h2>
            <Table customers={customerData} />
        </div>
        <Footer />
    </div>
}