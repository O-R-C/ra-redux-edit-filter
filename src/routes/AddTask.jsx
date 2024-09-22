import { useDispatch } from 'react-redux'
import { useActionData, useNavigate } from 'react-router-dom'
import { addTask } from '../features/tasks/tasksSlice'
import { useEffect } from 'react'

export default function AddTask() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const task = useActionData()

  useEffect(() => {
    if (task) {
      dispatch(addTask(task))
    }

    navigate('/')
  })

  return null
}
