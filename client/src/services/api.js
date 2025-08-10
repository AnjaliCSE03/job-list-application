import axios from "axios";

const API_URL = "import axios from "axios";

const API_URL = "http://ec2-13-62-55-141.eu-north-1.compute.amazonaws.com:8000";

export const saveData = async (data) => {

    try{
        await axios.post(`${API_URL}/saveData`, data);
    }catch(error){
        console.error('Error while calling save data api', error.message);
    }
    
}

export const getData = async (data) => {

    try{
        let response = await axios.get(`${API_URL}/get`);
        return response.data;
    }catch(error){
        console.error('Error while calling save data api', error.message);
    }
    
}";

export const saveData = async (data) => {

    try{
        await axios.post(`${API_URL}/saveData`, data);
    }catch(error){
        console.error('Error while calling save data api', error.message);
    }
    
}

export const getData = async (data) => {

    try{
        let response = await axios.get(`${API_URL}/get`);
        return response.data;
    }catch(error){
        console.error('Error while calling save data api', error.message);
    }
    
}
