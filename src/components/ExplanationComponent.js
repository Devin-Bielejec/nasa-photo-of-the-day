import React from "react";
import styled from "styled-components";
import {FlexDiv} from "./PictureComponent";

const ExplanationP = styled.p`
    width: 75%;
    margin: 5% auto;
    line-height: 1.5;
    color: black;
    text-transform: uppercase;
`

function ExplanationComponent(props) {
    return (
        <FlexDiv>
            <ExplanationP>{props.explanation}</ExplanationP>
        </FlexDiv>
    );
};

export {ExplanationComponent};