import {FaSearch} from 'react-icons/fa'
import './index.css'

const Header = () => (
  <nav className="app-navbar">
    <div className="logo-container">
      <img
        className="nav-logo"
        src="https://res.cloudinary.com/dky69roxl/image/upload/v1687411063/Standard_Collection_8_yc8kdx.svg"
        alt="website logo"
      />
      <p className="nav-heading">Insta Share</p>
    </div>
    <div className="nav-items-container">
      <div className="nav-search-container">
        <input
          className="search-input"
          placeholder="Search Caption"
          type="search"
        />
        <button
          className="search-button"
          type="button"
          data-testid="searchIcon"
        >
          <FaSearch className="search-icon" />
        </button>
      </div>
      <div className="nav-items">
        <ul className="list-container">
          <li className="item">Home</li>
          <li className="item">Profile</li>
          <li>
            <button className="logout-btn" type="button">
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

export default Header
