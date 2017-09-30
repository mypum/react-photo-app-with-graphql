import { Link } from '../server/routes'

const Index = () => (
  <div>
    <p>Hello Next.js</p>
    <Link route="about">
      <a>About</a>
    </Link>
  </div>
)

export default Index
