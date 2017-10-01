import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'
import Helmet from 'react-helmet'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    const styles = flush()

    return {
      html,
      head,
      errorHtml,
      chunks,
      styles,
      helmet: Helmet.rewind()
    }
  }

  get htmlAttrs () {
    return this.props.helmet.htmlAttributes.toComponent()
  }

  get bodyAttrs () {
    return this.props.helmet.bodyAttributes.toComponent()
  }

  get helmetJsx () {
    return (<Helmet
      htmlAttributes={{lang: 'en'}}
    />)
  }

  render () {
    return (
      <html {...this.htmlAttrs}>
        <Head>
          {this.helmetJsx}
          {this.props.helmet.title.toComponent()}
          {this.props.helmet.meta.toComponent()}
          {this.props.helmet.link.toComponent()}
        </Head>
        <body {...this.bodyAttrs}>
          {this.props.customValue}
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
