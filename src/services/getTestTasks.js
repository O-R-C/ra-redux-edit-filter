import { v4 as uuid } from 'uuid'

const tasks = [
  { title: 'Замена стекла', price: 100 },
  { title: 'Замена дисплея', price: 200 },
  { title: 'Замена аккумулятора', price: 300 },
  { title: 'Замена микрофона', price: 400 },
]

export const getTestTasks = () => {
  return tasks.map((task) => ({ ...task, id: uuid() }))
}
