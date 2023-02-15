import './index.css'

import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

const About = () => (
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
                  src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                  alt="about"
                  className="home-img"
                />
                <h1 className="home-head-1">About</h1>
              </div>
            </div>
          ) : (
            <div className="home-container">
              <Navbar />
              <div className="home-card">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                  alt="about"
                  className="home-img"
                />
                <h1 className="home-head">About</h1>
              </div>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
