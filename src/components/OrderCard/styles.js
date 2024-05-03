import styled from "styled-components"

const CardContainer = styled.div`
    height: 300px;
    width: 250px;
    /* background-color: #00cd9c; */
    background: rgb(37,226,174);
    background: linear-gradient(135deg, rgba(37,226,174,1) 0%, rgba(0,205,156,1) 35%, rgba(0,164,125,1) 88%); 
    box-shadow: 8px 8px #b3f0e1;
    border-radius: 13px;
    text-align: center;
    position: relative;
    margin-bottom: 15px;
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

const CardDetails = styled.div`
    height: calc(100% - 86px);
    width: calc(100% - 30px);
    margin: 15px;
    box-shadow: inset -0.5px 0.5px 7px black;
    background-color: #b3f0e1;
    border-radius: 13px;
    overflow-y: auto;
    &::-webkit-scrollbar{
        width: 10px;
    }
    &::-webkit-scrollbar-thumb{
        display: none;
        border: 1px solid #292929;
        background-color: transparent;
        border-radius: 20px;
    }
`

const Orders = styled.ul`
    padding-top: 10px;
    padding-bottom: 15px;
`

const Order = styled.li`
    display: flex;
    justify-content: space-between;
    padding-left: 12px;
    padding-right: 12px;
    margin-top: 5px;
    user-select: none;
`

const ProductInfoSpan = styled.span`
    font-size: 22px;
    color: #1e3945;
    font-weight: bold;
`

const Name = styled(ProductInfoSpan)``
const Quantity = styled(ProductInfoSpan)``

export {
    CardContainer,
    CardHeader,
    NumberContainer,
    Number,
    Title,
    CardDetails,
    Orders,
    Order,
    Name,
    Quantity,
}