import { useEffect, useState } from 'react'
import { motion, scroll } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowUpRight } from 'react-icons/fi'

const Header = () => {
  const [ scScroll, setScScroll ] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      scroll(() => {
        const pos = window.scrollY
        setScScroll(pos > 48)
      }, {
          
      })
    }, 1000)
  }, [])
  

  return (
    <header className='fixed w-full top-0 left-0 right-0 text-sm'>
      <motion.div 
        className='flex items-center justify-between max-w-8/5 m-auto p-4' 
        animate={scScroll ? { opacity: 0, y: -25 } : { opacity: 1, y: 0 }} 
        style={scScroll ? { pointerEvents: 'none' } : null}
      >
        <Link to='/'>
          <p>Shikhar Srivastava</p>
          <p>Web Wizard</p>
        </Link>
        <div 
          className='text-right' 
        >
          <Link className='flex items-center justify-end gap-2'>
            Email Me
            <FiArrowUpRight />
          </Link>
          <p className='flex gap-2'>
            <a href="https://www.google.com" 
              target='_blank'
            >Github</a>
            <a href="https://www.google.com" 
              target='_blank'
            >LinkedIn</a>
          </p>
        </div>
      </motion.div>
    </header>
  )
}

export default Header