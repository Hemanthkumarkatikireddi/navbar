import './index.css'

import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

const Home = () => (
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
                  src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
                  alt="home"
                  className="home-img"
                />
                <h1 className="home-head-1">Home</h1>
              </div>
            </div>
          ) : (
            <div className="home-container">
              <Navbar />
              <div className="home-card">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
                  alt="home"
                  className="home-img"
                />
                <h1 className="home-head">Home</h1>
              </div>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
