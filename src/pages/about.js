import { Link } from '../server/routes'

const About = () => (
  <div>
    <p>About Page</p>
    <Link route="/">
      <a>Index</a>
    </Link>
  </div>
)

export default About
