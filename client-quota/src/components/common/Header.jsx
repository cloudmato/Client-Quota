import styled from 'styled-components';
import React, { useState } from 'react';
import SmallLogo from './SmallLogo';
import Link from 'next/link';

const Header = () => {
    return (
        <HeaderContainer>
            <NavDiv>
                <span>미팅</span>
                <span>서비스</span>
            </NavDiv>
            <LogoDiv>
                <SmallLogo/>
            </LogoDiv>
            <LoginDiv>
                <ButtonStart>시작하기</ButtonStart>
            </LoginDiv>
        </HeaderContainer>
    );
}

export default Header;

const HeaderContainer = styled.header`
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const NavDiv = styled.div`
    flex: 1;

    span {
        font-size: 19px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        padding : 10px;
    }
`

const StyledLink = styled.span`
    cursor: pointer;
    color: ${props => props.isActive ? 'black' : 'var (--gray-color)'};
`

const NavLink = ({ href, curretnPath, children }) => {
    const isActive = href === curretnPath;

    return (
        <Link href={href}>
            <StyledLink isActive={isActive}>{children}</StyledLink>
        </Link>
    )
}

const LogoDiv = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`

const LoginDiv = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
`

const ButtonStart = styled.button`
    display: flex;
    align-items: center;      
    justify-content: center;
    width: 120px;
    height: 37px;
    border-radius: 10px;
    border: none;
    background-color: var(--primary-color);

    color: #FFF;
    font-size: 12px;
    font-weight: 700;
    line-height: normal;

    cursor: pointer;
`

