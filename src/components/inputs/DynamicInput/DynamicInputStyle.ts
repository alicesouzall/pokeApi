import styled from "styled-components";

export const DynamicInputStyle = styled.div`
    width: 100%;
    display: flex;
    background-color: #fff;
    border-radius: 2rem;
    border: 1px solid #CCCCCC;
    padding: 0.5rem;
    align-items: center;
    justify-content: space-between;
    height: 2rem;

    .input {
        width: 100%;
        border: none;
        outline: none;
        background-color: transparent;

        :focus {
            outline: none
        }
    }

    .icon {
        color: #8E8E8E;
        margin-bottom: 2px;
    }
`
