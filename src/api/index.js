import axios from 'axios';

const apiUrl = process.env.REACT_APP__API_URL;

const getSynonyms = async word => {
    try {
        const res = await axios.get(`${apiUrl}/words?ml=${word}`)
        return res.data;
    } catch (error) {
        // TODO: Add a better error handlement
        console.log(error);
    }
}

export { getSynonyms };