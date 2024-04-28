import { Header, Item, Options, Container, Title } from "./styles"
import { IoInformationCircleOutline, IoBeer, IoHomeOutline, IoSettingsOutline, IoPeopleOutline  } from "react-icons/io5";

function SideBar() {
    return(
        <Container>
            <Header>
                <Title>
                    <IoBeer />
                    Comandas
                </Title>
            </Header>
            <Options>
                <Item>
                    <IoHomeOutline/>
                    Tela Inicial
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