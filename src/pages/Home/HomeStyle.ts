import styled from "styled-components";

export const HomeStyle = styled.div `
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 1rem;
    flex-direction: column;
    height: 100vh;

    .dynamic-input {
        width: 50%;
        display: flex;

        .dynamic-button {
            border-radius: 50%;
            height: 2rem;
            width: 2rem;
            color: #8E8E8E;
            margin-left: 0.3rem;
        }
    }

    .not-found-card {
        height: 80vh;
        width: 100%
    }

    .pokemon-card {
        margin-top: 4rem
    }
`
