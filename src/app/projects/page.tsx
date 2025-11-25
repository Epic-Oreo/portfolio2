"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronDown, MouseIcon } from "lucide-react";

const sectionHeight = 600;

const cards = [
  {
    title: "Apex",
    description:
      "Apex was a fake store page I made in 2023. I used it to learn all kinds of things like animations and tailwind while I was still learning. It was a very fun project and still one of the best looking projects I have made even though its just a simple home page. The reason I like it so much is because it has a very solid theme, and the animations are very smooth.",
    image: "/apex/s1.png",
    url: "https://apex-wheat.vercel.app/",
  },
  {
    title: "Cooke Utils",
    description:
      "CookieUtils was a python package I created and published in my freshman year of highschool. It was made because I was tired of rewriting the same code for every project I made and wanted a way to condense the tools I used into one package. It was my first experience with any kind of package development and I had a lot of fun making it and learning about package development.",
    image: "/cookieUtils/s1.png",
    url: "https://pypi.org/project/cookieutils/",
  },
  {
    title: "ObsidianRide",
    description:
      "  ObsidianRide is a black-car ride scheduling service I started work on for a client in 2023. Its built on NextJS, Firebase, and Capacitor. It's been live since the summer of 2024. It has accounts, drivers, a backend office dashboard, analytics, ride management, and more.",
    image: "/obsidian/s1.png",
    url: "https://obsidianride.com",
  },
  {
    title: "This Portfolio",
    description:
      "I had tried to make a portfolio on a few other occasions but never really liked the way it looked. I had a view in my mind on the way I wanted it to look and this website I think captures it pretty well",
    image: "/portfolio/s1.png",
    url: "https://github.com/Epic-Oreo/portfolio2",
  },
];

const Page = () => {
  const [cardWidth, setCardWidth] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);
  const [scrolled, setScrolled] = useState<boolean>(false)
  const cardWrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      }
      const section = Math.floor(window.scrollY / sectionHeight);
      setCurrentSection(section);
    });

    addEventListener("resize", () => {
      const w = cardWrapperRef.current?.children[0].clientWidth;
      if (!w) return;
      setCardWidth(w);
    });

    const w = cardWrapperRef.current?.children[0].clientWidth;
    if (!w) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCardWidth(w);
  }, []);

  return (
    <div
      style={{
        height: `calc(100vh + ${sectionHeight - 1}px + (${
          cards.length - 1
        } * ${sectionHeight}px))`,
      }}
    >
      <div
        className={`sticky top-1/2 -translate-y-1/2 h-max w-full min-w-full p-4 overflow-hidden translate-x`}
      >
        <div
          className={`flex w-full duration-500 ease-out`}
          style={{
            transform: `translateX(${currentSection * cardWidth * -1}px)`,
          }}
          ref={cardWrapperRef}
        >
          {cards.map((card, i) => {
            return (
              <div key={i} className="p-4 h-96 w-full flex-none">
                <div
                  className="border w-full h-full p-5 flex gap-3 duration-300"
                  style={{
                    scale: currentSection == i ? "100%" : "50%",
                  }}
                >
                  <Image
                    src={card.image}
                    alt={`${card.title} image`}
                    width={300}
                    height={300}
                    className="h-full aspect-square object-cover rounded-lg border-2 border-white/30"
                  />
                  <div className="flex flex-col justify-between">
                    <div>
                      <h2 className="text-4xl font-semibold mb-2">{card.title}</h2>
                      <p>{card.description}</p>
                    </div>
                    <div className="">
                      <Link href={card.url} className="underline text-lg ml-3">Open Project</Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex w-full justify-center gap-4">
          {cards.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded duration-200 ${
                i == currentSection ? "bg-white" : "bg-white/10"
              }`}
            ></div>
          ))}
        </div>
      </div>
      
      {!scrolled && (
        <div className="fixed left-1/2 -translate-x-1/2 bottom-10 flex flex-col items-center">
          <div className="h-14 w-8 border-2 rounded-full relative">
            <div className="w-1 h-3 bg-white rounded-full absolute left-1/2 -translate-x-1/2 top-2 animate-pulseDown"></div>
          </div>
        </div>
      )}
    </div>
  );
};

// const Page = () => {
//   return (
//     <div className="w-full flex flex-col px-5 pt-6 md:px-16 md:pt-10">
//       <div className="relative">
//         <div className="ml-10 h-10 sm:ml-14 sm:h-14 md:ml-16 md:h-16 w-px bg-foreground flex items-center">
//           <p className="ml-2 text-3xl sm:text-4xl md:text-5xl font-bold">
//             Projects
//           </p>
//           <Link
//             href="/"
//             className="absolute top-1/2 -translate-y-1/2 left-1 md:left-2 size-8 md:size-12 p-1 rounded-full flex items-center justify-center "
//           >
//             <ChevronLeft className="w-full h-full" />
//           </Link>
//         </div>
//         <div className="w-full bg-foreground h-px"></div>
//       </div>
//       <div className="pl-14 py-6 sm:pl-18 sm:py-8 md:pl-20 md:py-10 relative">
//         <div className="h-full absolute left-10 sm:left-14 md:left-16 top-0 bg-foreground w-px"></div>

//         <div className="flex flex-col gap-10 md:gap-20 pb-10 max-w-7xl  ">
//           <ObsidianRideCard />
//           <ApexCard />
//           <PortfolioCard />
//           <CookieUtilsCard />
//         </div>
//       </div>
//     </div>
//   );
// };

export default Page;
