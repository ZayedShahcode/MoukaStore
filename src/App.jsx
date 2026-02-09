import { useState } from 'react'
import './App.css'
import itemsData from './data/items.json'

function App() {
  const [items] = useState(itemsData)

  return (
    <>
      {/* Header and Navigation */}
      <header className="header">
        <div className="header-container">
          <div className="logo-section">
            <h1 className="store-name">🏠 Mouka Store</h1>
            <p className="tagline">Premium Home Decor Items</p>
          </div>
          <nav className="navbar">
            <ul className="nav-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#shop">Shop</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h2>Welcome to Mouka Store</h2>
          <p>Discover beautiful home decor items to transform your space</p>
        </div>
      </section>

      {/* Featured Items */}
      <main className="content">
        <section className="items-section">
          <h2 className="section-title">Featured Items</h2>
          <div className="items-grid">
            {items.map((item) => (
              <div key={item.id} className="item-card">
                <div className="item-image-wrapper">
                  <img src={item.image} alt={item.title} className="item-image" />
                </div>
                <div className="item-content">
                  <h3 className="item-title">{item.title}</h3>
                  <p className="item-description">{item.description}</p>
                  <div className="item-footer">
                    <span className="item-price">{item.price}</span>
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="item-link">
                      View →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2026 Mouka Store. All rights reserved. | Home Decor Excellence</p>
      </footer>
    </>
  )
}

export default App
