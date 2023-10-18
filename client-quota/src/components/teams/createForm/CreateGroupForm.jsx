import styled from "styled-components";
import InputTitle from "./ui/InputTitle";
import InputText from "./ui/InputText";
import InputProfile from "./ui/InputProfile";
import InputGroupLink from "./ui/InputGroupLink";
import InputTextarea from "./ui/InputTextarea";

const StyledGroupForm = styled.form`
    width: 625px;
    display: flex;
    flex-direction: column;
    align-tiems: center;
    justify-content: center;
`

const CompleteButton = styled.button`
    width: 220px;
    height: 45px;
    border-radius: 20px;
    background: #6349F6;
    color: #FFF;
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: 20px auto 0 auto;

    cursor: pointer;
`

const CreateGroupForm = () => {
    return <StyledGroupForm>
        <InputTitle>그룹 프로필</InputTitle>
        <InputProfile name="teamProfileImage"/>

        <InputTitle required>그룹 입력</InputTitle>
        <InputText name="teamName" placeholder="그룹 이름을 입력해 주세요."/>

        <InputTitle required>그룹 링크</InputTitle>
        <InputGroupLink name="teamUrl" placeholder="GroupExample"/>

        <InputTitle>회사/그룹 소개</InputTitle>
        <InputTextarea name="teamDescription" placeholder="우리 회사/그룹에 대해 설명해 주세요."/>

        <CompleteButton>완료</CompleteButton>
    </StyledGroupForm>
    
}

export default CreateGroupForm;