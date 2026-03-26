import Container from "@/components/Container"
import { createFileRoute } from "@tanstack/react-router"
import { ArrowUpRight } from "lucide-react"
import { motion } from "motion/react"

interface PhotosAlbumProps {
  title: string
  description: string
  images: string[]
}

const photosAlbum: PhotosAlbumProps[] = [
  {
    title: "Elegant Moments",
    description: "Portrait Photography",
    images: [
      "/photos/image.png",
      "/photos/image.png",
      "/photos/image.png",
      "/photos/image.png",
      "/photos/image.png",
      "/photos/image.png",
    ],
  },
  {
    title: "The Big Day",
    description: "Event Photography",
    images: [
      "/photos/image2.png",
      "/photos/image2.png",
      "/photos/image2.png",
      "/photos/image2.png",
      "/photos/image2.png",
      "/photos/image2.png",
    ],
  },
  {
    title: "Urban Rhythms",
    description: "Street Photography",
    images: [
      "/photos/image3.png",
      "/photos/image3.png",
      "/photos/image3.png",
      "/photos/image3.png",
      "/photos/image3.png",
      "/photos/image3.png",
    ],
  },
  {
    title: "Monochrome Emotions",
    description: "Black and White Photography",
    images: [
      "/photos/image4.png",
      "/photos/image4.png",
      "/photos/image4.png",
      "/photos/image4.png",
      "/photos/image4.png",
      "/photos/image4.png",
    ],
  },
]

export const Route = createFileRoute("/photos/")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <section className="min-h-screen bg-black text-white">
      {/* title */}
      <Container>
        <div className="flex min-h-[calc(100vh-100px)] items-center justify-center px-4">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-center text-6xl font-semibold tracking-tighter uppercase sm:text-7xl md:text-8xl lg:text-[9rem]"
          >
            All Photos
          </motion.h1>
        </div>
      </Container>

      {/* album section */}
      <Container>
        <div className="space-y-48 pb-32">
          {photosAlbum.map((album, index) => (
            <motion.div
              key={album.title}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="group grid grid-cols-1 items-start gap-12 border-t border-white/10 pt-16 lg:grid-cols-12"
            >
              <div className="lg:sticky lg:top-32 lg:col-span-4">
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="mb-4 text-xs tracking-[0.3em] text-white/50 uppercase"
                >
                  {album.description}
                </motion.p>
                <motion.h2
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl font-semibold tracking-tight md:text-6xl"
                >
                  {album.title}
                </motion.h2>
                <motion.button
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="mt-10 flex cursor-pointer items-center gap-3 text-sm tracking-[0.2em] text-white/60 uppercase transition-all duration-500 hover:tracking-[0.3em] hover:text-white"
                >
                  Explore Collection
                  <ArrowUpRight className="size-4" />
                </motion.button>
              </div>
              {/* photo collection */}
              <div className="lg:col-span-8">
                <AlbumCollage images={album.images} reverse={index % 2 !== 0} />
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

function AlbumCollage({
  images,
  reverse = false,
}: {
  images: string[]
  reverse?: boolean
}) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.4,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, x: -30 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={`grid auto-rows-[160px] grid-cols-2 gap-4 md:auto-rows-[220px] md:grid-cols-4 ${
        reverse ? "lg:[direction:rtl]" : ""
      }`}
    >
      <motion.div
        variants={item}
        className="col-span-2 row-span-2 overflow-hidden rounded-2xl bg-neutral-900 md:col-span-2 md:row-span-3"
      >
        <img
          src={images[0]}
          alt="Album featured"
          className="h-full w-full object-cover transition-transform duration-1000 hover:scale-110"
        />
      </motion.div>
      <motion.div
        variants={item}
        className="overflow-hidden rounded-2xl bg-neutral-900"
      >
        <img
          src={images[1]}
          alt="Album image"
          className="h-full w-full object-cover transition-transform duration-1000 hover:scale-110"
        />
      </motion.div>
      <motion.div
        variants={item}
        className="overflow-hidden rounded-2xl bg-neutral-900"
      >
        <img
          src={images[2]}
          alt="Album image"
          className="h-full w-full object-cover transition-transform duration-1000 hover:scale-110"
        />
      </motion.div>
      <motion.div
        variants={item}
        className="col-span-2 overflow-hidden rounded-2xl bg-neutral-900 md:col-span-2"
      >
        <img
          src={images[3]}
          alt="Album image"
          className="h-full w-full object-cover transition-transform duration-1000 hover:scale-110"
        />
      </motion.div>
      <motion.div
        variants={item}
        className="overflow-hidden rounded-2xl bg-neutral-900"
      >
        <img
          src={images[4]}
          alt="Album image"
          className="h-full w-full object-cover transition-transform duration-1000 hover:scale-110"
        />
      </motion.div>
      <motion.div
        variants={item}
        className="overflow-hidden rounded-2xl bg-neutral-900"
      >
        <img
          src={images[5]}
          alt="Album image"
          className="h-full w-full object-cover transition-transform duration-1000 hover:scale-110"
        />
      </motion.div>
    </motion.div>
  )
}
