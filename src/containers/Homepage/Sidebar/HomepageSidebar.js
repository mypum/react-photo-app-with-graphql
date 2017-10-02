import React from 'react'

import Logo from './HomeLogo'
import Nav from './HomeNav'

import { color } from 'utils/style/_config'

function HomepageSidebar () {
  return (
    <div className="HomeSidebar">
      <div className="HomeSidebarFixed">
        <div className="band">
          <Logo />
          <Nav />
        </div>
        <div className="credit">
          <p>Created by @mypum</p>
          <a href="//github.com/mypum" target="_blank" className="github">Github</a>
        </div>
      </div>
      <style jsx>{`
        .HomeSidebar {
          flex: 1 0 300px;
          max-width: 300px;
          background-color: #111;
        }
        .HomeSidebarFixed {
          width: 300px;
          height: 100vh;
          position: fixed;
          left: 0;
          top: 0;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .band {
          padding: 100px 40px 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .credit {
          text-transform: uppercase;
          color: #eee;
          width: 100%;
          text-align: center;
          padding-bottom: 40px;
        }
        a.github {
          margin-top: 10px;
          color: ${color.primary};
          text-transform: uppercase;
          border: 1px solid ${color.primary};
          text-decoration: none;
          display: inline-block;
          padding: 5px 20px;
        }
        a:hover.github {
          background-color: ${color.primary};
          color: #fff;
        }
      `}</style>
    </div>
  )
}

export default HomepageSidebar
