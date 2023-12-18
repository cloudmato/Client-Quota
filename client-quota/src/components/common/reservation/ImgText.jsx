import styled from "styled-components"

const ImgText = (props) => {

    const {text, src, style} = props;

    return (
        <ImgTextContiner style={style}>
            <img src={src}/>
            <p>{text}</p>
        </ImgTextContiner>
    )
}

export default ImgText;

const ImgTextContiner = styled.div`
    display: flex;

    p {
        line-height: light;
        margin: 10px;
    }
`