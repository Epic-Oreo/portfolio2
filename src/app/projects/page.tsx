"use client";
import ApexCard from "./cards/apex";
import CookieUtilsCard from "./cards/cookieUtils";
import ObsidianRideCard from "./cards/obsidian";
import PortfolioCard from "./cards/portfolio";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { useEffect, useState } from "react";

const Page = () => {
  const [xPosition, setXPosition] = useState(0);

  useEffect(() => {
    addEventListener("scroll", () => {
      // console.log(window.scrollY, 384*3)
      setXPosition(-1*window.scrollY)

    });
  }, []);

  return (
    // Allows scrolling
    <div className="h-[calc(100vh+calc(3*24rem))]">
      <div
        className={`sticky top-0 h-max flex w-full min-w-full p-4 overflow-hidden gap-2 translate-x`}
        style={{
          // transform: `transform: translate(${xPosition}, 0)`
          // left: 100
        }}
      >
        <div className={`flex w-full translate-x-[${xPosition||0}px]`} style={{
          // transform: `translate(${xPosition}, 0) !important`
        }}>
          <div className="bg-red-500 h-96 w-full flex-none">
            {xPosition}
          </div>
          <div className="bg-green-500 h-96 w-full flex-none"></div>

          <div className="bg-blue-500 h-96 w-full flex-none"></div>
        </div>

      </div>
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
//       <div className="pl-14 py-6 sm:pl-[4.5rem] sm:py-8 md:pl-20 md:py-10 relative">
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
