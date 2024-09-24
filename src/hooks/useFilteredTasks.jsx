import { useSelector } from 'react-redux'
import { getFilter } from '../features/filter/filterSlice'
import { getTasks } from '../features/tasks/tasksSlice'

export const useFilteredTasks = () => {
  const filter = useSelector(getFilter)
  const tasks = useSelector(getTasks)
  const filteredTasks = tasks.filter((task) => task.title.toLowerCase().includes(filter.toLowerCase()))

  return { filteredTasks }
}
