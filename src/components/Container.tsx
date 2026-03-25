const Container = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div
      className={`mx-auto sm:max-w-xl md:max-w-3xl lg:max-w-7xl ${className}`}
    >
      {children}
    </div>
  )
}
export default Container
