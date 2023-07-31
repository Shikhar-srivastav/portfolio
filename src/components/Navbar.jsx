import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navlink from './Navlink'

const routes = [
  { text: 'Home', path: '/' },
  { text: 'About', path: '/about' },
  { text: 'Projects', path: '/projects' },
  { text: 'Skills', path: '/skills' },
  { text: 'Resume', path: '/resume' }
]

const Navbar = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scroll({ top: 0, behavior: 'smooth' })
  }, [ pathname ])

  return (
    <nav className='fixed top-4 left-1/2 -translate-x-1/2 text-white tracking-wider z-50'>
      <ul className='flex items-center text-sm'>
        { routes.map(({ text, path }) => <Navlink 
            key={text} 
            text={text}
            path={path} 
            isActive={pathname === path}
        />) }
      </ul>
    </nav>
  )
}

export default Navbar