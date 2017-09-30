import { Link } from '../server/routes'

const Index = () => (
  <div>
    <p>Hello Next.js</p>
    <Link prefetch route="about">
      <a>About</a>
    </Link>
  </div>
)

export default Index
