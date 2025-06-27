import Footer from './components/Footer'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'

/** In Router 6.4+, we use App as the layout component and use <Outlet/> Component for children routes after "/", This seems similar to how {children} renders all pages in the  Next.js*/
function App() {
  return (
    <main className="bg-white-300 dark:bg-gray-900 dark:text-white">
      <Header />

      <Outlet />
      {/*  ← this is where child routes render */}

      <Footer />
    </main>
  )
}

export default App
