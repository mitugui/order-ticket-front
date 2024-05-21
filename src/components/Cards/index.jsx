import { useEffect, useState } from "react"
import { deleteOrder, getOrders } from "../../services/order"
import { NoOrdersFoundMessage } from "./styles"
import OrderCard from "../OrderCard"

function Cards({ searchTerm }) {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetchOrders()
    }, [])

    async function fetchOrders() {
        const ordersAPI = await getOrders()
        setOrders(ordersAPI)
    }

    async function removeOrder(id) {
        console.log('Tentando deletar pedido com ID:', id);
        await deleteOrder(id);
        alert(`Comanda nº${id} removida!`);
        await fetchOrders();
    }

    const filteredOrders = orders.filter((order) =>
        order.clientName.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <>
            {
                searchTerm === "" ? orders.length !== 0 ? orders.map((order, index) => (
                    <OrderCard
                        order={order}
                        removeOrder={removeOrder}
                        index={index}
                    />
                )) : <NoOrdersFoundMessage>Adicione um pedido para aparecer aqui!</NoOrdersFoundMessage>
                    : filteredOrders.length !== 0 ? filteredOrders.map(filteredOrder => {
                        const index = orders.findIndex((order) => order === filteredOrder)

                        return (
                            <OrderCard
                                order={filteredOrder}
                                removeOrder={removeOrder}
                                index={index}
                            />
                        )
                    }) : <NoOrdersFoundMessage>Nenhum pedido foi encontrado!</NoOrdersFoundMessage>
            }
        </>
    )
}

export default Cards