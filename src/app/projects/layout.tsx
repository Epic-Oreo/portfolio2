const ProjectsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full flex flex-col px-5 pt-6 md:px-16 md:pt-10">
      <div className="relative">
        <div className="ml-10 h-10 sm:ml-14 sm:h-14 md:ml-16 md:h-16 w-px bg-foreground flex items-center">
          <p className="ml-2 text-3xl sm:text-4xl md:text-5xl font-bold">Projects</p>
        </div>
        <div className="w-full bg-foreground h-px"></div>
      </div>
      <div className="pl-14 py-6 sm:pl-[4.5rem] sm:py-8 md:pl-20 md:py-10 relative">
        <div className="h-full absolute left-10 sm:left-14 md:left-16 top-0 bg-foreground w-px"></div>
        {children}
      </div>
    </div>
  );
};

export default ProjectsLayout;
