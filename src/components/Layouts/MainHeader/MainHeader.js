import React from 'react'

import Logo from './Logo'
import NavBar from './Nav'

function MainHeader () {
  return (
    <header className="MainHeader">
      <div className="container">
        <div className="MainHeaderRow">
          <Logo />
          <div className="MainHeaderNav">
            <NavBar />
          </div>
        </div>
      </div>

      <style jsx>{`
        .MainHeader {
          background: #000;
          height: 50px;
          width: 100%;
          margin-bottom: 20px;
        }
        :global(body.isPhotoPage) .MainHeader {
          margin-bottom: 0;
        }
        .container,
        .MainHeaderRow {
          height: 100%;
        }
        .MainHeaderRow {
          display: flex;
          align-items: center;
        }
        .MainHeaderNav {
          height: 100%;
          margin-left: 50px;
        }
      `}</style>
    </header>
  )
}

export default MainHeader
