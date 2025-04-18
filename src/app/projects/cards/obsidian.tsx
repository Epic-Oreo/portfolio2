import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ObsidianRideCard = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="flex flex-col">
        <h2 className="text-xl font-bold md:text-3xl">ObsidianRide</h2>
        <p>
          ObsidianRide is a black-car ride scheduling service I started work on
          for a client in 2023. Its built on NextJS, Firebase, and Capacitor.
          It's been live since the summer of 2024. It has accounts, drivers, a
          backend office dashboard, analytics, ride management, and more.
        </p>

        {/* <Link href="#" className="underline mt-4">
          Read More
        </Link> */}

        <div className="flex flex-col gap-2 mt-2">
          <h3 className="text-lg font-bold md:text-xl">Technologies</h3>
          <div className="flex flex-wrap gap-2">
            <span className="bg-foreground opacity-80 text-background rounded-full px-2 text-sm">
              NextJS
            </span>
            <span className="bg-foreground opacity-80 text-background rounded-full px-2 text-sm">
              Firebase
            </span>
            <span className="bg-foreground opacity-80 text-background rounded-full px-2 text-sm">
              Capacitor
            </span>
          </div>
        </div>
      </div>
      <Link
        href={"https://obsidianride.com"}
        target="_blank"
        className="w-64 h-64 bg-background flex-shrink-0 rounded-lg relative group cursor-pointer
        after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-foreground after:opacity-5 after:blur-xl after:-z-10
      "
      >
        <Image
          src={"/obsidian/s1.png"}
          width={200}
          height={200}
          className="w-full h-full object-cover rounded-lg overflow-hidden"
          alt="obsidian ride image"
        />

        <div className="opacity-100 group-hover:opacity-0 duration-200 absolute -bottom-7 left-2 flex flex-col bg-background/50 px-2 items-center justify-center rounded-lg">
          <p className="text-foreground">Visit Site</p>
        </div>

        <div className="opacity-0 group-hover:opacity-100 duration-200 absolute top-0 left-0 w-full h-full bg-black/40 flex flex-col items-center justify-center rounded-lg">
          <ExternalLink className="size-10 text-foreground duration-200 group-hover:translate-y-0 -translate-y-10" />
        </div>
      </Link>

      <div className="w-full h-px mt-6 px-2 block md:hidden">
        <div className="w-full h-full bg-foreground opacity-30  "></div>
      </div>
    </div>
  );
};

export default ObsidianRideCard;
