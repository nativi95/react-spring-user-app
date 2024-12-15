import axios from "axios";

const URL = 'http://localhost:8080/User';

export const findAll = async() => {
    try {
        const response = await axios.get(URL);
        return response.data; 
    } catch (error) {
       console.log(error);
    }
    return null;
}

export const save = async({userName, email, password})=>{
    try {
        return (await axios.post(
            URL, 
            {
                userName,
                email,
                password,
            }
        )).data;
    } catch (error) {
        console.log(error)
    }
    return undefined;
}

export const update = async({idUsuario, userName, email}) => {
    try {
        return await axios.put(
            `${URL}/${idUsuario}`,
            {
               userName,
               email, 
            }).data;
    } catch (error) {
        console.log(error);
    }
    return undefined;
}

export const remove = async(id) =>{
    try {
        return await axios.delete(`${URL}/${id}`);
    } catch (error) {
        console.log(error);
    }
    return undefined;
}