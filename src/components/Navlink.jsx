import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Navlink = ({ text, path, isActive }) => {
  return (
    <Link to={path} className='relative py-2 px-4'>
      {text}
      {isActive && <motion.div 
        layoutId='box'
        className='absolute bg-indigo-600 top-0 left-0 h-full w-full rounded-xl -z-10' 
        transition={{ type: 'spring', stiffness: 50, bounce: 0.15 }}
      ></motion.div>}
    </Link>
  )
}

export default Navlink