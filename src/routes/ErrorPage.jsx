import Container from '../ui/Container'
import { Link, useRouteError } from 'react-router-dom'

export default function ErrorPage() {
  const error = useRouteError()
  return (
    <Container>
      <div className='flex flex-col items-center gap-3'>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <Link
          to='/'
          replace
          className='text-violet-500'
        >
          Вернуться на главную
        </Link>
      </div>
    </Container>
  )
}
