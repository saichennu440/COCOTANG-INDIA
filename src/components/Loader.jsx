import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-[#111111] flex flex-col items-center justify-center"
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <img src="/images/logo.png" alt="Cocotang" className="w-28 h-auto" />
      </motion.div>

      {/* Loading bar */}
      <div className="w-48 h-0.5 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-[#D42B2B] to-[#F5A623] rounded-full"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.8, ease: 'easeInOut' }}
        />
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mt-4 text-white/40 text-xs tracking-[0.3em] uppercase font-display"
      >
        Taste the Tropics
      </motion.p>

      {/* Floating bubbles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-[#D42B2B]/20"
          style={{
            width: Math.random() * 20 + 8,
            height: Math.random() * 20 + 8,
            left: `${10 + i * 15}%`,
            bottom: '10%',
          }}
          animate={{ y: [0, -300], opacity: [0, 0.6, 0] }}
          transition={{
            duration: 2 + i * 0.3,
            delay: i * 0.2,
            repeat: Infinity,
            ease: 'easeOut',
          }}
        />
      ))}
    </motion.div>
  )
}
