import { createContext } from "react";
import useUsers from "../customHooks/useUsers";

export const UsersContext = createContext() //React.createContext()


export const UsersProvider = ({children}) => {

    const users = useUsers()

    return( 
        <UsersContext.Provider value={users}>
            {children}
        </UsersContext.Provider>
    )
}