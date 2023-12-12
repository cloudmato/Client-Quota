import axiosInstance from './axiosConfig';

export const sendAuthorizationCode = (code) => {
    try {
        const registrationId = 'google';
        const response = axiosInstance.post(`/login/oauth2/code/${registrationId}`, { code });
        return response.data;
    } catch (error) {
        console.error('API 요청 중 오류 발생', error);
        throw error;
    }
}