import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { Container, Title, FollowerContainer, Avatar, Name } from './styles'

function Follower(){

    const { user, followers } = useContext(UserContext)

    return(
        <>
            <Title>{user.login}' Followers</Title>
            <Container>
                {followers.map((followers:any) => (
                    <FollowerContainer>
                        <Avatar src={followers.avatar_url} alt=""/>
                        <Name>{followers.login}</Name>
                    </FollowerContainer>
                ))}
            </Container>
        </>
    );
}

export default Follower;