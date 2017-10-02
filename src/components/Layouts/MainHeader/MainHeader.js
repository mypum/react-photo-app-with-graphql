import React from 'react'

import Logo from './Logo'

function MainHeader () {
  return (
    <header className="MainHeader">
      <div className="container">
        <div className="MainHeaderRow">
          <Logo />
          <div className="nav">
            nav
          </div>
        </div>
      </div>

      <style jsx>{`
        .MainHeader {
          background: #000;
          height: 50px;
          width: 100%;
        }

        .container,
        .MainHeaderRow {
          height: 100%;
        }

        .MainHeaderRow {
          display: flex;
          align-items: center;
        }
      `}</style>
    </header>
  )
}

export default MainHeader
