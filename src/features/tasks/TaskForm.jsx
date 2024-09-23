import PropTypes from 'prop-types'
import BtnLink from '../../ui/BtnLink'
import Container from '../../ui/Container'
import { Form, Outlet } from 'react-router-dom'
import InputWithLabel from '../../ui/InputWithLabel'
import Btn from '../../ui/Btn'

const action = async ({ request }) => {
  const formData = await request.formData()
  const newTask = {
    title: formData.get('title'),
    price: Number(formData.get('price')),
  }

  return newTask
}

export default function TaskForm({ titleValue, priceValue, action = 'add' }) {
  return (
    <Container>
      <Form
        className='flex flex-col gap-4'
        method='post'
        action={action}
        replace
      >
        <InputWithLabel
          title={'Title'}
          type='text'
          name='title'
          placeholder='Enter title'
          defaultValue={titleValue || ''}
          required
        />
        <InputWithLabel
          title={'Price'}
          type='text'
          name='price'
          placeholder='Enter price'
          defaultValue={priceValue || ''}
          required
        />
        <div className='flex justify-end gap-4 '>
          <Btn type='submit'>Save</Btn>
          <BtnLink to='/'>Cancel</BtnLink>
        </div>
      </Form>
      <Outlet />
    </Container>
  )
}

TaskForm.action = action

TaskForm.propTypes = {
  titleValue: PropTypes.string,
  priceValue: PropTypes.number,
  action: PropTypes.string,
}
