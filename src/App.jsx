import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import './App.css'

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')

  const toggleDarkMode = () => {
    setIsDarkMode((previousMode) => !previousMode)
  }

  const addToCart = (product) => {
    setCartItems((previousItems) => [...previousItems, product])
  }

  return (
    <div className={isDarkMode ? 'app dark-mode' : 'app light-mode'}>
      <h1>🛒 Shopping App</h1>

      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      <DarkModeToggle
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />

      <div>
        <label htmlFor="category-filter">Filter by Category: </label>

        <select
          id="category-filter"
          value={selectedCategory}
          onChange={(event) => setSelectedCategory(event.target.value)}
        >
          <option value="all">All</option>
          <option value="Fruits">Fruits</option>
          <option value="Dairy">Dairy</option>
        </select>
      </div>

      <ProductList
        selectedCategory={selectedCategory}
        addToCart={addToCart}
      />

      <Cart cartItems={cartItems} />
    </div>
  )
}

export default App
