import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import BrandStory from './sections/BrandStory'
import Products from './sections/Products'
import FranchiseSection from './sections/FranchiseSection'
import FranchisePage from './pages/FranchisePage'
import Benefits from './sections/Benefits'
import Gallery from './sections/Gallery'
import Testimonials from './sections/Testimonials'
import OrderCTA from './sections/OrderCTA'
import Footer from './sections/Footer'
import Loader from './components/Loader'
import ScrollToTop from "./components/ScrollToTop"
import ComingSoon from "./sections/ComingSoon"
export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
     <ScrollToTop />
      <AnimatePresence>
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <Navbar />

          <Routes>

            {/* Home Page */}
            <Route
              path="/"
              element={
                <main>
                  <Hero />
                  <BrandStory />
                  <Products />
                  <FranchiseSection />
                  <Benefits />
                  <Gallery />
                  <Testimonials />
                  <OrderCTA />
                </main>
              }
            />

            {/* Franchise Page */}
            <Route
              path="/franchise"
              element={<FranchisePage />}
            />
            <Route
  path="/comingsoon"
  element={<ComingSoon />}
/>

          </Routes>

          <Footer />
        </motion.div>
      )}
    </>
  )
}