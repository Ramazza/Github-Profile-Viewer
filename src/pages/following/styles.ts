import styled from "styled-components";

export const Title = styled.span`
    padding: 1rem 0;
    display: flex;
    justify-content: center;
    background-color: #0d1016;
    color: #fff;
    font-size: 2em;
    font-weight: 500;
`;

export const Container = styled.div`
    padding: 1rem 2rem 2rem 2rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1rem;
    background-color: #0d1016;
    color: #fff;
`;

export const FollowerContainer = styled.div`
    display: flex;
    padding: 1rem;
    align-items: center;
    gap: 1rem;
    border-radius: 5px;
    border: 1px solid #666e77;

    &:hover {
        transform: scale(1.02);
    }
`;

export const Avatar = styled.img`
    width: 3rem;
`;

export const Name = styled.span`
    font-size: 1.3em;
    font-weight: 500;
    color: #666e77;
`;
