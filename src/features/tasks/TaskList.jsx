import TaskItem from './TaskItem'
import { useFilteredTasks } from '../../hooks/useFilteredTasks'

export default function TaskList() {
  const { filteredTasks } = useFilteredTasks()

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
