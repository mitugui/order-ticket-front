import styled from "styled-components"

const Body = styled.body`
    height: 100vh;
    width: 100vw;
`

const Form = styled.form`
    width: calc(100% - 480px);
    margin-left: 400px;
    padding: 70px 40px 0 40px;
    display: flex;
    flex-direction: column;
`

const InputText = styled.input`
    max-width: 750px;
    height: 55px;
    border-radius: 13px;
    outline: none;
    padding: 0px 20px;
    font-size: 18px;
    margin-bottom: 40px;
    &::-webkit-inner-spin-button{
        -webkit-appearance: none;
    }
`

const LabelText = styled.label`
    color: white;
    display: flex;
    font-size: 18px;
    padding: 0 0 10px 15px;
`

const Button = styled.button`
    height: 60px;
    max-width: 790px;
    font-size: 20px;
    color: #171717;
    font-weight: bold;
    border-radius: 18px;
    box-shadow: 0px 0px 10px black;
    margin-top: 20px;
    background: rgb(37,226,174);
    background: linear-gradient(135deg, rgba(37,226,174,1) 0%, rgba(0,205,156,1) 35%, rgba(0,164,125,1) 88%); 
    &:hover{
        background: rgb(36,208,160);
        background: linear-gradient(135deg, rgba(36,208,160,1) 0%, rgba(0,185,141,1) 35%, rgba(0,126,96,1) 88%);
    }
    cursor: pointer;
`

export {
    Body,
    Form,
    InputText,
    Button,
    LabelText,
}