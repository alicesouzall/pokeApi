import { ChangeEvent, KeyboardEventHandler, ReactElement } from "react"

interface DynamicInputProps {
    type: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    onKeyUp?: KeyboardEventHandler<HTMLInputElement>
    placeholder?: string
    icon?: ReactElement<any, any>
    className?: string
}

export default DynamicInputProps;
