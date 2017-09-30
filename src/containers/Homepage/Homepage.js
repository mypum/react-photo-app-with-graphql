import { Link } from 'server/routes'

const Index = () => (
  <div>
    <p>Homepage</p>
    <Link prefetch route="about">
      <a>About</a>
    </Link>
  </div>
)

export default Index
