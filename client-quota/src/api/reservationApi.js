import axios from './axiosConfig';

export const postCreatedReservation = async (postData) => {
    try {
        const response = await axios.post('/rooms', postData);
        return response.data;
    } catch (error) {
        throw error;
    }
};


