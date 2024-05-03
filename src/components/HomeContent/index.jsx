import { useState } from "react"
import Cards from "../Cards"
import CardsContainer from "../CardsContainer"
import Search from "../Search"

function HomeContent() {
    const [searchTerm, setSearchTerm] = useState("")
    
    return (
        <>
            <Search onSearch={setSearchTerm} />
            <CardsContainer>
                <Cards searchTerm={searchTerm} />
            </CardsContainer>
        </>
    )
}

export default HomeContent