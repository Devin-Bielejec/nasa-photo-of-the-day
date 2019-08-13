import React from "react";
import styled from "styled-components";
import {FlexDiv} from "./PictureComponent";

const Para = styled.p`
    width: 75%;
    margin: 5% auto;
    line-height: 1.5;
    color: black;

    ${props => (props.type === "content" ? `text-transfom: none` : null)}
    ${props => (props.type === "date" ? `font-size: 4rem; text-align: center` : null)}
    ${props => (props.type === "copyright" ? `text-transfom: uppercase; text-align: center` : null)}
`

function ExplanationComponent(props) {
    return (
        <FlexDiv>
            <Para type={"content"}>{props.explanation}</Para>
        </FlexDiv>
    );
};

export {ExplanationComponent, Para};