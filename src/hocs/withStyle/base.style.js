export default `
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  @-ms-viewport {
    width: device-width;
  }
  html {
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: transparent;
  }

  body {
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 0.875rem;
    font-weight: normal;
    line-height: 1.5;
    color: #292b2c;
    background-color: #fff;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: relative;
  }

`
