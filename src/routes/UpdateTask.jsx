import { useDispatch } from 'react-redux'
import { useActionData, useLoaderData, useNavigate } from 'react-router-dom'
import { updateTask } from '../features/tasks/tasksSlice'
import { useEffect } from 'react'

export default function UpdateTask() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const task = useActionData()
  const id = useLoaderData()

  useEffect(() => {
    if (task) {
      dispatch(updateTask({ ...task, id }))
    }

    navigate('/')
  })

  return null
}
