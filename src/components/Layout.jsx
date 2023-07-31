import { motion } from 'framer-motion'
import Loader from './Loader'
import Navbar from './Navbar'
import Header from './Header'
import Footer from './Footer'


const Layout = ({ children }) => {
  return (
    <motion.div className='text-white tracking-wider w-full bg-midnight'>
      <Loader />
      <Navbar />
      <Header />
      <div className='max-w-8/5 m-auto min-h-screen pt-24 px-4 h-2-screen'>
        {children}
      </div>
      <Footer />
    </motion.div>
  )
}

export default Layout