import { useEffect, useState } from 'react'
import { getOrders } from '../services/order'
import './Home.css'

function Home() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    fetchOrders()
  }, [])

  async function fetchOrders() {
    const ordersAPI = await getOrders()
    setOrders(ordersAPI)
  }

  return (
    <div className="App">
      <header className="App-header">
        {
          orders.length !== 0 ? orders.map(order => (
            <p key={order.id}>{order.name}</p>
          )) : null
        }
      </header>
    </div>
  )
}

export default Home