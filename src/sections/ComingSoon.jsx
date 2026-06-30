import { motion } from "framer-motion"

export default function ComingSoon() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#111111] flex items-center justify-center px-6">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/images/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#D42B2B]/20 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#F5A623]/20 rounded-full blur-[140px]" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">

        {/* Logo */}
        {/* <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          src="/images/logo.png"
          alt="Cocotang"
          className="w-32 mx-auto mb-10"
        /> */}

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-20 inline-flex items-center gap-3   px-5 py-2 rounded-full mb-8"
        >
          {/* <div className="w-2 h-2 rounded-full bg-[#F5A623] animate-pulse " /> */}
          {/* <span className="text-[#F5A623] uppercase tracking-[0.35em] text-xs mt">
            Coming Soon
          </span> */}
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl md:text-8xl font-bold text-white leading-[1.05]"
        >
          Something
          <br />
          <span className="text-[#F5A623]">
            Refreshing
          </span>
          <br />
          Is Coming
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-10 text-white/70 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
        >
          We are preparing something exciting for Cocotang lovers.
          Stay tuned as we bring India's natural tender coconut beverages,
          premium ice creams and refreshing experiences closer to you.
        </motion.p>

        {/* Email Form */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-14 flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto"
        >
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 bg-[#181818] border border-white/10 rounded-full px-6 py-4 text-white placeholder:text-white/40 outline-none focus:border-[#F5A623]"
          />

          <button
            type="submit"
            className="bg-[#D42B2B] hover:bg-[#b52121] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-1"
          >
            Notify Me
          </button>
        </motion.form>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="grid grid-cols-3 gap-6 mt-20"
        >
          <div className="bg-[#181818] border border-white/10 rounded-3xl p-6">
            <h3 className="text-4xl font-bold text-[#F5A623]">
              100%
            </h3>
            <p className="text-white/60 mt-2">
              Natural
            </p>
          </div>

          <div className="bg-[#181818] border border-white/10 rounded-3xl p-6">
            <h3 className="text-4xl font-bold text-[#F5A623]">
              0
            </h3>
            <p className="text-white/60 mt-2">
              Preservatives
            </p>
          </div>

          <div className="bg-[#181818] border border-white/10 rounded-3xl p-6">
            <h3 className="text-4xl font-bold text-[#F5A623]">
              ∞
            </h3>
            <p className="text-white/60 mt-2">
              Refreshment
            </p>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="mt-20 text-white/40 text-sm"
        >
          © {new Date().getFullYear()} Cocotang India. All Rights Reserved.
        </motion.div>

      </div>
    </section>
  )
}