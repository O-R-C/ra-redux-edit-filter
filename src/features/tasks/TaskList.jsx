import { useSelector } from 'react-redux'
import TaskItem from './TaskItem'
import { getTasks } from './tasksSlice'
import { getFilter } from '../filter/filterSlice'

export default function TaskList() {
  const tasks = useSelector(getTasks)
  const filter = useSelector(getFilter)
  const filteredTasks = tasks.filter((task) => task.title.toLowerCase().includes(filter.toLowerCase()))

  if (filteredTasks.length === 0) {
    return <p className='text-center'>No tasks found</p>
  }

  return (
    <ul className='flex flex-col gap-3'>
      {filteredTasks.map((task) => (
        <TaskItem
          key={task.id}
          {...task}
        />
      ))}
    </ul>
  )
}
