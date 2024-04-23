import { useContext } from "react";
import { Container, Title, UserInput, SearchButton } from "./styles";
import { UserContext } from "../../contexts/userContext";
import { useNavigate } from 'react-router-dom';

function Home() {

    const { setUserName, getUser } = useContext(UserContext);

    const navigate = useNavigate();

    const handleSearch = () => {
        getUser();
        navigate('/profile')
    }

    const handleKeyPress = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return(
        <Container>
            <Title>Pesquise por qualquer usuário do Github</Title>
            <UserInput placeholder="Nome do usuário" onChange={(e) => setUserName(e.target.value)} onKeyDown={handleKeyPress}/>
            <SearchButton onClick={handleSearch}>Pesquisar</SearchButton>
        </Container>
    );
}

export default Home;