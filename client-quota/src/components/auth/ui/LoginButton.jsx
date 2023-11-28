import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { useGoogleLogin } from "@react-oauth/google";
import { sendAuthorizationCode } from "@/pages/api/auth";
import { useAuth } from "@/hooks/useAuth";

const LoginButton = () => {
    const { login } = useAuth();

    const googleLogin = useGoogleLogin({
        flow: 'auth-code',
        onSuccess: async codeResponse => {
            try {
                const response = await sendAuthorizationCode(codeResponse.code);
                localStorage.setItem('accessToken', response.data.accessToken);
                login(response.data.user);
            } catch (error) {
                console.error('Error', error);
            }
        },
        onError: error => {
            console.error(error);
        },
    });


    return (
        <CusttomLoginButton onClick={() => googleLogin()}>
            <Image src="/assets/svg/googleLogo.svg" alt="Google Icon" width={60} height={60} priority/>
            <LogInText>Google 계정으로 시작하기</LogInText>
        </CusttomLoginButton>
    )
}

export default LoginButton;

const CusttomLoginButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    width: 250px;
    height: 25px;
    border-radius: 15px;
    background: var(--primary-color);
    color: white;
    cursor: pointer;
`;

const LogInText = styled.span`
    font-size: 15px;
    font-weight: 700;
    margin-right: 20px;
`