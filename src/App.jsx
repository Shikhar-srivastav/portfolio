import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Resume from './pages/Resume'

const App = () => {
  const location = useLocation()
  const { pathname } = location

  return (
      <AnimatePresence mode='wait'>
        <Layout key={pathname}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/resume' element={<Resume />} />
          </Routes>
        </Layout>
      </AnimatePresence>
  )
}

export default App
