import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
const categories = [
  {
    id: 'tender-coconut-beverages',
    title: 'Tender Coconut Beverages',
    description:
      'Refreshing drinks inspired by the natural goodness of tender coconut.',
    image: '/images/allbottles.jpg',
    color: '#34A853',
    route: '/comingsoon',
    badge: 'Best Seller Category',
  },
  {
    id: 'premium-ice-creams',
    title: 'Premium Ice Creams',
    description:
      'Rich, creamy and crafted for unforgettable moments.',
    image: '/images/icecreams.jpg',
    color: '#F5A623',
    route: '/comingsoon',
    badge: 'Premium Collection',
  },
  {
    id: 'ice-pops-popsicles',
    title: 'Ice Pops & Ice Popsicles',
    description:
      'Fun, fruity and refreshing treats for all ages.',
    image: '/images/icepops.jpg',
    color: '#D42B2B',
    route: '/comingsoon',
    badge: 'Kids Favourite',
  },
]

function CategoryCard({ category, index }) {
  const ref = useRef(null)

  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
      }}
    >
      <a href={category.route}>
        <motion.div
          whileHover={{ y: -10 }}
          className="group relative overflow-hidden rounded-[32px] h-[520px] cursor-pointer"
        >
          {/* Image */}
          <img
            src={category.image}
            alt={category.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />

          {/* Badge */}
          <div
            className="absolute top-6 left-6 px-4 py-2 rounded-full text-white text-xs font-semibold"
            style={{
              backgroundColor: `${category.color}dd`,
            }}
          >
            {category.badge}
          </div>

          {/* Content */}
          <div className="absolute bottom-8 left-8 right-8">
            <h3 className="text-4xl font-bold text-white mb-4 leading-tight">
              {category.title}
            </h3>

            <p className="text-white/80 text-lg leading-relaxed mb-6">
              {category.description}
            </p>

            <div
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full text-white font-semibold transition-all duration-300"
              style={{
                backgroundColor: `${category.color}`,
              }}
            >
              Explore Category

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
            </div>
          </div>

          {/* Border */}
          <div className="absolute inset-0 rounded-[32px] border border-white/10 group-hover:border-white/30 transition-all duration-500" />
        </motion.div>
      </a>
    </motion.div>
  )
}

export default function Products() {
  const titleRef = useRef(null)

  const titleInView = useInView(titleRef, {
    once: true,
  })

  return (
    <section
      id="products"
      className="relative py-32 px-6 bg-[#0D0D0D] overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#34A853]/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#F5A623]/10 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div
          ref={titleRef}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={titleInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center gap-4 mb-6"
          >
            <div className="w-12 h-px bg-[#F5A623]" />

            <span className="text-[#F5A623] uppercase tracking-[0.35em] text-xs font-semibold">
              Product Categories
            </span>

            <div className="w-12 h-px bg-[#F5A623]" />
          </motion.div>

          <motion.h2
            className="text-5xl md:text-7xl lg:text-8xl text-white font-bold leading-none mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.7,
            }}
          >
            Explore Our
            <br />
            <span className="text-[#F5A623]">
              Product Range
            </span>
          </motion.h2>

          <motion.p
            className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={titleInView ? { opacity: 1 } : {}}
            transition={{
              delay: 0.2,
              duration: 0.6,
            }}
          >
            From refreshing beverages to indulgent desserts,
            Cocotang offers a wide range of products crafted
            to satisfy every taste.
          </motion.p>
        </div>

        {/* Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {categories.map((category, index) => (
            <CategoryCard
              key={category.id}
              category={category}
              index={index}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/comingsoon"
            className="inline-flex items-center gap-3 bg-[#D42B2B] text-white px-10 py-5 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300"
          >
            View All Products

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
        </div>
      </div>
    </section>
  )
}