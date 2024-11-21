import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import { UserRow } from "./UserRow"

export const UsersList = () => {

    const { users } = useContext(UserContext);
    return (
        <table className="table table-hover table-striped">

            <thead>
                <tr>
                    <th>#</th>
                    <th>username</th>
                    <th>email</th>
                    <th>update</th>
                    <th>update route</th>
                    <th>remove</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(({idUsurio, userName, email }) => (
                        <UserRow
                            key={idUsurio}
                            idUsuario={idUsurio}
                            userName={userName}
                            email={email} />
                    ))
                }
            </tbody>
        </table>
    )
}