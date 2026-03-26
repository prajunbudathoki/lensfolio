import { motion } from "motion/react"

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <motion.video
        autoPlay
        loop
        muted
        playsInline
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="absolute top-0 left-0 h-full w-full object-cover"
      >
        <source src="/hero-banner.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </motion.video>

      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 flex h-full items-center justify-center px-6 text-white md:px-12">
        <div className="grid w-full max-w-7xl grid-cols-1 gap-16 lg:grid-cols-12 lg:items-center">
          {/* left side */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="flex flex-col text-left lg:col-span-7"
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
              className="mb-6 flex items-center gap-4"
            >
              <div className="h-[2px] w-12 bg-white/40" />
              <span className="text-xs font-bold tracking-[0.3em] text-white/70 uppercase">
                Visual Narrative
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
              className="text-5xl leading-[1.1] font-bold tracking-tighter md:text-7xl lg:text-8xl"
            >
              Capturing the <br />
              <span className="bg-linear-to-r from-white to-gray-500 bg-clip-text text-transparent">
                unseen essence.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.9 }}
              className="mt-8 max-w-xl text-lg leading-relaxed font-medium text-gray-400 md:text-xl"
            >
              Photography isn’t just about control—it’s about the art of
              observation and the patience to wait for the soul of the moment to
              reveal itself.
            </motion.p>
          </motion.div>

          {/* right side*/}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 1.1 }}
            className="relative flex flex-col items-start lg:col-span-5 lg:items-end lg:text-right"
          >
            <div className="relative max-w-md">
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 1.3 }}
                className="absolute -top-16 -left-8 font-serif text-[12rem] leading-none text-white/10 italic select-none"
              >
                “
              </motion.span>

              <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 1.4 }}
                className="relative z-10 text-2xl leading-snug font-light text-gray-200 italic md:text-4xl"
              >
                The pauses, the glances, the quiet in between – that’s where the
                true story lives.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 1.6 }}
                className="mt-8 flex items-center gap-3 lg:justify-end"
              >
                <div className="h-px w-8 bg-gray-500" />
                <span className="text-sm font-medium tracking-widest text-gray-400 uppercase">
                  A Photography Philosophy
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Hero
