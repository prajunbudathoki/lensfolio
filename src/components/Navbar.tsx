import {
  ChevronLeft,
  ChevronRight,
  Heart,
  MapPin,
  MenuIcon,
  Search,
  X,
} from "lucide-react"
import Container from "./Container"
import { useRef, useState } from "react"
import { Link } from "@tanstack/react-router"
import { motion, AnimatePresence } from "motion/react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <header className="absolute top-0 z-40 w-full bg-transparent text-white">
      <Container className="relative z-50">
        <div className="flex h-22 items-center justify-between px-2 py-4">
          {/* left nav side*/}
          <div
            className="flex cursor-pointer items-center gap-2 transition-opacity hover:opacity-80"
            onClick={toggleMenu}
          >
            <motion.div
              key={isMenuOpen ? "close" : "menu"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? (
                <X className="size-6" />
              ) : (
                <MenuIcon className="size-6" />
              )}
            </motion.div>
            <AnimatePresence mode="wait">
              <motion.span
                key={isMenuOpen ? "close-text" : "menu-text"}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="text-sm font-medium"
              >
                {isMenuOpen ? "Close" : "Menu"}
              </motion.span>
            </AnimatePresence>
          </div>
          {/* center logo */}
          <div className="absolute left-1/2 -translate-x-1/2 transform">
            <img src="/logo.png" alt="logo" className="h-8 object-contain" />
          </div>
          {/* right nav side*/}
          <div className="flex items-center gap-6">
            <Search className="size-5 cursor-pointer transition-opacity hover:opacity-80" />
            <MapPin className="size-5 cursor-pointer transition-opacity hover:opacity-80" />
            <Heart className="size-5 cursor-pointer transition-opacity hover:opacity-80" />
          </div>
        </div>
      </Container>

      {/* overlay*/}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col bg-black/60 backdrop-blur-xl md:flex-row"
          >
            {/* navigation links */}
            <div className="mt-20 flex flex-1 flex-col py-10 md:px-24">
              <nav className="flex flex-col gap-6 font-bold tracking-tight md:text-7xl">
                <Link
                  to="/"
                  className="w-fit transition-all hover:translate-x-4 hover:text-green-400"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
                <Link
                  to="/"
                  className="w-fit transition-all hover:translate-x-4 hover:text-green-400"
                  onClick={toggleMenu}
                >
                  Services
                </Link>
                <Link
                  to="/"
                  className="w-fit transition-all hover:translate-x-4 hover:text-green-400"
                  onClick={toggleMenu}
                >
                  Gallery
                </Link>
                <Link
                  to="/"
                  className="w-fit transition-all hover:translate-x-4 hover:text-green-400"
                  onClick={toggleMenu}
                >
                  About Us
                </Link>
              </nav>
            </div>
            {/* right nav image section */}
            <div className="relative hidden flex-1 overflow-hidden py-16 text-white md:block">
              <div className="mt-20 flex items-center justify-between px-10">
                <h1 className="mb-5 text-xl font-semibold tracking-tight md:text-5xl">
                  Captured Moments
                </h1>
                <div className="flex gap-2">
                  <button
                    onClick={() => scroll("left")}
                    className="rounded-full border border-white/20 p-2 transition-colors hover:bg-white/10"
                  >
                    <ChevronLeft className="size-5" />
                  </button>
                  <button
                    onClick={() => scroll("right")}
                    className="rounded-full border border-white/20 p-2 transition-colors hover:bg-white/10"
                  >
                    <ChevronRight className="size-5" />
                  </button>
                </div>
              </div>
              <div
                ref={scrollContainerRef}
                className="scrollbar-hide flex gap-6 overflow-x-auto px-10 pb-4"
              >
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="group w-72 flex-none cursor-pointer">
                    <div className="overflow-hidden rounded-md border border-white/10 shadow-2xl">
                      <img
                        src="/nav-bg.png"
                        alt={`Captured Moment ${i}`}
                        className="h-80 w-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
                      />
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <p className="text-sm font-medium tracking-wide text-gray-200 uppercase">
                        Moment {i}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
