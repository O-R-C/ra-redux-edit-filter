import TaskList from './features/tasks/TaskList'
import BtnAdd from './ui/BtnAdd'
import Container from './ui/Container'
import Header from './ui/Header'

export default function App() {
  return (
    <Container>
      <Header>
        <BtnAdd />
      </Header>
      <TaskList />
    </Container>
  )
}
