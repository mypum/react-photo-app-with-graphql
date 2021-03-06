import React from 'react'
import { Link } from 'server/routes'

import { color } from 'utils/style/_config'

function NavBar () {
  return (
    <div className="nav">
      <ul>
        <li>
          <Link route="homepage">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link route="/">
            <a>Browse</a>
          </Link>
        </li>
      </ul>
      <style jsx>{`
        .nav {
          font-size: 16px;
          height: 100%;
          width: 100%;
          padding: 0 20px;
        }
        ul {
          height: 100%;
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        li {
          display: flex;
          margin-right: 10px;
          height: 100%;
          align-items: center;
          border-bottom: 1px solid #222;
        }

        li :global(a) {
          display: flex;
          flex-grow: 1;
          justify-content: center;
          height: 50px;
          align-items: center;
          padding: 0 20px;
          border-bottom: 2px solid transparent;
        }

        li :global(a:hover) {
          color: #fff;
          border-bottom: 2px solid ${color.primary};
        }
      `}</style>
    </div>
  )
}

export default NavBar
