import { Link, NavLink } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/resume-tools', label: 'Develop Skills' },
  { to: '/projects', label: 'Search Research' }
]

const Navbar = () => {
  return (
    <header className="bg-white/80 backdrop-blur border-b border-astral/30 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-wrap items-center justify-between">
        <Link to="/" className="text-2xl font-semibold text-astral-dark">
          Astra
        </Link>
        <nav className="flex gap-4 text-sm font-medium text-slate-600">
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `px-3 py-2 rounded-full transition ${isActive ? 'bg-astral text-white' : 'hover:bg-astral-light'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
