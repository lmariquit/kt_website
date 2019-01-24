import React from 'react'

import {Title, Navbar, Content, Footer} from './components'

const App = () => {
  return (
    // <div id="wholePageContainer">
    //   <Navbar />
    //   <div id="content">
    //     <div id="routesContainer">
    //       <Routes />
    //     </div>
    //     <div id="footerContainer">
    //       <hr />
    //       <Footer />
    //     </div>
    //   </div>
    // </div>

    <div id="wholePageContainer">
      <Title />
      <Navbar />
      <Content />
      <Footer />
    </div>
  )
}

export default App
