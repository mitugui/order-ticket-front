import SideBar from "../../components/SideBar"
import { Body, Button, Form, InputText, LabelText } from "./styles"

function ProductForm() {
    return(
        <Body>
            <SideBar />
            <Form>
                <LabelText>Nome do Produto:</LabelText>
                <InputText type="text"></InputText>

                <LabelText>Preço do Produto:</LabelText>
                <InputText type="number"></InputText>
                
                <Button> Aperte aqui </Button>
            </Form>
        </Body>
    )
}

export default ProductForm