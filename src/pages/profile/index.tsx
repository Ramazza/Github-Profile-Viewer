import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { Container, Avatar, UsernameContainer, FollowerContainer } from './styles'

function Profile() {

    const { user } = useContext(UserContext);

    const username = user.login
    const name = user.name
    const avatar = user.avatar_url
    const bio = user.bio
    const blog = user.blog
    const followers = user.followers
    const following = user.following
    const repos = user.public_repos

    return(
        <Container>
            <Avatar src={avatar}/>
            <UsernameContainer>
                <span>{name}</span>
                <span>{username}</span>
            </UsernameContainer>
            <span>{bio? bio : 'Não possui bio'}</span>
            <FollowerContainer>
                <span>{followers}</span>
                <span>{following}</span>
            </FollowerContainer>
            <span>{blog}</span>
            <span>{repos}</span>
        </Container>
    );
}

export default Profile;