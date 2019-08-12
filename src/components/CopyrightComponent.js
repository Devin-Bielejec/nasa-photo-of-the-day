import React from "react";
import styled from "styled-components";
import {Para} from "./ExplanationComponent";
import {FlexDiv} from "./PictureComponent";


function CopyrightComponent(props) {
    return (
        <FlexDiv>
            <Para type="copyright">{props.copyright}</Para>
        </FlexDiv>
    );
};

export {CopyrightComponent};