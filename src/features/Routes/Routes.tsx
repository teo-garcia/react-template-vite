import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../../pages'
import NotFoundPage from '../../pages/404'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
