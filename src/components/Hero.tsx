const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 h-full w-full object-cover"
      >
        <source src="/hero-banner.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/20" />{" "}
      <div className="relative z-10 flex h-full items-center justify-center px-4 text-center text-white">
        <div className="max-w-4xl">
          <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
            Welcome to Our Creative Crew
          </h1>
          <p className="mb-8 text-lg font-medium text-gray-200 md:text-xl">
            We capture moments and create stories that last forever.
          </p>
          <button className="rounded-full bg-white px-8 py-3 text-sm font-bold tracking-widest text-green-900 uppercase transition-all hover:bg-green-100">
            Explore Our Work
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
