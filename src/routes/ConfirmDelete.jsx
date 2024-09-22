import { Outlet } from 'react-router-dom'
import BtnLink from '../ui/BtnLink'
import Container from '../ui/Container'

export default function ConfirmDelete() {
  return (
    <div className='text-center'>
      <Container>
        <p>Are you sure?</p>
        <p>You can&apos;t undo this action.</p>
        <hr />
        <div className='flex justify-end gap-4'>
          <BtnLink to='/'>Cancel</BtnLink>
          <BtnLink
            to='delete'
            type='delete'
          >
            Delete
          </BtnLink>
        </div>
        <Outlet />
      </Container>
    </div>
  )
}
