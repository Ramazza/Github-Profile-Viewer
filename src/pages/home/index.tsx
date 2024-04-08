import { Container, Title, UserInput, SearchButton } from "./styles";

function Home() {
    return(
        <Container>
            <Title>Pesquise por qualquer usuário do Github</Title>
            <UserInput placeholder="Nome do usuário"/>
            <SearchButton>Pesquisar</SearchButton>
        </Container>
    );
}

export default Home;