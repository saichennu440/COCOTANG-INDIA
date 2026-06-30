import { useRef } from "react"
import { motion, useInView } from "framer-motion"

import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, Autoplay, Pagination } from "swiper/modules"

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"

const galleryItems = Array.from({ length: 19 }, (_, index) => ({
  id: index + 1,
  src: `/gallery/${index + 1}.jpeg`,
}))

export default function Gallery() {
  const titleRef = useRef(null)

  const titleInView = useInView(titleRef, {
    once: true,
  })

  return (
    <section
      id="gallery"
      className="relative py-32 bg-[#0D0D0D] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#D42B2B]/10 rounded-full blur-[140px]" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#F5A623]/10 rounded-full blur-[140px]" />

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div
          ref={titleRef}
          className="text-center mb-20"
        >
          <motion.div
            className="flex items-center justify-center gap-3 mb-5"
            initial={{ opacity: 0 }}
            animate={titleInView ? { opacity: 1 } : {}}
          >
            <div className="w-12 h-px bg-[#F5A623]" />

            <span className="text-[#F5A623] text-xs tracking-[0.35em] uppercase">
              Brand Journey
            </span>

            <div className="w-12 h-px bg-[#F5A623]" />
          </motion.div>

          <motion.h2
            className="text-5xl md:text-7xl font-bold text-white leading-[1.05]"
            initial={{ opacity: 0, y: 40 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            Recognition,
            <br />
            <span className="text-[#F5A623]">
              Exhibitions &
            </span>
            <br />
            Growth Stories
          </motion.h2>

          <motion.p
            className="max-w-4xl mx-auto mt-8 text-white/65 text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              delay: 0.2,
            }}
          >
            From industry recognitions and award ceremonies to exhibitions,
            franchise showcases and customer engagement events, these moments
            represent Cocotang's journey towards building India's natural
            refreshment movement.
          </motion.p>
        </div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
          }}
        >
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 180,
              modifier: 2,
              scale: 0.85,
              slideShadows: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[
              EffectCoverflow,
              Autoplay,
              Pagination,
            ]}
            className="pb-16"
          >
            {galleryItems.map((item) => (
              <SwiperSlide
                key={item.id}
                className="!w-[320px] md:!w-[420px]"
              >
                <div className="relative overflow-hidden rounded-[36px] group border border-white/10 bg-[#181818]">

                  <img
                    src={item.src}
                    alt={`Cocotang Event ${item.id}`}
                    className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" /> */}

                  {/* Bottom Content */}
                  {/* <div className="absolute bottom-0 left-0 right-0 p-8">

                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-px bg-[#F5A623]" />

                      <span className="text-[#F5A623] text-xs tracking-[0.35em] uppercase">
                        Cocotang India
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white">
                      Award & Exhibition Showcase
                    </h3>

                    <p className="text-white/60 mt-3 leading-relaxed">
                      Celebrating milestones, partnerships, exhibitions and
                      memorable moments from the Cocotang journey.
                    </p>
                  </div> */}

                  {/* Floating Badge */}
                  {/* <div className="absolute top-6 right-6 w-14 h-14 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 flex items-center justify-center text-2xl">
                    🏆
                  </div> */}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">

          <div className="bg-[#181818] border border-white/10 rounded-3xl p-8 text-center">
            <h3 className="text-5xl font-bold text-[#F5A623]">
              19+
            </h3>

            <p className="text-white/60 mt-3">
              Events & Exhibitions
            </p>
          </div>

          <div className="bg-[#181818] border border-white/10 rounded-3xl p-8 text-center">
            <h3 className="text-5xl font-bold text-[#F5A623]">
              1000+
            </h3>

            <p className="text-white/60 mt-3">
              Customer Interactions
            </p>
          </div>

          <div className="bg-[#181818] border border-white/10 rounded-3xl p-8 text-center">
            <h3 className="text-5xl font-bold text-[#F5A623]">
              Pan
            </h3>

            <p className="text-white/60 mt-3">
              India Expansion Vision
            </p>
          </div>

          <div className="bg-[#181818] border border-white/10 rounded-3xl p-8 text-center">
            <h3 className="text-5xl font-bold text-[#F5A623]">
              ∞
            </h3>

            <p className="text-white/60 mt-3">
              Growth Potential
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}