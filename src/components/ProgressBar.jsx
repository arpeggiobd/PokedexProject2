import React from "react";
import styled from "styled-components";

function ProgressBar({ title, width, text }) {
    const num = width + "%";
    return (
        <div className="progress-bar-styled">
            <div className="progress-h3">{title}</div>
            <div className="progress">
                <span style={{ width: num }}></span>
            </div>
            <div className="progress-h3">
                <div className="progress-bar">{text}</div>
            </div>
        </div>
    );
}

export default ProgressBar;