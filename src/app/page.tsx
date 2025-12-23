import Link from "next/link";
import Carousel from "./carousel";
import { ArrowRight } from "lucide-react";
import DesktopContainer from "./desktopContainer";
import MobileContainer from "./mobileContainer";

export const ReplitIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Replit</title>
    <path d="M2 1.5A1.5 1.5 0 0 1 3.5 0h7A1.5 1.5 0 0 1 12 1.5V8H3.5A1.5 1.5 0 0 1 2 6.5ZM12 8h8.5A1.5 1.5 0 0 1 22 9.5v5a1.5 1.5 0 0 1-1.5 1.5H12ZM2 17.5A1.5 1.5 0 0 1 3.5 16H12v6.5a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 2 22.5Z" />
  </svg>
);

export const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>GitHub</title>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const Home = () => {
  return (
    <div className="flex w-full h-full md:flex-row flex-col gap-4">
      <div className="h-full w-full shrink flex flex-col justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-5xl">Oskar Laing</h1>
          <p className="text-xl">A full stack developer</p>

          <p className="mt-5">
            I am a 1,000,000x developer. I code and stuff, check out my projects
          </p>

          <div className="flex ">
            <Link
              href={"/projects"}
              className="text-foreground border-foreground border rounded-lg py-1 px-4 w-max mt-2 mx-1 hover:mx-0 group hover:px-5 duration-200 flex items-center gap-1"
            >
              Projects
              <ArrowRight className="size-5 duration-200 group-hover:translate-x-2" />
            </Link>
            <div className="flex gap-2 ml-2">
              <Link
                href="https://github.com/Epic-Oreo"
                title="Github"
                className="text-foreground border-foreground border rounded-lg py-1 px-4 w-max mt-2 mx-1 hover:mx-0 group hover:px-5 duration-200 flex items-center gap-1"
              >
                <GithubIcon className="w-4 h-4 fill-white" />
              </Link>
              <Link
                className="text-foreground border-foreground border rounded-lg py-1 px-4 w-max mt-2 mx-1 hover:mx-0 group hover:px-5 duration-200 flex items-center gap-1"
                href="https://replit.com/@EpicOreo"
                title="Replit"
              >
                <ReplitIcon className="w-4 h-4 fill-white" />
              </Link>
            </div>
          </div>
        </div>
        <div className="px-2 pb-1 shrink">
          <Carousel
            items={[
              "TypeScript",
              "NextJS",
              "Python",
              "NumPy",
              "Tensorflow",
              "Tailwind",
              "Lua",
              "C#",
              "Css",
              "Pandas",
              "C++",
            ]}
            className=""
          />
        </div>
      </div>

      {/* <SideBar /> */}
    </div>
  );
};

const Changer = () => {
  return (
    <>
      <DesktopContainer>
        <Home />
      </DesktopContainer>
      <MobileContainer>
        <Home />
      </MobileContainer>
    </>
  );
};

export default Changer;
