import { useLoaderData } from 'react-router-dom'
import TaskForm from '../features/tasks/TaskForm'
import { useSelector } from 'react-redux'

const loader = async ({ params }) => params.id

export default function EditTask() {
  const id = useLoaderData()
  const tasks = useSelector((state) => state.tasks.tasks)
  const task = tasks.find((task) => task.id === id)

  return (
    <TaskForm
      titleValue={task.title}
      priceValue={task.price}
      action='update'
    />
  )
}

EditTask.loader = loader
