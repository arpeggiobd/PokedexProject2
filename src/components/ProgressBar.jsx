import React from "react";
import styled from "styled-components";

const ProgressBarStyled = styled.div`
display:flex ;
align-item center
justify-content: space-between
margin-left:  65px;
.progress {
    position: relative;
    width: 100%;
    border-color: #040714;
    border-style solid;
    border-width: 3px;
    background-color: red;
    span {
        position: absolute;
        left: 0;
        bottom: 0;
        height: 100%;
        max-width: 100%;
        height: 0.6rem;
        background-color: 057FFF;
        border-color: white;

    }
}
`;

const H3 = styled.h3`
color: #040714
font-size:33px;
letter-spacing: 0.2px;
line-height: 2.08;
padding: 2px;
position: relative;
opacity: 1;
margin: 3px;
height: auto;
width: 200px;
`

function ProgressBar({ title, width, text }) {
    const num = width + "%";
    return (
        <ProgressBarStyled>
            <H3>{title}</H3>
            <div className="progress">
                <span style={{ width: num }}></span>
            </div>
            <H3 className="progress-bar">{text}</H3>
        </ProgressBarStyled>
    );
}

export default ProgressBar;