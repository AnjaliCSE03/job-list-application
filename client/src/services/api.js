import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
;

export const saveData = async (data) => {
    try {
        await axios.post(`${API_URL}/saveData`, data);
    } catch (error) {
        console.error('Error while calling saveData API', error.message);
    }
}

export const getData = async () => {
    try {
        let response = await axios.get(`${API_URL}/get`);
        return response.data;
    } catch (error) {
        console.error('Error while calling getData API', error.message);
    }
}
