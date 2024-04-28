import axios from 'axios'

const orderAPI = axios.create({ baseURL: "http://localhost:8000/orders" })

async function getOrders() {
    const response = await orderAPI.get("/")
    return response.data
}

async function deleteOrder(id) {
    await orderAPI.delete(`/${id}`)
}

export {
    getOrders,
    deleteOrder
}