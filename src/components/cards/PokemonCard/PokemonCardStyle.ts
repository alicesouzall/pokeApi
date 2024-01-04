import styled from "styled-components";

export const PokemonCardStyle = styled.div`
    width: 20vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    padding: 1rem;
    background-color: #fff;
    border: 3px solid #CCC;

    img {
        width: 10rem;
    }

    .infos-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin-bottom: 1rem;
    }

    .abilities-container {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        width: 100%;

        ul {
            margin: 0;
        }
    }
`
