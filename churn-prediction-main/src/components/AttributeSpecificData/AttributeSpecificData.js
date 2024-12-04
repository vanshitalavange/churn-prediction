import './AttributeSpecificData.css'
import { useAuthContext } from '../../auth-context'
import Navbar from '../navbar/Navbar'
import { Footer } from '../../containers'
import { Table } from "../Table/Table"
import { useLocation } from 'react-router-dom'
export const AttributeSpecificData = () => {
    const {state} = useLocation()
    const {heading, customerData, images} = state
    return <div>
        <Navbar />
        <div className='table-wrapper'>
            {/* <h2 className='table-heading'>{heading}</h2> */}
            <div className='title-img-wrapper'>
                <h2 className='table-heading'>Potential clients for tieup offers</h2>
                <div className='vendor-imgs'>
                    {images.map((prodImg) => <img src={prodImg}/>)}
                </div>
            </div>
            <Table customers={customerData} />
        </div>
        <Footer />
    </div>
}