import React from "react";
import { NotFoundCardStyle } from "./NotFoundCardStyle";
import SearchOffIcon from '@mui/icons-material/SearchOff';
import NotFoundCardProps from "./NotFoundCardProps";

const NotFoundCard = ({...props}: NotFoundCardProps) => {
    return (
        <NotFoundCardStyle className={props.className}>
            <span><SearchOffIcon className="icon"/></span>
            <label>Nenhum {props.objectNotFound} encontrado.</label>
        </NotFoundCardStyle>
    )
}

export default NotFoundCard;
