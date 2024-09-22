import { StrictMode } from 'react'
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App'
import TaskForm from './features/tasks/TaskForm.jsx'
import ErrorPage from './routes/ErrorPage.jsx'

import store from './store.js'
import './index.css'
import AddTask from './routes/AddTask.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'task/new',
        element: <TaskForm />,
        action: TaskForm.action,
      },
      {
        path: 'task/new/add',
        element: <AddTask />,
        action: TaskForm.action,
      },
      {
        path: 'task/:id/delete',
        element: <TaskForm />,
        action: TaskForm.action,
      },
      {
        path: 'task/:id/edit',
        element: <TaskForm />,
        action: TaskForm.action,
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
)
