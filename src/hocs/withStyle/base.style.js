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
  color: #fff;
  background-color: #111;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
}

h1, h2, h3, h4, h5, h6 {
	margin: 0;
	font-size: Helvetica Neue, Helvetica, Arial, sans-serif;
	font-family: 0.875rem;
	font-weight: 400;
}

abbr[title],
abbr[data-original-title] {
  cursor: help;
}

address {
  margin-bottom: 1rem;
  font-style: normal;
  line-height: inherit;
}

p {
  margin: 0;
  padding: 0;
}

ol,
ul,
dl {
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
}

ol, ul {
	list-style: none;
}

dt {
  font-weight: 400px;
}

dd {
  margin-bottom: 0.5rem;
  margin-left: 0;
}

blockquote {
  margin: 0 0 1rem;
}

a {
  color: #e0cc85;
  text-decoration: none;
  outline: 0;
}

a:hover {
  text-decoration: none;
}

pre {
  margin-top: 0;
  margin-bottom: 1rem;
  overflow: auto;
}

figure {
  margin: 0 0 1rem;
}

img {
  max-width: 100%;
}

[role="button"] {
  cursor: pointer;
}

a,
area,
button,
[role="button"],
input,
label,
select,
summary,
textarea {
  touch-action: manipulation;
}

table {
  border-collapse: collapse;
}


th {
  text-align: left;
}

label {
  display: inline-block;
  margin-bottom: 0.5rem;
}

input,
button,
select,
textarea {
  line-height: inherit;
}


input[type="radio"]:disabled,
input[type="checkbox"]:disabled {
  cursor: not-allowed;
}


input[type="date"],
input[type="time"],
input[type="datetime-local"],
input[type="month"] {
  -webkit-appearance: listbox;
}

textarea {
  resize: vertical;
}

fieldset {
  min-width: 0;
  padding: 0;
  margin: 0;
  border: 0;
}

legend {
  display: block;
  width: 100%;
  padding: 0;
  margin-bottom: .5rem;
  font-size: 1.5rem;
  line-height: inherit;
}

input[type="search"] {
  -webkit-appearance: none;
}

output {
  display: inline-block;
}

[hidden] {
  display: none !important;
}


`
