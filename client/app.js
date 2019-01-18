import React from 'react'

import {Navbar, Footer} from './components'
import Routes from './routes'

const App = () => {
  return (
    <div id="wholePageContainer">
      <Navbar />
      <div id="content">
        <div id="routesContainer">
          <Routes />
        </div>
        <div id="footerContainer">
          <hr />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
