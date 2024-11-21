import { useContext, useEffect, useState } from "react"
import Swal from "sweetalert2";
import { UserContext } from "../context/UserContext";

export const UserForm = ({ userSelected, handlerCloseForm }) => {

    const { initialUserForm, handlerAddUser } = useContext(UserContext);
    
    const [userForm, setUserForm] = useState(initialUserForm);

    const { idUsuario, userName, password, email } = userForm;

    useEffect(() => {
        setUserForm({
            ...userSelected,
            password: '',
        });
    }, [userSelected]);

    const onInputChange = ({ target }) => {
        // console.log(target.value)
        const { name, value } = target;
        setUserForm({
            ...userForm,
            [name]: value,
        })
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (!userName || (!password && idUsuario === 0) || !email) {
            Swal.fire(
                'Error de validUsuarioacion',
                'Debe completar los campos del formulario!',
                'error'
            );

            return;
        }
        if (!email.includes('@')) {
            Swal.fire(
                'Error de validUsuarioacion email',
                'El email debe ser validUsuarioo, incluir un @!',
                'error'
            );
            return;
        }
        // console.log(userForm);

        // guardar el user form en el listado de usuarios
        handlerAddUser(userForm);
        setUserForm(initialUserForm);
    }

    const onCloseForm = () => {
        handlerCloseForm();
        setUserForm(initialUserForm);
    }
    return (
        <form onSubmit={ onSubmit }>
            <input
                className="form-control my-3 w-75"
                placeholder="userName"
                name="userName"
                value={ userName}
                onChange={onInputChange} />
            
            { idUsuario > 0 || <input
                className="form-control my-3 w-75"
                placeholder="Password"
                type="password"
                name="password"
                value={password}
                onChange={onInputChange} /> }
            
            <input
                className="form-control my-3 w-75"
                placeholder="Email"
                name="email"
                value={email}
                onChange={onInputChange} />
            <input type="hidUsuarioden"
                name="idUsuario"
                value={idUsuario} />
            
            <button
                className="btn btn-primary"
                type="submit">
                {idUsuario > 0 ? 'Editar' : 'Crear'}
            </button>

            {!handlerCloseForm || <button
                className="btn btn-primary mx-2"
                type="button"
                onClick={() => onCloseForm()}>
                Cerrar
            </button>}
            
        </form>
    )
}