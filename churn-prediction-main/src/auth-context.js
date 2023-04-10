import { createContext, useContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase-config"
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user,setUser] = useState(null)
    onAuthStateChanged(auth, (currentUser) => setUser(currentUser))
    return <AuthContext.Provider value={{ user }}>
        {children}
    </AuthContext.Provider>
}

export const useAuthContext = () => useContext(AuthContext);