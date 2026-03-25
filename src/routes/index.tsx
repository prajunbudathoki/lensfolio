import { createFileRoute } from "@tanstack/react-router"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"

export const Route = createFileRoute("/")({ component: App })

function App() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
    </main>
  )
}
