import { useState } from "react"

const useUsers = () => {
    const [users, setUsers] = useState([])
    //name
    //email
    //age
    //country

    const addUser = (user) => {
        //setUsers(users.push(user)) *Esta no se utiliza porque puede generar bucles infinitos*
        setUsers([...users, user])
    }

    //[juan, pedro, felipe, jose]
    //2
    //[juan, pedro, jose]

    const deleteUser = (userIndex) => {
        setUsers(users.filter((users, index) => index !== userIndex))
    }
    return [users, addUser, deleteUser]
}


export default useUsers