import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'

const businessModels = [
  {
    title: 'Kiosk Model',
    description:
      'Compact, attractive and ideal for malls, high streets and commercial areas.',
    image: '/images/kiosk.jpg',
    color: '#D42B2B',
  },
  {
    title: 'Retail Outlet',
    description:
      'A complete customer experience for beverages and desserts.',
    image: '/images/retail.jpeg',
    color: '#F5A623',
  },
  {
    title: 'Distribution Partner',
    description:
      'Expand Cocotang products across your region.',
    image: '/images/dealer.jpg',
    color: '#2B7A4B',
  },
]

const eventTypes = [
  'Corporate Events',
  'Concerts',
  'Festivals',
  'Educational Institutions',
  'Sports Events',
  'Special Occasions',
]

export default function Benefits() {
  const ref = useRef(null)

  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  })

  return (
    <section
      id="formats"
      ref={ref}
      className="py-32 px-6 bg-[#111111] relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D42B2B]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#F5A623]/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto">

        {/* ================= STORE FORMATS ================= */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-40">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-[#F5A623]" />

              <span className="text-[#F5A623] uppercase tracking-[0.3em] text-xs">
                Store Formats
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl font-bold text-white leading-[1.05] mb-8">
              Business Models
              <br />
              <span className="text-[#F5A623]">
                Designed For Growth
              </span>
            </h2>

            <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-xl">
              Choose the format that best suits your investment goals and
              market opportunity.
            </p>

            <Link
              to="/franchise"
              className="inline-flex items-center gap-3 bg-[#D42B2B] px-8 py-4 rounded-full text-white font-semibold hover:bg-[#b92323] transition-all hover:-translate-y-1"
            >
              Explore Business Models

              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 12H19M13 6L19 12L13 18"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </motion.div>

          {/* Right Cards */}
          <div className="space-y-6">
            {businessModels.map((model, index) => (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="group bg-[#181818] rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all"
              >
                <div className="grid md:grid-cols-[180px_1fr]">

                  <img
                    src={model.image}
                    alt={model.title}
                    className="w-full h-full object-cover min-h-[180px]"
                  />

                  <div className="p-8 flex flex-col justify-center">
                    <div
                      className="w-14 h-1 rounded-full mb-5"
                      style={{
                        backgroundColor: model.color,
                      }}
                    />

                    <h3 className="text-3xl font-bold text-white mb-4">
                      {model.title}
                    </h3>

                    <p className="text-white/65 leading-relaxed">
                      {model.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= CORPORATE EVENTS ================= */}
        <section
        id="events"
        >
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <img
              src="/images/corporate.jpeg"
              alt="Corporate Events"
              className="rounded-[40px] w-full h-[700px] object-cover"
            />

            <div className="absolute inset-0 rounded-[40px] bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div className="absolute bottom-10 left-10">
              <p className="text-[#F5A623] uppercase tracking-[0.3em] text-xs mb-3">
                Bulk Orders & Partnerships
              </p>

              <h3 className="text-4xl font-bold text-white">
                Events Made
                <br />
                Refreshingly Better
              </h3>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-[#F5A623]" />

              <span className="text-[#F5A623] uppercase tracking-[0.3em] text-xs">
                Corporate & Events
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl font-bold text-white leading-[1.05] mb-8">
              Perfect For
              <br />
              <span className="text-[#F5A623]">
                Events & Institutions
              </span>
            </h2>

            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Cocotang products are ideal for corporate gatherings,
              concerts, festivals, educational institutions, sports
              events and special occasions.
            </p>

            <p className="text-white/70 text-lg leading-relaxed mb-10">
              We provide customized solutions for bulk orders and event
              partnerships.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              {eventTypes.map((item) => (
                <div
                  key={item}
                  className="px-5 py-3 rounded-full bg-[#181818] border border-white/10 text-white/80"
                >
                  {item}
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-[#F5A623] text-black font-semibold px-8 py-4 rounded-full hover:scale-105 transition-all"
            >
              Enquire For Bulk Orders

              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 12H19M13 6L19 12L13 18"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </motion.div>

        </div>
        </section>
      </div>
    </section>
  )
}