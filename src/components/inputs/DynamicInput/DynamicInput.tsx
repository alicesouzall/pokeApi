import React from "react";
import { Icon } from "@mui/material";
import DynamicInputProps from "./DynamicInputProps";
import { DynamicInputStyle } from "./DynamicInputStyle";

const DynamicInput = ({...props}: DynamicInputProps) => {
    return (
        <DynamicInputStyle className={props.className}>
            <input
                type={props.type}
                onChange={props.onChange}
                placeholder={props.placeholder}
                className="input"
                onKeyUp={props.onKeyUp}
            />
            <Icon className="icon">{props.icon}</Icon>
        </DynamicInputStyle>
    )
}

export default DynamicInput;
