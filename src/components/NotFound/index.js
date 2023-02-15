import './index.css'

import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <>
          {isDarkTheme ? (
            <div className="home-container">
              <Navbar />
              <div className="home-card-1">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                  alt="not found"
                  className="nf-img"
                />
                <h1 className="nf-head h">Lost Your Way?</h1>
                <p className="nf-para p">
                  We cannot seem to find the page you are looking for.
                </p>
              </div>
            </div>
          ) : (
            <div className="home-container">
              <Navbar />
              <div className="home-card">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                  alt="not found"
                  className="nf-img"
                />
                <h1 className="nf-head">Lost Your Way?</h1>
                <p className="nf-para">
                  We cannot seem to find the page you are looking for.
                </p>
              </div>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
