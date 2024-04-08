import styled from "styled-components";

// #010409

export const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding-top: 15vh;
    background-color: #0d1016;
`;

export const Title = styled.span`
    color: white;
    font-size: 2em;
    font-weight: 500;
`;

export const UserInput = styled.input`
    width: 25vw;
    height: 2rem;
    border-radius: 8px;
    outline: 0;
    border: 2px solid #242831;
    background-color: transparent;
    color: #fff;
    text-align: center;

    &:focus{
        background-color: #161a20;
    }
`;

export const SearchButton = styled.button`
    width: 7vw;
    height: 2rem;
    border-radius: 8px;
    border: 2px solid #242831;
    background-color: transparent;
    color: #fff;

    &:hover {
        background-color: #161a20;
    }
`;