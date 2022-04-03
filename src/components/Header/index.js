import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="header-main-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      alt="website logo"
      className="logo-image"
    />
    <div className="text-container">
      <ul className="list-container">
        <Link to="/" className="link-class">
          <li className="list-text">Home</li>
        </Link>
        <Link to="/products" className="link-class">
          <li className="list-text">Products</li>
        </Link>
        <Link to="Cart" className="link-class">
          <li className="list-text">Cart</li>
        </Link>
      </ul>
      <button className="logout-button" type="button">
        Logout
      </button>
    </div>
  </nav>
)

export default Header
