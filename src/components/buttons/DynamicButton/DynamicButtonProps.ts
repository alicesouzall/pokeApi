import { ReactElement } from "react";

interface DynamicButtonProps {
    onClick: () => void
    label?: string | ReactElement<any, any>
    className?: string
}

export default DynamicButtonProps;
