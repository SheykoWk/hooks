import { useContext } from "react"
import { UsersContext } from "../context/UsersContext"

const UsersList = () => {
    const [users] = useContext(UsersContext)

    return (
        users.map(user => {
            return(
                <div key={user.name}>
                    {user.name}
                    {user.age}
                    {user.country}
                </div>
            )
        })
    )
}

export default UsersList