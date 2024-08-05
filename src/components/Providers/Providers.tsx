import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { HelmetProvider } from 'react-helmet-async'

import { ThemeSwitch } from 'components/ThemeSwitch/ThemeSwitch'
import { ViewportInfo } from 'components/ViewportInfo/ViewportInfo'
import { Router } from 'features/Router/Router'
import { isDevelopment } from 'lib/misc/config'

const queryClient = new QueryClient()

const Providers = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <ThemeSwitch />
        <Router />
      </HelmetProvider>
      <ReactQueryDevtools buttonPosition="bottom-left" />
      {isDevelopment() && <ViewportInfo />}
    </QueryClientProvider>
  )
}

export { Providers }
