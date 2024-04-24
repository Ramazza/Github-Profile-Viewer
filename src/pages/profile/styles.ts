import styled from "styled-components";

export const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    padding-top: 10vh;
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
    flex-direction: column;
    align-items: center;
    `;

export const Name = styled.span`
    font-size: 2em;
    font-weight: 500;
`;

export const UserName = styled.span`
    font-size: 2em;
    font-weight: 350;
    color: #666e77;
`;

export const FollowerContainer = styled.div`
    display: flex;
    gap: 0.5rem;
`;

export const Icon = styled.img`
    width: 1.5rem;
`;

export const BlogContainer = styled.div`
    display: flex;
    gap: 0.5rem;
`;

export const RepoContainer = styled.div`
    display: flex;
    gap: 0.5rem;
`;

export const Text = styled.span`
    font-size: 1.2em;
    color: #666e77;
    transition: 0.3s;
    cursor: pointer;

    &:hover{
        transform: scale(1.05);
        color: #fff;
    }
`;
