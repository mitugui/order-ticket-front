import styled from "styled-components"

const Container = styled.div`
    height: 100svh;
    width: 400px;
    border-top-right-radius: 22px;
    border-bottom-right-radius: 22px;
    background-color: #1e3945;
    box-shadow: 0 0 10px rgba(0, 0, 0, .5);
    position: fixed;
    overflow: hidden;
`

const Header = styled.div`
    width: 100%;
    height: 125px;
    position: relative;
    justify-content: space-evenly;
    ::after{
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 90%;
        margin-left: 5%;
        height: 2px;
        background-color: #162c36; 
    }
`

const Title = styled.h1`
    height: 125px;
    font-size: 40px;
    display: flex;
    color: white;
    gap: 10px;
    margin-left: 30px;
    align-items: center;
    > svg {
        margin-bottom: 9px;
        color: #b3f0e1;
    }
`

const Options = styled.ul`
    margin-left: 20px;
    margin-top: 50px;
`
const Item = styled.li`
    height: 57px;
    display: flex;
    align-items: center;
    padding-left: 20px;
    margin-right: 20px;
    gap: 15px;
    color: white;
    font-size: 22px;
    border-radius: 9px;
    cursor: pointer;
    &:hover{
        background-color: #162c36;
    }
`
export {
    Container,
    Header,
    Title,
    Options,
    Item,
}