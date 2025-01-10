import Link from "next/link";
import SideBar from "./sideBar";
import Carousel from "./carousel";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex w-full h-full md:flex-row flex-col justify-between gap-4">
      <div className="w-full h-full flex flex-col justify-between ">
        <div className="flex flex-col gap-1">
          <h1 className="text-5xl">Oskar Laing</h1>
          <p className="text-xl">A full stack developer</p>

          <p className="mt-5">
            I am committed to learning and growing as a developer. I am
            currently working on ObsidianRide, a black-car ride scheduling
            service.
          </p>
          <Link 
            href={"/projects"}
            className="text-foreground border-foreground border rounded-lg py-1 px-4 w-max mt-2 mx-1 hover:mx-0 group hover:px-5 duration-200 flex items-center gap-1"
          >
            Projects
            <ArrowRight className="size-5 duration-200 group-hover:translate-x-2" />
          </Link>
        </div>
        <div className="px-2 pb-1">
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
            ]}
          />
        </div>
      </div>

      <SideBar />
    </div>
  );
}
