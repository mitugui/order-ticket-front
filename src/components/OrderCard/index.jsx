import { CardContainer, CardHeader, Number, NumberContainer, Title, CardDetails, Orders, Order, Name, Quantity } from "./styles"
import { FaTimes } from "react-icons/fa"

function OrderCard({ order, removeOrder }) {
    return (
        <CardContainer>
            <CardHeader>
                <NumberContainer>
                    <Number key={order.id}>{`${order.id}`}</Number>
                </NumberContainer>
                <Title key={order.id}>{`${order.name}`}</Title>
                <FaTimes onClick={() => removeOrder(order.id)} />
            </CardHeader>
            <CardDetails>
                <Orders>
                    {order.items.map(item => (
                        <Order>
                            <Name>{item.name}</Name>
                            <Quantity>{item.quantity}</Quantity>
                        </Order>
                    ))}
                </Orders>
            </CardDetails>
        </CardContainer>
    )
}

export default OrderCard