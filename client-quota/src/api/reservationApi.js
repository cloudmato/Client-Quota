import axios from './axiosConfig';

const postCreatedReservation = async (postData) => {
    try {
        const response = await axios.post('/rooms', postData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default postCreatedReservation