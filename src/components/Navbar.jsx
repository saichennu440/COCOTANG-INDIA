import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import FranchiseModal from '../sections/FranchiseModal'
const navLinks = [
  { label: 'Products', type: 'hash', href: '/#products' },
  { label: 'Franchise', type: 'route', href: '/franchise' },
  { label: 'Store Formats', type: 'hash', href: '/#formats' },
  { label: 'Corporate Orders ', type: 'hash', href: '/#events' },
  { label: 'Gallery', type: 'hash', href: '/#gallery' },
  { label: 'Contact', type: 'hash', href: '/#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [franchiseOpen, setFranchiseOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const renderNavItem = (link, mobile = false) => {
    const classes = mobile
      ? 'font-display text-5xl text-white hover:text-[#F5A623] transition-colors'
      : 'text-white/70 hover:text-[#F5A623] text-sm tracking-wide transition-colors duration-200 font-body'

    if (link.type === 'route') {
      return (
        <Link
          key={link.label}
          to={link.href}
          onClick={() => setMenuOpen(false)}
          className={classes}
        >
          {link.label}
        </Link>
      )
    }

    return (
      <HashLink
        key={link.label}
        smooth
        to={link.href}
        onClick={() => setMenuOpen(false)}
        className={classes}
      >
        {link.label}
      </HashLink>
    )
  }

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div
          className={`mx-4 md:mx-8 rounded-2xl transition-all duration-500 ${
            scrolled
              ? 'glass border border-white/10 shadow-2xl shadow-black/50 px-5 py-3'
              : 'px-5 py-3'
          }`}
        >
          <div className="flex items-center justify-between max-w-7xl mx-auto">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/images/logo.png"
                alt="Cocotang India"
                className="w-10 h-10 object-contain rounded-lg"
              />

              <div className="hidden sm:block">
                <p className="font-display text-xl text-white leading-none tracking-wide">
                  COCOTANG
                </p>

                <p className="text-[9px] text-white/50 tracking-[0.25em] uppercase">
                  India
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => renderNavItem(link))}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-4">

                <button
                  onClick={() => setFranchiseOpen(true)}
                  className="hidden md:inline-flex items-center gap-2 bg-[#D42B2B] hover:bg-[#b52020] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-red-900/40 hover:-translate-y-1"
                >
                  Become a Partner

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
                aria-label="Menu"
              >
                <motion.span
                  className="block w-6 h-0.5 bg-white"
                  animate={menuOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
                />

                <motion.span
                  className="block w-6 h-0.5 bg-white"
                  animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                />

                <motion.span
                  className="block w-6 h-0.5 bg-white"
                  animate={menuOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
                />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#111111]/95 backdrop-blur-xl flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="/images/logo.png"
              alt="Cocotang"
              className="w-20 mb-10 opacity-80"
            />

            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  {renderNavItem(link, true)}
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
              <button
                onClick={() => {
                  setMenuOpen(false)
                  setFranchiseOpen(true)
                }}
                className="mt-4 bg-[#D42B2B] text-white font-semibold px-8 py-3 rounded-full text-lg hover:bg-[#b52020] transition-all"
              >
                Become a Franchise Partner
              </button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
      <FranchiseModal
  open={franchiseOpen}
  onClose={() => setFranchiseOpen(false)}
/>
    </>
  )
}