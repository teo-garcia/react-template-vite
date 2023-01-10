import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from '@pages/index'
import { NotFoundPage } from '@pages/404'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export { Router }
