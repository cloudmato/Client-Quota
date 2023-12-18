import React, { useState } from 'react'
import styled from 'styled-components'
import CopyImage from './CopyClipBoard'
import ModalBase from '../modal/base/CardModalBase'
import Button from '../Button'
import CardModal from '../modal/CardModal'

const CopyLink = (props) => {
    const {textToCopy} = props;

    const [isActive, setIsActive] = useState(false);

    const onClickModalOn = () => {
        console.log("모달 작동")
        setIsActive(true);
        console.log(isActive)
      };

    const onClickModalOff = () => {
        console.log("모달 끝냄")
        setIsActive(false);
        console.log(isActive)
    };

    const onClickCardRemove = () => {
        alert('이벤트 실행');
    };

    return(
        <CopyLinkContainer>
            <CopyImage textToCopy={textToCopy} cardModalEvent={onClickModalOn}></CopyImage>
                <ModalBase active={isActive} closeEvent={onClickModalOff}>
                    <CardModalContainer>
                        <CopySuccess>
                            <h3>복사에 성공했습니다.</h3>
                            <img src='assets/gif/check.gif'></img>
                        </CopySuccess>
                        <div id='msg'>링크를 복사했습니다.</div>
                    </CardModalContainer>
                </ModalBase>
            <p id='copyLink'>링크 복사</p>
        </CopyLinkContainer>
    )
}

export default CopyLink;

const CopyLinkContainer = styled.div`
    display: flex;
    margin-left: 20px;
    p{
        font-size: 15px;
        margin-left: 10px;
        width: 100px;
        color: var(--primary-color);
    }
`

const CardModalContainer = styled.div`
`

const CopySuccess = styled.div`
    display: flex;

    img{
        width: 80px;
    }
`