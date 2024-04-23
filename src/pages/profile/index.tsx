import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { Container, Avatar, UsernameContainer, FollowerContainer, Name, UserName, Icon, BlogContainer, RepoContainer } from './styles';
import Follower from '../../assets/user.png';
import Bio from '../../assets/bio.png';
import Repo from '../../assets/repo.png';

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
                <Name>{name}</Name>
                <UserName>{username}</UserName>
            </UsernameContainer>
            <span>{bio? bio : 'Não possui bio'}</span>
            <FollowerContainer>
                <Icon src={Follower} alt=""/>
                <span>{followers} followers • </span>
                <span>{following} following</span>
            </FollowerContainer>
            <BlogContainer>
                <Icon src={Bio} alt=""/>
                <span>{blog}</span>   
            </BlogContainer>
            <RepoContainer>
                <Icon src={Repo} alt=""/>
                <span>Repositories: {repos}</span>
            </RepoContainer>
        </Container>
    );
}

export default Profile;