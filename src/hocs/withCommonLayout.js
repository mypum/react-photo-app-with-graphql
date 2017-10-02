import React from 'react'

import Header from '../components/Layouts/MainHeader/MainHeader'
import Footer from '../components/Layouts/MainFooter/MainFooter'

export default WrappedComponent => (state, props) => {
  return (
    <div>
      <Header />
      <WrappedComponent {...state} {...props} />
      <Footer />
    </div>
  )
}
