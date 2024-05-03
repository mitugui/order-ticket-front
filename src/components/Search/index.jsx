import { Container, Input } from "./styles"

function Search({onSearch}) {
    const handleInputChange = (e) => {
        const searchTerm = e.target.value;
        onSearch(searchTerm)
    }

    return (
        <Container>
            <Input
                type="text"
                placeholder="Digite o nome de um cliente..."
                onChange={handleInputChange}
            />
        </Container>
    )
}

export default Search