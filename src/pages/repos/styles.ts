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
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    background-color: #0d1016;
    color: #fff;
`;

export const RepoContainer = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 1rem;
    border-radius: 5px;
    border: 1px solid #666e77;

    &:hover{
        transform: scale(1.02);
    }
`;

export const RepoTitle = styled.span`
    color: #408be9;
    font-weight: 500;
    font-size: 1.2em;
`;

export const TextContainer = styled.div`
    display: flex;
    gap: 5px;
`;

export const Icon = styled.img`
`;

export const Text = styled.span`
    font-size: 1.1em;
    font-weight: 500;
    color: #666e77;
`;
