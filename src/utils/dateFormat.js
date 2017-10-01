import parse from 'date-fns/parse'
import { format } from 'date-fns'

export default (ISOFormat) => format(parse(ISOFormat), 'MMM DD, YYYY')
