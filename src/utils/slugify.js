import slugify from 'slugify'

export default (title) => slugify(title, {remove: /[$*_+~.()'"!\-:@]/g, lower: true})
