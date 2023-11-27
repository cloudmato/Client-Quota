import styled from "styled-components";
import Image from "next/image";
import { useGoogleLogin } from "@react-oauth/google";

const login = () => {
    const googleLogin = useGoogleLogin({
        // 로그인 기능 구현해야 함
    });
}

const LoginButton = () => {
    return (
        <CusttomLoginButton onClick={() => login()}>
            <Image src="/assets/svg/googleLogo.svg" alt="Google Icon" width={60} height={60}/>
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