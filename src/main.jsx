import { StrictMode } from 'react'
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App'
import TaskForm from './features/tasks/TaskForm.jsx'
import ErrorPage from './routes/ErrorPage.jsx'
import AddTask from './routes/AddTask.jsx'
import EditTask from './routes/EditTask.jsx'
import UpdateTask from './routes/UpdateTask.jsx'

import store from './store.js'
import './index.css'
import DeleteTask from './routes/DeleteTask.jsx'
import ConfirmDelete from './routes/ConfirmDelete.jsx'

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
        children: [
          {
            path: 'add',
            element: <AddTask />,
            action: TaskForm.action,
          },
        ],
      },
      {
        path: 'task/:id/delete',
        element: <ConfirmDelete />,
        children: [
          {
            path: 'delete',
            element: <DeleteTask />,
            loader: EditTask.loader,
          },
        ],
      },
      {
        path: 'task/:id/edit',
        element: <EditTask />,
        loader: EditTask.loader,
        action: TaskForm.action,
        children: [
          {
            path: 'update',
            element: <UpdateTask />,
            action: TaskForm.action,
            loader: EditTask.loader,
          },
        ],
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
