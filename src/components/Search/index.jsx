import { useState } from "react"
import { Container, Input } from "./styles"

function Search() {
    const [search, setSearch] = useState('')

    return (
        <Container>
            <Input type="text" onChange={(e)=> setSearch(e.target.value)} placeholder="Digite o nome de um cliente..."></Input>
        </Container>
    )
}

export default Search