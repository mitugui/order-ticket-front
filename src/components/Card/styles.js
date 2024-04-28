import styled from "styled-components";

const CardContainer = styled.div`
    height: 300px;
    width: 250px;
    background-color: #00CD9C;
    box-shadow: 8px 8px #b3f0e1;
    border-radius: 13px;
    text-align: center;
    position: relative;
    margin-bottom: 30px;
`

const CardHeader = styled.div`
    display: flex;
    align-items: center;
    height: 40px;
    padding: 8px;
    > svg {
        color: #bef0e1;
        width: 47px;
        height: 22px;
        right: 0;
        margin-top: 12px;
        margin-left: 8px;
        cursor: pointer;
    }
`

const NumberContainer = styled.div`
    margin-right: 8px;
    margin-top: 12px;
    border: 3.5px solid #b3f0e1;
    border-radius: 100%;
    display: flex;
    min-width: 40px;
    height: 40px;
    justify-content: center;
`

const Number = styled.span`
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: bolder;
    color: #b3f0e1;
`

const Title = styled.h2`
    flex-grow: 1;
    font-size: 28px;
    padding-top: 12px;
    color: #FFF;
    overflow: hidden;
    text-overflow: ellipsis; 
    white-space: nowrap;
`

export {
    CardContainer,
    CardHeader,
    NumberContainer,
    Number,
    Title
}