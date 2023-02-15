import './index.css'

import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const onButton = () => {
        toggleTheme()
      }

      return (
        <>
          {isDarkTheme ? (
            <>
              <div className="navbar-container-1">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                  alt="website logo"
                  className="n-img-1"
                />
                <div className="div-1">
                  <ul className="card-1-navbar">
                    <Link to="/">
                      <li className="li-item-1">Home</li>
                    </Link>
                    <Link to="/about">
                      <li className="li-item-1">About</li>
                    </Link>
                  </ul>
                </div>
                <button
                  type="button"
                  className="butt"
                  onClick={onButton}
                  data-testid="theme"
                >
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                    alt="theme"
                    className="n-img-1"
                  />
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="navbar-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                  alt="website logo"
                  className="n-img-1"
                />
                <div>
                  <ul className="card-1-navbar">
                    <Link to="/">
                      <li className="li-item">Home</li>
                    </Link>
                    <Link to="/about">
                      <li className="li-item">About</li>
                    </Link>
                  </ul>
                </div>
                <button
                  type="button"
                  className="butt"
                  onClick={onButton}
                  data-testid="theme"
                >
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                    alt="theme"
                    className="n-img-1"
                  />
                </button>
              </div>
              <hr />
            </>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
