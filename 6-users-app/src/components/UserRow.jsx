import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { UserContext } from "../context/UserContext"

export const UserRow = ({idUsuario, userName, email}) => {
    const { handlerUserSelectedForm, handlerRemoveUser } = useContext(UserContext);
    return (
        <tr>
            <td>{idUsuario}</td>
            <td>{userName}</td>
            <td>{email}</td>
            <td>
                <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={() => handlerUserSelectedForm({
                        idUsuario,
                        userName,
                        email
                    })}
                >
                    update
                </button>
            </td>
            <td>
                <NavLink className={'btn btn-secondary btn-sm'}
                    to={'/users/edit/' + idUsuario} >
                    update route
                </NavLink>
            </td>
            <td>
                <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => handlerRemoveUser(idUsuario)}
                >
                    remove
                </button>
            </td>
        </tr>
    )
}