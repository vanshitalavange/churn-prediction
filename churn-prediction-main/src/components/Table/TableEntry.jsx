// Customer.js
import React from 'react'

// deconstructed props
export const TableEntry = ({customerID, city, zipcode, totalCharges}) => {

  return (
        <tr key={customerID}>
            <td>{customerID}</td>
            <td>{city}</td>
            <td>{zipcode}</td>
            <td>{totalCharges}</td>
        </tr>
  )
}