import { PropsWithChildren, createContext, useState } from "react";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext(null);

export default function AuthContextProvider(props:PropsWithChildren){

    const [userData, setUserData] = useState(null);

    const saveUserData = () => {
        const encodedToken = localStorage.getItem('userToken');
        const decodedToken = jwtDecode(encodedToken);
        setUserData(decodedToken);
    }

    return <AuthContext.Provider value={{saveUserData, userData}}>
        {props.children}
    </AuthContext.Provider>
}