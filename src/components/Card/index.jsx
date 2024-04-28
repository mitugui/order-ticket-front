import { useEffect, useState } from "react"
import { deleteOrder, getOrders } from "../../services/order"
import { CardContainer, CardHeader, Number, NumberContainer, Title } from "./styles"
import { FaTimes } from "react-icons/fa"

function Card() {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetchOrders()
    }, [])

    async function fetchOrders() {
        const ordersAPI = await getOrders()
        setOrders(ordersAPI)
    }

    async function removeOrder(id) {
        await deleteOrder(id)
        alert(`Comanda nº${id} removida!`)
        await fetchOrders()
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
                            <FaTimes onClick={() => removeOrder(order.id)}/>
                        </CardHeader>
                    </CardContainer>
                )) : null
            }
        </>
    )
}

export default Card