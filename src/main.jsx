import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ThemeProvider from './context/ThemeContext.jsx'
import CountriesProvider from './context/CountriesContext.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import CountryDetail from './pages/CountryDetail.jsx'
/*--- 
React-Router-DOM version 6+  
https://reactrouter.com/6.30.1/start/tutorial  
 --- */
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'country/:name', element: <CountryDetail /> }
    ]
  }
])

const queryClient = new QueryClient()
createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <CountriesProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </CountriesProvider>
  </QueryClientProvider>
)
