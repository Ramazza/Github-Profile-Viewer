import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { Container, Title, FollowerContainer, Avatar, Name } from './styles'

function Following(){

    const { user, following } = useContext(UserContext)

    return(
        <>
            <Title>{user.login}' Following</Title>
            <Container>
                {following.map((following:any) => (
                    <FollowerContainer>
                        <Avatar src={following.avatar_url} alt=""/>
                        <Name>{following.login}</Name>
                    </FollowerContainer>
                ))}
            </Container>
        </>
    );
}

export default Following;