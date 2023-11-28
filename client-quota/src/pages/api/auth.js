import axios from "axios";

export const sendAuthorizationCode = (code) => {
    const registrationId = 'google';
    return axios.post(`/login/oauth2/code/${registrationId}`, { code });
}