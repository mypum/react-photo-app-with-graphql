export function mainFont (weight = false, style = false) {
  let value = [`font-family: 'Helvetica Neue, Helvetica, Arial, sans-serif';`]

  if (weight) {
    value.push(`font-weight: ${weight};`)
  }
  if (style) {
    value.push(`font-style: ${style};`)
  }

  return value.join(' ')
}

export function percentage (value) {
  return `${value * 100}%`
}
