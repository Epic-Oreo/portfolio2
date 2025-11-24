

const DesktopContainer = ({
  children,
}: {
  children: React.ReactNode
}) => {

  return (
    <div className="sw-screen h-screen justify-center items-center hidden md:flex p-4">
      <div
        id="custom-grid-size"
        className="max-w-4xl w-full h-96 bg-linear-to-br from-slate-200 to-slate-400 grid gap-px"
      >
        <div className="bg-background"></div>
        <div className="width-col-span bg-background"></div>
        <div className="bg-background"></div>
        <div className="bg-background row-span-8"></div>

        <div className="width-col-span row-span-8 p-4 bg-background flex">
          {children}
        </div>

        <div className="bg-background row-span-8"></div>
        <div className="bg-background"></div>
        <div className="width-col-span bg-background"></div>
        <div className="bg-background"></div>
      </div>
    </div>
  )
}

export default DesktopContainer;