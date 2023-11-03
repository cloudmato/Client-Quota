import { useRef, useState } from 'react';
import styled from 'styled-components';

const TeamProfileIcon = "/assets/svg/teamProfileIcon.svg"

const InputProfile = () => {
    const [profile, setProfile] = useState(TeamProfileIcon);
    const profileInputRef = useRef(null);

    //프로필 이미지 삽입
    const handleProfileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        
        reader.onload = () => {
            setProfile(reader.result);
        };

        reader.onerror = (error) => {
            console.log("File Reader Error : ", error);
        };

        reader.readAsDataURL(file);
    };

    //프로필 이미지 삭제
    const handleProfileRemove = () => {
        setProfile(TeamProfileIcon);
    }

    const triggerProfileInput = () => {
        profileInputRef.current?.click();
    }

    return <StyledInputProfile>
        <ProfileDisplay imageUrl={profile}/>
        <input
            ref={profileInputRef}
            id="profileInput"
            type="file"
            accept="image/*"
            name="teamProfileImage"
            style={{display: 'none'}}
            onChange={handleProfileChange}
        />
        
        <div>
            <ProfileUploadButton onClick={triggerProfileInput}>프로필 등록</ProfileUploadButton>
            <ProfileDeleteButton onClick={handleProfileRemove}>프로필 삭제</ProfileDeleteButton>
            <br />
            <ImgSizeGuide>400x400 픽셀 사이즈를 권장합니다</ImgSizeGuide>
        </div>
    </StyledInputProfile>
}

export default InputProfile;

const StyledInputProfile = styled.div`
    width: 500px;
    display: flex;
    align-items: center;
`;

const ProfileDisplay = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: url(${({ imageUrl }) => imageUrl}) no-repeat center/cover;
    border: 3px solid var(--gray-color);
    margin-right: 15px;
`;

const ProfileUploadButton = styled.button`
    width: 180px;
    height: 40px;
    border-radius: 20px;
    background: var(--primary-color);
    color: #FFF;
    text-align: center;
    margin-right: 5px;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    border: none;

    cursor: pointer;
`;

const ProfileDeleteButton = styled.button`
    width: 180px;
    height: 40px;
    border-radius: 20px;
    background: var(--gray-color);
    color: #FFF;
    text-align: center;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    border: none;

    cursor: pointer;
`;

const ImgSizeGuide = styled.span`
    color: var(--gray-color);
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-align: center;
`;