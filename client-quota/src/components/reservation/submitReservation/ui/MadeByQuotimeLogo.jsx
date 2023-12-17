import SmallLogo from '@/components/common/SmallLogo';
import styled from 'styled-components';


const MadeByQuotimeLogo = () => {

    return (
        <MadeByQuotimeLogoContainer>
            <MadeByQuotimeLogoContents>
                <SmallLogo/>
                <LogoDesc>으로 만든 예약페이지입니다.</LogoDesc>
            </MadeByQuotimeLogoContents>
        </MadeByQuotimeLogoContainer>

    );
};

export default MadeByQuotimeLogo;

const MadeByQuotimeLogoContainer = styled.div`
    width: 300px;
    height: 40px;
    background-color: white;
    box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.50);
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const MadeByQuotimeLogoContents = styled.div`
    display: flex;
    flex-direction: row;
`;

const LogoDesc = styled.div`
    font-size: 13px;
    color: #A4A4A4;
    margin-top: 9px;
`;

