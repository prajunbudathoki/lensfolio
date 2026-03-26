import { ArrowDownLeft } from "lucide-react"
import { Card, CardContent } from "./ui/card"
import Container from "./Container"

const About = () => {
  return (
    <section className="bg-[#f3ede4] py-16">
      <Container>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          {/* left side*/}
          <Card className="rounded-2xl border border-black/10 bg-[#f3ede4] shadow-none lg:col-span-6">
            <div className="relative h-[500px] overflow-hidden">
              <img
                src="/about.jpg"
                alt="About"
                className="h-full w-full object-cover"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/30" />
              {/* left image content */}
              <div className="absolute inset-0 flex flex-col justify-between p-8 text-white">
                <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
                  About Me
                </h1>
                <div className="flex items-center gap-3 text-lg">
                  <ArrowDownLeft className="size-5" />
                  <span>Read more</span>
                </div>
              </div>
            </div>
          </Card>
          {/* right side*/}
          <div className="grid grid-cols-1 gap-4 lg:col-span-6 lg:grid-cols-2">
            <Card className="rounded-2xl border border-black/10 bg-[#f3ede4] shadow-none lg:row-span-2">
              <CardContent className="flex h-full flex-col justify-start p-8">
                <h2 className="mb-6 text-4xl font-semibold tracking-tight">
                  Sandesh
                </h2>
                <p className="text-lg leading-8 text-black/65">
                  A versatile designer crafting impactful digital experiences by
                  merging aesthetics with strategic functionality to help brands
                  excel online.
                </p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl border border-black/10 bg-[#f3ede4] shadow-none">
              <CardContent className="flex h-full flex-col justify-center p-8">
                <h3 className="text-5xl font-semibold tracking-tight">100+</h3>
                <p className="mt-3 text-sm text-black/70">
                  Successful Project Milestones
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border border-black/10 bg-[#f3ede4] shadow-none">
              <CardContent className="flex h-full flex-col justify-center p-8">
                <h3 className="text-5xl font-semibold tracking-tight">320+</h3>
                <p className="mt-3 text-sm text-black/70">
                  Creative Assets Delivered
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border border-black/10 bg-[#f3ede4] shadow-none lg:col-span-2">
              <CardContent className="flex h-full flex-col justify-center p-8">
                <h3 className="text-5xl font-semibold tracking-tight">90+</h3>
                <p className="mt-3 text-sm text-black/70">
                  Total Design Hours Logged
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default About
