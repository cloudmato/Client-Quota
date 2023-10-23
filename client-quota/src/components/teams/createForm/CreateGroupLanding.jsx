import styled from "styled-components";
import CreateGroupForm from "./ui/CreateGroupForm";

const CreateGroupLanding = () => {
    return (
        <CreateGroupFormContainer>
            <GroupFormContainer>
                <GroupFromTitleContainer>
                    <BackButton onClick={() => window.history.back()}>←</BackButton>
                    <Title>그룹 추가하기</Title>
                </GroupFromTitleContainer>
                <CreateGroupForm/>
            </GroupFormContainer>
        </CreateGroupFormContainer>
    );    
}

export default CreateGroupLanding;

const CreateGroupFormContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const GroupFormContainer = styled.div`
`;

const GroupFromTitleContainer = styled.div`
    display: flex;
    align-items: center;
`;

const Title = styled.h1`
   margin-left: 5px;
`;

const BackButton = styled.button`
    display: flex;
    width: 39px;
    height: 36px;
    flex-direction: column;
    justify-content: center;
    border-radius: 10px;
    background: #fff;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    border: none;
    cursor: pointer;
`;