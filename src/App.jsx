import Footer from './components/Footer'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <main className="bg-white-300 dark:bg-gray-900 dark:text-white min-h-screen flex flex-col">
      <Header />

      <div className="flex-1">
        <Outlet />
      </div>

      <Footer />
    </main>
  )
}

export default App
