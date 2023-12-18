import styled from 'styled-components';

const Footer = () => {
    return (
        <FooterContainer>
            <span>주식회사 쿼타임</span>
            <div>
                <span>개인정보 보호정책</span>
                <span> | </span>
                <sapn>이용약관</sapn>
            </div>
            
        </FooterContainer>
    );
}

export default Footer;

const FooterContainer = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid var(--gray-color);
    padding-top : 15px;
`