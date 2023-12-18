import styled from "styled-components";
import Image from "next/image";
import LoginButton from "./ui/LoginButton";

const LoginLanding = () => {
    return (
        <LoginContainer>
            <Image src="/assets/svg/bigLogo.svg" alt="Quotime Logo" width={200} height={60}/>
            <LoginButton/>
        </LoginContainer>
    )
}

export default LoginLanding;

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    width: 100vw; /* 전체 뷰포트 너비 */
    height: 80vh; /* 전체 뷰포트 높이 */
`