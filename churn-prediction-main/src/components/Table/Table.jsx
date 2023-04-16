// import Customer from './Customer'
import { TableEntry } from './TableEntry'

export const Table = ({customers}) => {

  return (
        <table>
          <thead>
            <tr>
              <th>Customer ID</th>
              <th>City</th>
              <th>Zip code</th>
              <th>Total Charges</th>
            </tr>
          </thead>
          <tbody>
            {/* iterate through the customers array and render a unique Customer component for each customer object in the array */}
            { customers.map(customer => <TableEntry customerID={customer.customerID} city={customer.city} zipcode={customer.zipcode} totalCharges={customer.totalCharges} />) }
          </tbody>
        </table>
  )
}