import TaskForm from './features/tasks/TaskForm'
import TaskList from './features/tasks/TaskList'
import Header from './ui/Header'

export default function App() {
  return (
    <div className='App'>
      <Header>
        <TaskForm />
        <TaskList />
      </Header>
    </div>
  )
}
