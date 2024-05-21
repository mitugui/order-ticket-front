import { CardContainer, CardHeader, Number, NumberContainer, Title, CardDetails, Orders, Order, Name, Quantity } from "./styles"
import { FaTimes } from "react-icons/fa"

function OrderCard({ order, removeOrder, index }) {
    return (
        <CardContainer>
            <CardHeader>
                <NumberContainer>
                    <Number>{`${index + 1}`}</Number>
                </NumberContainer>
                <Title key={order.clientName}>{`${order.clientName}`}</Title>
                <FaTimes onClick={() => removeOrder(order._id)} />
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