import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLoaderData, useNavigate } from 'react-router-dom'
import { removeTask } from '../features/tasks/tasksSlice'

export default function DeleteTask() {
  const id = useLoaderData()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(removeTask(id))
    navigate('/', { replace: true })
  }, [dispatch, navigate, id])

  return null
}
