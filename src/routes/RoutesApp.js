import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import ProductForm from '../pages/ProductForm'

function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cadastrar-produto' element={<ProductForm />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp