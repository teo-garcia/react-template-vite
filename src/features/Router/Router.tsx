import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Layout } from 'components/Layout/Layout'
import NotFoundPage from 'pages/404'
import HomePage from 'pages/index'

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
