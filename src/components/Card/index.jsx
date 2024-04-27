import { useEffect, useState } from "react"
import { getOrders } from "../../services/order"
import { CardContainer, CardHeader, Number, NumberContainer, Title } from "./styles"

function Card() {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetchOrders()
    }, [])

    async function fetchOrders() {
        const ordersAPI = await getOrders()
        setOrders(ordersAPI)
    }
    return (
        <>
            {
                orders.length !== 0 ? orders.map(order => (
                    <CardContainer>
                        <CardHeader>
                            <NumberContainer>
                                <Number key={order.id}>{`${order.id}`}</Number>
                            </NumberContainer>
                            <Title key={order.id}>{`${order.name}`}</Title>
                        </CardHeader>
                    </CardContainer>
                )) : null
            }
        </>
    )
}

export default Card