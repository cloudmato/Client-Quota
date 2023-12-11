import React from 'react'
import styled from 'styled-components'

const Button = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children, onClick, style } = props
  return (
        <CommonBtn onClick={onClick} style={style}>
            {children}
        </CommonBtn>)
}

export default Button

const CommonBtn = styled.button`
  background-color: var(--primary-color);
  border-radius: 10px;
  background: #6349F6;
  border: none;
  text-align: center;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  cursor: pointer;
`