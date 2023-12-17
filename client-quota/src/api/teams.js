import axiosInstance from './axiosConfig';

export const checkTeamUrl = async (value) => {
    try {
        const response = await axiosInstance.get(`/teams/check-team-url/${value}`);
        return response.data;
    } catch (error) {
        console.error('API 요청 중 오류 발생', error);
        throw error;
    }
}

export const createGroup = async (formData) => {
    try {
        const response = await axiosInstance.post(`/teams`, formData, {
            headers: {
                'Content-Type' : 'multipart/form-data'
            }
        });
        return response.data;
    } catch (error) {
        console.error('API 요청 중 오류 발생', error);
        throw error;
    }
}