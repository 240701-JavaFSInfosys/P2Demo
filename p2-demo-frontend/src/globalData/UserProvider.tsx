/* This component is a provider - it will PROVIDE the UserContext to all of its child components 
We will wrap this around EVERY component we render in the app.tsx to make our user data global*/

import { useState } from "react"
import { UserInterface } from "../interfaces/UserInterface"
import { UserContext } from "./UserContext"

//The children prop represents whatever components you wrap with this provider (all of them)
export const UserProvider: React.FC<any> = ({children}) => {

    //define the globally visible state with useState!
    const [globalUserData, setGlobalUserData] = useState<UserInterface>({
        userId:0,
        username:"",
        role:"",
        jwt:""
    }) 

    //Now we're going to make the global state variable AND the mutator available to all children.
    return(
        <UserContext.Provider value={{globalUserData, setGlobalUserData}}>
            {children}
        </UserContext.Provider>
    )
}