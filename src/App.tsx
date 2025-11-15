import { useRoutes } from 'react-router-dom'
import routes from './routes'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  const routing = useRoutes(routes)

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-gradient-to-b from-astral-light to-white">
        {routing}
      </main>
      <Footer />
    </div>
  )
}

export default App
