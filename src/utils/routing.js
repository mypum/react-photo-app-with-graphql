import NProgress from 'nprogress'
import Router from 'next/router'

export default function configureLoadingProgressBar () {
  Router.onRouteChangeStart = () => {
    console.log('zz start')
    NProgress.start()
  }
  Router.onRouteChangeComplete = () => NProgress.done()
  Router.onRouteChangeError = () => NProgress.done()
}
