import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './root/Layout'
import Home from './pages/Home'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
      ],
    },
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
