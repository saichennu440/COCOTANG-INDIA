import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from "react-router-dom"

export default function Hero() {
  const ref = useRef(null)
  const videoRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08])

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#111111]"
    >
   {/* ── Video Background ── */}
<motion.div
  className="absolute inset-0 z-0"
  style={{ scale }}
>
  {/* Desktop Video */}
  <video
    ref={videoRef}
    className="hidden md:block w-full h-full object-cover"
    src="/images/HeroPage.mp4"
    autoPlay
    muted
    loop
    playsInline
    preload="auto"
  />

  {/* Mobile Video */}
  <video
    className="block md:hidden w-full h-full object-cover"
    src="/images/HeroPage_mobile.mp4"
    autoPlay
    muted
    loop
    playsInline
    preload="auto"
  />
</motion.div>

      {/* ── Dark gradient overlays ── */}
      {/* Bottom fade — keeps text readable */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent" />
      {/* Top vignette — gives navbar breathing room */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#111111]/60 via-transparent to-transparent" />
      {/* Subtle red tint */}
      <div className="absolute inset-0 z-10" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 60%, rgba(212,43,43,0.18) 0%, transparent 70%)' }} />

      {/* ── Content ── */}
      <motion.div
        className="relative z-20 text-center px-6 max-w-5xl mx-auto pt-24"
        style={{ opacity }}
      >
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 glass-red rounded-full px-4 py-1.5 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#F5A623] animate-pulse" />
          <span className="text-xs text-white/90 tracking-[0.2em] uppercase font-body">
            100% Natural · No Preservatives
          </span>
        </motion.div>

        {/* Logo */}
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          {/* <img
            src="/images/logo.png"
            alt="Cocotang India"
            className="w-24 md:w-32 h-auto drop-shadow-2xl"
          /> */}
        </motion.div>

        {/* Headline */}
{/* Headline */}
<motion.h1
  className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] text-white mb-6 drop-shadow-[0_4px_30px_rgba(0,0,0,0.8)] "
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5, duration: 0.8 }}
>
  India's Natural
  <br />
  <span className="text-gradient-gold">
    Tender Coconut Beverage
  </span>
  <br />
  & Ice Cream Brand
</motion.h1>

{/* Subheadline */}
<motion.p
  className="text-white/90 text-base sm:text-lg md:text-xl max-w-4xl mx-auto mb-12 leading-relaxed drop-shadow-[0_2px_20px_rgba(0,0,0,0.8)] font-medium"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.7, duration: 0.7 }}
>
  Refreshing tender coconut drinks, natural fruit beverages,
  premium ice creams and fruit pops—crafted to bring nature's
  goodness closer to every Indian.
</motion.p>

{/* CTA buttons */}
<motion.div
  className="flex flex-col sm:flex-row gap-5 justify-center items-center"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.9, duration: 0.7 }}
>
  <a
    href="#products"
    className="group relative inline-flex items-center justify-center gap-2 bg-[#D42B2B] text-white font-semibold px-8 py-4 rounded-full text-base overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-red-900/60 hover:-translate-y-1 min-w-[220px]"
  >
    <span className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity" />

    <span>Order Products</span>

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
  </a>

  <Link
    to="/franchise"
    className="inline-flex items-center justify-center gap-2 glass border border-white/30 text-white font-semibold px-8 py-4 rounded-full text-base transition-all duration-300 hover:border-[#F5A623]/60 hover:text-[#F5A623] hover:-translate-y-1 min-w-[280px]"
  >
    Become a Franchise Partner
  </Link>
</motion.div>
</motion.div>
    </section>
  )
}
