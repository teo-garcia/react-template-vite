import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from '@pages/index'
import NotFoundPage from '@pages/404'

const homePage = {
  path: '/',
  element: <HomePage />,
}
const notFoundPage = {
  path: '*',
  element: <NotFoundPage />,
}

const routes = [homePage, notFoundPage]
const router = createBrowserRouter(routes)

export type RouterProps = {
  children?: React.ReactNode
}

const Router = (props: RouterProps) => {
  return <RouterProvider router={router} {...props} />
}

export { Router }
