import React, { useState } from 'react'
import ProductList from './components/ProductList'

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Laptop', price: '$999', inStock: true },
    { id: 2, name: 'Phone', price: '$699', inStock: false },
    { id: 3, name: 'Tablet', price: '$499', inStock: true },
  ])

  const [filter, setFilter] = useState('all')

  const filteredProducts = products.filter((product) => {
    if (filter === 'all') return true
    return filter === 'inStock' ? product.inStock : !product.inStock
  })

  const handleRemove = (id) => {
    setProducts(products.filter((product) => product.id !== id))
  }

  return (
    <div>
      <h1>Product Dashboard</h1>
      <button onClick={() => setFilter('all')}>All</button>
      <button onClick={() => setFilter('inStock')}>In Stock</button>
      <button onClick={() => setFilter('outOfStock')}>Out of Stock</button>
      <ProductList products={filteredProducts} onRemove={handleRemove} />
    </div>
  )
}

export default App
