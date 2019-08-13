import React, {useState} from "react";
import styled from "styled-components";

const Title = styled.h1`
    font-size: 4rem;
    text-align: center;
    font-family: monospace;
    border: 2px dashed black;
`;

function TitleComponent(props) {
    return (
        <Title title={props.title}>{props.title}</Title>
    );
}

export {TitleComponent};