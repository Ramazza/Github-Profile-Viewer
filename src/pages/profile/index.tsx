import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { useNavigate } from 'react-router-dom';
import { Container, Avatar, UsernameContainer, FollowerContainer, Name, UserName, Icon, BlogContainer, RepoContainer, Text } from './styles';
import Follower from '../../assets/user.png';
import Bio from '../../assets/bio.png';
import Repo from '../../assets/repo.png';

function Profile() {

    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    return(
        <Container>
            <Avatar src={user.avatar_url}/>
            <UsernameContainer>
                <Name>{user.name}</Name>
                <UserName>{user.login}</UserName>
            </UsernameContainer>
            <span>{user.bio? user.bio : 'No bio'}</span>
            <FollowerContainer>
                <Icon src={Follower} alt=""/>
                <Text onClick={() => navigate('/followers')}>{user.followers} followers • </Text>
                <Text onClick={() => navigate('/following')}>{user.following} following</Text>
            </FollowerContainer>
            <RepoContainer>
                <Icon src={Repo} alt=""/>
                <Text onClick={() => navigate('/repos')}>{user.public_repos} Public Repositories</Text>
            </RepoContainer>
            <BlogContainer>
                <Icon src={Bio} alt=""/>
                <span>{user.blog}</span>   
            </BlogContainer>
            
        </Container>
    );
}

export default Profile;