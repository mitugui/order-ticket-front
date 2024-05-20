import { useNavigate } from "react-router-dom";
import { Header, Item, Options, Container, Title } from "./styles"
import { IoInformationCircleOutline, IoBeer, IoHomeOutline, IoSettingsOutline, IoPeopleOutline, IoFastFoodOutline } from "react-icons/io5";

function SideBar() {
    const nav = useNavigate();

    function goToProductForm(){
        nav("/cadastrar-produto")
    }
    function goToHome(){
        nav("/")
    }

    return(
        <Container>
            <Header>
                <Title>
                    <IoBeer />
                    Comandas
                </Title>
            </Header>
            <Options>
                <Item onClick={goToHome}>
                    <IoHomeOutline/>
                    Tela Inicial
                </Item>
                <Item onClick={goToProductForm}>
                    <IoFastFoodOutline/>
                    Cadastrar Produto
                </Item>
                <Item>
                    <IoPeopleOutline />
                    Clientes
                </Item>
                <Item>
                    <IoSettingsOutline/>
                    Configurações
                </Item>
                <Item>
                    <IoInformationCircleOutline/>
                    Sobre
                </Item>
            </Options>
        </Container>
    )
}

export default SideBar