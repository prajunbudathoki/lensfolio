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
    <header className="sticky top-0 z-40 w-full bg-green-800 text-white">
      <Container>
        <div className="flex h-22 items-center justify-between px-2 py-4">
          {/* left nav side*/}
          <div
            className="flex cursor-pointer items-center gap-2 transition-opacity hover:opacity-80"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="size-6" />
            ) : (
              <MenuIcon className="size-6" />
            )}
            <span className="text-sm font-medium">
              {isMenuOpen ? "Close" : "Menu"}
            </span>
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
      {isMenuOpen && (
        <div
          className={`flex h-screen flex-col bg-green-100 transition-all duration-500 ease-in-out md:flex-row ${
            isMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          }`}
        >
          {/* Left Side: Navigation Links */}
          <div className="flex flex-1 flex-col py-10 md:px-24">
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
          <div className="relative hidden flex-1 overflow-hidden bg-green-800 py-16 text-white md:block">
            <div className="mb-10 flex items-center justify-between px-10">
              <h1 className="text-xl font-semibold tracking-tight md:text-5xl">
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
        </div>
      )}
    </header>
  )
}

export default Navbar
