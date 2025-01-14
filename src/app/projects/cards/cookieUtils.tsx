import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const CookieUtilsCard = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="flex flex-col">
        <h2 className="text-xl font-bold md:text-3xl">Cooke Utils</h2>
        <p>
          CookieUtils was a python package I created and published in my freshman year of highschool. It was made because I was tired of rewriting the same code for every project I made and wanted a way to condense the tools I used into one package. It was my first experience with any kind of package development and I had a lot of fun making it and learning about package development. 
        </p>

        {/* <Link href="#" className="underline mt-4">
          Read More
        </Link> */}

        <div className="flex flex-col gap-2 mt-2">
          <h3 className="text-lg font-bold md:text-xl">Technologies</h3>
          <div className="flex flex-wrap gap-2">
            <span className="bg-foreground opacity-80 text-background rounded-full px-2 text-sm">
              Python
            </span>
            <span className="bg-foreground opacity-80 text-background rounded-full px-2 text-sm">
              setuptools
            </span>
            {/* <span className="bg-foreground opacity-80 text-background rounded-full px-2 text-sm">
              Framer Motion (now Motion)
            </span> */}
          </div>
        </div>
      </div>
      <Link
        href={"https://pypi.org/project/cookieutils/"}
        target="_blank"
        className="w-64 h-64 bg-background flex-shrink-0 rounded-lg relative group cursor-pointer
        after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-foreground after:opacity-5 after:blur-xl after:-z-10
      "
      >
        <Image
          src={"/cookieUtils/s1.png"}
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

export default CookieUtilsCard;
