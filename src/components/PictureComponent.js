import React from "react";
import styled from "styled-components";

const Img = styled.img`
    border-radius: 70px;
    box-shadow: 10px 10px gray;
    margin: 0 auto;
    width: 75%;
`

const FlexDiv = styled.div`
    display: flex;
    justify-content: center;
`

function PictureComponent(props) {
    return (
        <FlexDiv>
            <Img src={props.picSrc} alt={props.alt}/>
        </FlexDiv>
    );
}

export {PictureComponent, FlexDiv};