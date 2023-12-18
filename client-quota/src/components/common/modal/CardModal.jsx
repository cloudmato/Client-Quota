import React from 'react';
import styled from '@emotion/styled';
import Button from '../Button';

const CardModal = (props) => {

  const { closeEvent, title, children, actionMsg, actionEvent, active = false } = props;

  return (
    <>
      {active && (
        <CardModalContainer>
          <h3>{title}</h3>
          <div id='msg'>{children}</div>
          <div id='action_box'>
            <Button style={{height:'45px', width:'121px', color:'white'}} onClick={closeEvent}>
              닫기
            </Button>
            <Button style={{height:'45px', width:'121px', color:'white'}} onClick={actionEvent}>
              {actionMsg}
            </Button>
          </div>
        </CardModalContainer>
      )}
    </>
  );
};

const CardModalContainer = styled.div`

  width: 100px;
  height: 100px;

  h3 {
    font-size: 1.5rem;
    font-weight: bold;
  }

  #msg {
    line-height: 1.5;
    font-size: 1rem;
    color: rgb(73, 80, 87);
    margin-top: 1rem;
    margin-bottom: 1rem;
    white-space: pre-wrap;
  }

  #action_box {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    button {
      margin-left: 0.5rem;
    }
  }

`;

export default CardModal;
