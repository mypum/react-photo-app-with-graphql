import React from 'react'
import { Link } from 'server/routes'

import { color } from 'utils/style/_config'

function NavBar () {
  return (
    <div className="nav">
      <ul>
        <li>
          <Link prefetch route="homepage">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link prefetch route="/">
            <a>Browse</a>
          </Link>
        </li>
      </ul>
      <style jsx>{`
        .nav {
          font-size: 16px;
          height: 100%;
        }
        ul {
          height: 100%;
          display: flex;
        }

        li {
          display: flex;
          margin-right: 10px;
          height: 100%;
          align-items: center;
        }

        li :global(a) {
          display: flex;
          height: 50px;
          align-items: center;
          padding: 0 20px;
          border-bottom: 2px solid transparent;
        }

        li :global(a:hover) {
          color: #fff;
          background: #111;
          border-bottom: 2px solid ${color.primary};
        }
      `}</style>
    </div>
  )
}

export default NavBar
