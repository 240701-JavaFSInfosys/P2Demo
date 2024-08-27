import React from "react";
import { UserInterface } from "../interfaces/UserInterface";

//This is a default value for our global User state object
const initialUserState:UserInterface = {
    userId:0,
    username:"",
    role:"",
    jwt:""
}

/* This is our UserContext, and it inludes two parameters:
1) globalUserData: this is the actual user data we want to share globally
2) setGlobalUserData: this is a function that will update the global user data */

export const UserContext = React.createContext<{
    globalUserData:UserInterface,
    //This is a setter for global state - it expects a UserInterface object to use for data mutations
    setGlobalUserData: React.Dispatch<React.SetStateAction<UserInterface>>
}>({
    globalUserData:initialUserState, //setting the initial user state to default values
    setGlobalUserData: () => {} //this is a placeholder, we'll fully define it in the UserProvider
})