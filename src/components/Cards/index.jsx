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
        order.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <>
            {
                searchTerm === "" ? orders.length !== 0 ? orders.map(order => (
                    <OrderCard
                        order={order}
                        removeOrder={removeOrder}
                    />
                )) : <NoOrdersFoundMessage>Adicione um pedido para aparecer aqui!</NoOrdersFoundMessage>
                    : filteredOrders.length !== 0 ? filteredOrders.map(order => (
                        <OrderCard
                            order={order}
                            removeOrder={removeOrder}
                        />
                    )) : <NoOrdersFoundMessage>Nenhum pedido foi encontrado!</NoOrdersFoundMessage>
            }
        </>
    )
}

export default Cards