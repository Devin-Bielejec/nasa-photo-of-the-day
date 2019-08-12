import React from "react";
import styled from "styled-components";
import {FlexDiv} from "./PictureComponent";
import {Para} from "./ExplanationComponent";


function DateComponent(props) {
    return (
        <FlexDiv>
            <Para type={"date"}>{props.date}</Para>
        </FlexDiv>
    );
};

export {DateComponent};