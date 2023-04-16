import { createContext, useContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase-config"
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [filteredUsers, setFilteredUsers] = useState({attempt:"zero"})
    
    useEffect(() => {

        if (filteredUsers.attempt === 'first') {
            const jsonData = filteredUsers.json
            const creditCardUsersAllFields = jsonData.filter((customer) => customer['Payment Method'] === 'Credit card (automatic)')
            const securityUsersAllFields = jsonData.filter((customer) => customer['Online Security'] === 'Yes' || customer['Device Protection'] === 'Yes' || customer['Tech Support'] === 'Yes')
            const creditCardUsers = creditCardUsersAllFields.map((customer) => {
                return ({
                    customerID: customer['CustomerID'],
                    city: customer['City'],
                    zipcode: customer['Zip Code'],
                    totalCharges: customer['Total Charges']
                })
            })
            const securityUsers = securityUsersAllFields.map((customer) => {
                return ({
                    customerID: customer['CustomerID'],
                    city: customer['City'],
                    zipcode: customer['Zip Code'],
                    totalCharges: customer['Total Charges']
                })
            })
            localStorage.setItem("creditCard",JSON.stringify(creditCardUsers))
            localStorage.setItem('security',JSON.stringify(securityUsers))
            setFilteredUsers(({attempt:"second",creditCard:creditCardUsers,security:securityUsers}))
        }
        console.log("fill....",filteredUsers)
    }, [filteredUsers])
    onAuthStateChanged(auth, (currentUser) => setUser(currentUser))
    return <AuthContext.Provider value={{ user, filteredUsers, setFilteredUsers }}>
        {children}
    </AuthContext.Provider>
}

export const useAuthContext = () => useContext(AuthContext);