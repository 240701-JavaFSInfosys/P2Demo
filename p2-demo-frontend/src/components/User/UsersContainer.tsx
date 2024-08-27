import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { UserInterface } from "../../interfaces/UserInterface"
import { User } from "./User"
import { store } from "../../globalData/store"
import { UserContext } from "../../globalData/UserContext"

export const UsersContainer: React.FC<any> = ({users:any}) => {

    //useState hook, which will store an Array of Users (to send to the User Component)
    const [users, setUsers] = useState<UserInterface[]>([])

    //*NEW! Context API state for global user data
    const {globalUserData, setGlobalUserData} = useContext(UserContext)

    //need this to navigate between URLS
    const navigate = useNavigate()

    //useEffect to GET the List of User upon component render
    useEffect(()=>{

        //simple route guard - if the user is not an admin send them back to login
        if(globalUserData.role !== "admin"){
            navigate("/")
        }

        getAllUsers()
    }, [])

    //function to get all users from the DB
    const getAllUsers = async () => {

        const response = await axios.get("http://44.201.178.118:8080/users", {
            headers: {
                'Authorization': `Bearer ${globalUserData.jwt}`
            }
        })
        .then(
            (response) => {
                console.log(response.data)
                setUsers(response.data) 
                //now we have users state we can send to the User component
            }
        )

    }

    return(
        <div>
            <button onClick={()=>navigate("/cars")}>See Your Cars</button>
            <User users={users}></User>
        </div>
    )

}