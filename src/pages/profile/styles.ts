import styled from "styled-components";

export const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding-top: 15vh;
    background-color: #0d1016;
    color: #fff;
`;

export const Avatar = styled.img`
    width: 18vw;
    border: 3px solid #242831;
    border-radius: 50%;
`;

export const UsernameContainer = styled.div`
    display: flex;
    gap: 1rem;
`;

export const FollowerContainer = styled.div`
    display: flex;
    gap: 1rem;
`;

