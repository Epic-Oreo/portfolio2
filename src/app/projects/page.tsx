
const Page = () => {
  return (
    <div className="flex flex-col pb-10">
      
      <div className="flex gap-4">
        <div>
          <h2 className="text-xl font-bold md:text-3xl">ObsidianRide</h2>
          <p>ObsidianRide is a black-car ride scheduling service I started work on for a client in 2023. Its built on NextJS, Firebase, and Capacitor. It's been live since the summer of 2024. It has accounts, drivers, a backend office dashboard, analytics, ride management, and more.</p>
          
          <div className="flex flex-col gap-2 mt-5">
            <h3 className="text-lg font-bold md:text-xl">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-foreground opacity-80 text-background rounded-full px-2 text-sm">NextJS</span>
              <span className="bg-foreground opacity-80 text-background rounded-full px-2 text-sm">Firebase</span>
              <span className="bg-foreground opacity-80 text-background rounded-full px-2 text-sm">Capacitor</span>
            </div>
          </div>
        </div>
        <div className="w-64 h-[22rem] bg-foreground flex-shrink-0 rounded-lg">

        </div>
      </div>
      {/* Obsidian Ride */}
    </div>
  );
}

export default Page;