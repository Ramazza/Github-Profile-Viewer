import { useContext } from 'react';
import { Container, RepoContainer, TextContainer, Icon, Text, Title, RepoTitle } from './styles'
import { UserContext } from '../../contexts/userContext';
import Star from '../../assets/star.png';
import Fork from '../../assets/fork.png';

function Repos() {

    const { repos, user } = useContext(UserContext)

    interface Repository {
        name: string;
        description: string;
        language: string;
        stargazers_count: number;
        forks: number;
    }

    return(
        <>
            <Title>{user.login}'s Repositories</Title>
            <Container>
                {repos.map((repos: Repository) => (
                    <RepoContainer>
                        <RepoTitle>{repos.name}</RepoTitle>
                        {/* <span>{repos.name}</span> */}
                        <span>{repos.description ? repos.description : 'No description'}</span>
                        <span>{repos.language ? repos.language : 'No language'}</span>
                        <TextContainer>
                            <Icon src={Star} alt=''/>
                            <Text>{repos.stargazers_count} stars</Text>
                        </TextContainer>
                        <TextContainer>
                            <Icon src={Fork} alt=''/>
                            <Text>{repos.forks} forks</Text>
                        </TextContainer>
                    </RepoContainer>
                ))}
            </Container>
        </>
    );
}

export default Repos;