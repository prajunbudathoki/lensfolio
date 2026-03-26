import { createFileRoute } from "@tanstack/react-router"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"

export const Route = createFileRoute("/")({ component: App })

function App() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <About />
    </main>
  )
}
