export const findAll = async() => {
    try {
        const response = await axios.get('http://localhost:8080/User');
        return response; 
    } catch (error) {
       console.log(error);
    }
    return null;
}