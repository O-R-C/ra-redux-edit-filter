import BtnLink from '../../ui/BtnLink'
import Container from '../../ui/Container'
import InputWithLabel from '../../ui/InputWithLabel'
import Btn from '../../ui/Btn'
import { Form } from 'react-router-dom'

const action = async ({ request }) => {
  const formData = await request.formData()
  const newTask = {
    title: formData.get('title'),
    price: Number(formData.get('price')),
  }

  return newTask
}

export default function TaskForm() {
  return (
    <Container>
      <Form
        className='flex flex-col gap-4'
        method='post'
        action='add'
      >
        <InputWithLabel
          title={'Title'}
          type='text'
          name='title'
          placeholder='Enter title'
          required
        />
        <InputWithLabel
          title={'Price'}
          type='text'
          name='price'
          placeholder='Enter price'
          required
        />
        <div className='flex justify-end gap-4 '>
          <Btn type='submit'>Save</Btn>
          <BtnLink to='/'>Cancel</BtnLink>
        </div>
      </Form>
    </Container>
  )
}

TaskForm.action = action
