import React from 'react'
import Sticky from 'react-stickynode'

import Header from '../components/Layouts/MainHeader/MainHeader'
import Footer from '../components/Layouts/MainFooter/MainFooter'

export default (
  option = {
    showHeader: true,
    showFooter: true,
    stickyHeader: true
  }) => WrappedComponent => (state, props) => {
  return (
    <div>
      {option.showHeader &&
        <Sticky innerZ={1000} enabled={option.stickyHeader} >
          <Header />
        </Sticky>
      }
      <div className="main">
        <WrappedComponent {...state} {...props} />
      </div>
      { option.showFooter && <Footer />}
      <style jsx>{`
        .main {
          min-height: 90vh;
        }
      `}</style>
    </div>
  )
}
