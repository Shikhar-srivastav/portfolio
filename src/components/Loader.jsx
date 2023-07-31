import { motion } from 'framer-motion'

const top = 'calc(50% - 50px)'
const right = 'calc(50% + 50px)'
const bottom = 'calc(50% + 50px)'
const left = 'calc(50% - 50px)'

const Loader = () => {
  return (
    <motion.div
      initial={{
        clipPath: `polygon(50% ${top}, ${right} 50%, 50% ${bottom}, ${left} 50%)`, 
        opacity: 1,
        backgroundColor: '#ffffff' 
      }}
      animate={{ 
        clipPath: 'polygon(50% -100vw, 200vw 50%, 50% 200vw, -100vw 50%)', 
        opacity: 0 
      }}
      exit={{
        clipPath: `polygon(50% ${top}, ${right} 50%, 50% ${bottom}, ${left} 50%)`, 
        opacity: 1, 
        backgroundColor: '#fffffff' 
      }}
      transition={{ delay: 1, duration: 1 }}
      className='fixed h-screen w-screen top-0 left-0 bg-midnight z-50'
    />
  )
}

export default Loader