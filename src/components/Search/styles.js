import styled from "styled-components"

const Container = styled.div`
    background-color: #131F24;
    position: fixed;
    height: 125px;
    width: calc(100% - 400px);
    z-index: 1;
    margin-left: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Input = styled.input`
    width: calc(70%);
    height: 75px;
    border-radius: 13px;
    outline: none;
    padding: 0px 30px;
    font-size: 18px;
`

export {
    Container,
    Input
}