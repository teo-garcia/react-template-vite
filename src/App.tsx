import Router from './features/Routes/Routes'
import { Global } from 'primitivex'
import { HelmetProvider } from 'react-helmet-async'

function App() {
  return (
    <Global>
      <HelmetProvider>
        <Router />
      </HelmetProvider>
    </Global>
  )
}

export default App
