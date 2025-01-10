

const MobileContainer = ({
  children,
}: {
  children: React.ReactNode
}) => {

  return (
    <div className="sw-screen h-screen justify-center items-center flex md:hidden p-4">
      <div
        id="custom-grid-size-mobile"
        className="max-w-4xl w-full h-[26rem] bg-gradient-to-br from-slate-200 to-slate-400 grid gap-[1px]"
      >
        <div className="bg-background"></div>
        <div className="width-col-span-mobile bg-background"></div>
        <div className="bg-background"></div>
        <div className="bg-background row-span-10"></div>

        <div className="width-col-span-mobile row-span-10 p-4 bg-background flex">
          {children}
        </div>

        <div className="bg-background row-span-10"></div>
        <div className="bg-background"></div>
        <div className="width-col-span-mobile bg-background"></div>
        <div className="bg-background"></div>
      </div>
    </div>
  )
}

export default MobileContainer;