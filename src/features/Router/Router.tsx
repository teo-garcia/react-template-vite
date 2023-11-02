import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from 'pages/index'
import NotFoundPage from 'pages/404'
import { Layout } from 'components/Layout/Layout'

const homePage = {
  path: '/',
  element: <HomePage />,
}
const notFoundPage = {
  path: '*',
  element: <NotFoundPage />,
}

const layout = {
  element: <Layout />,
  children: [homePage, notFoundPage],
}

const routes = [layout]
const router = createBrowserRouter(routes)

export type RouterProps = {
  children?: React.ReactNode
}

const Router = (props: RouterProps) => {
  return <RouterProvider router={router} {...props} />
}

export { Router }
