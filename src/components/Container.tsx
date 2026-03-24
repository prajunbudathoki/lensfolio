const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto sm:max-w-xl md:max-w-3xl lg:max-w-7xl">
      {children}
    </div>
  )
}
export default Container
