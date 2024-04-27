import styled from "styled-components";

const CardContainer = styled.div`
    height: 300px;
    width: 250px;
    background-color: #00CD9C;
    box-shadow: 5px 8px #b3f0e1;
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
`

const NumberContainer = styled.div`
    margin-top: 12px;
    margin-left: 5px;
    position: absolute;
    border: 3px solid #b3f0e1;
    border-radius: 100%;
    display: flex;
    width: 40px;
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
    margin-right: auto;
    margin-left: auto;
    font-size: 28px;
    padding-top: 12px;
    color: #FFF;
`

export {
    CardContainer,
    CardHeader,
    NumberContainer,
    Number,
    Title
}