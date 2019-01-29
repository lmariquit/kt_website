import React from 'react'

function Footer() {
  const fbIcon = ['fa', 'fa-facebook-f']
  const instagramIcon = ['fa', 'fa-instagram']
  const twitterIcon = ['fa', 'fa-twitter']
  return (
    <div id="footerContainer">
      {/* <hr /> */}
      <div id="iconContainer">
        <i id="fb" className={fbIcon.join(' ')} />
        <i id="instagram" className={instagramIcon.join(' ')} />
        <i id="twitter" className={twitterIcon.join(' ')} />
      </div>
    </div>
  )
}

export default Footer
