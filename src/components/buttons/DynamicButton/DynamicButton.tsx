import React from "react";
import DynamicButtonProps from "./DynamicButtonProps";
import { DynamicButtonStyle } from "./DynamicButtonStyle";

const DynamicButton = ({...props}: DynamicButtonProps) => {
    return (
        <DynamicButtonStyle
            onClick={props.onClick}
            className={props.className}
        >
            <label style={{zIndex: "0"}}>{props.label}</label>
        </DynamicButtonStyle>
    )
}

export default DynamicButton;
