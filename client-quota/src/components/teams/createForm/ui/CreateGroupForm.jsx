import styled from "styled-components";
import InputTitle from "../../../common/InputTitle";
import InputText from "../../../common/InputText";
import InputProfile from "./InputProfile";
import InputGroupLink from "./InputGroupLink";
import InputTextarea from "../../../common/InputTextarea";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const CreateGroupForm = () => {
    const [teamProfileImage, setTeamProfileImage] = useState('');
    const [teamName, setTeamName] = useState('');
    const [teamUrl, setTeamUrl] = useState('');
    const [teamDescription, setTeamDescription] = useState('');
    const [IsTeamUrlValid, setIsTeamUrlValid] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);

    const router = useRouter();

    useEffect(() => {
        const isValid = teamName.trim() && IsTeamUrlValid // 필요한 모든 필드가 채워졌는지 검사
        setIsFormValid(isValid);
    }, [teamName, IsTeamUrlValid]);

    //const { loggedUser } = useAuth();

    const handleTeamUrlChange = (url, isValid) => {
        setIsTeamUrlValid(isValid);
        if(isValid) {
            setTeamUrl(url);
        } else {
            setTeamUrl('');
        }
    };

    const usewindow = () => {
        window.location.href = '/teamMain'
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(isFormValid) {
            const formData = new FormData ();
            formData.append("teamName", teamName);
            formData.append("userId", loggedUser.userId); //임시
            formData.append("teamProfileImage", teamProfileImage);
            formData.append("teamUrl", teamUrl);
            formData.append("teamDescription", teamDescription);

            console.log(formData);

            try {
                const response = await createGroup(formData);
                console.log('Group created:', response);
                alert("그룹 생성에 성공했습니다!"); // 성공 알림
                router.push('/'); // 메인 페이지로 이동
            } catch (error) {
                console.error('Error submitting form:', error);
                alert("그룹 생성에 실패했습니다."); // 실패 알림
            }
        }
    }

    return (
        <StyledGroupForm onSubmit={handleSubmit}>
            <InputTitle>그룹 프로필</InputTitle>
            <InputProfile name="teamProfileImage" onImageChange={setTeamProfileImage}/>

            <InputTitle required>그룹 입력</InputTitle>
            <InputText name="teamName" placeholder="그룹 이름을 입력해 주세요." onChange={setTeamName}/>

            <InputTitle required>그룹 링크</InputTitle>
            <InputGroupLink name="teamUrl" placeholder="GroupExample" onTeamUrlChange={handleTeamUrlChange}>quotime.co.kr/</InputGroupLink>

            <InputTitle>회사/그룹 소개</InputTitle>
            <InputTextarea name="teamDescription" placeholder="우리 회사/그룹에 대해 설명해 주세요." onChange={setTeamDescription}/>

            <CompleteButton onClick = {usewindow} disabled={isFormValid}>완료</CompleteButton>
        </StyledGroupForm>
    );
}

export default CreateGroupForm;

const StyledGroupForm = styled.form`
    width: 625px;
    display: flex;
    flex-direction: column;
    align-ems: center;
    justify-content: center;
`

const CompleteButton = styled.button`
    width: 220px;
    height: 45px;
    border-radius: 20px;
    background: #6349F6;
    border: none;
    color: #FFF;
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: 20px auto 0 auto;

    opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`