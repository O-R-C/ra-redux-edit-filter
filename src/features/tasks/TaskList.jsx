import { useSelector } from 'react-redux'
import TaskItem from './TaskItem'

export default function TaskList() {
  const tasks = useSelector((state) => state.tasks.tasks)
  console.log('🚀 ~ tasks:', tasks)

  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          {...task}
        />
      ))}
    </ul>
  )
}
