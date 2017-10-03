import React from 'react'

function MainFooter () {
  return (
    <div>
      <p>Created by <a href="http://www.mypum.com">Thongchai Kitiyanantawong</a></p>
      <style jsx>{`
        div {
          padding: 20px;
          text-align: center;
          background-color: #000;
          margin-top: 40px;
        }
      `}</style>
    </div>
  )
}
MainFooter.propTypes = {
}

export default MainFooter
