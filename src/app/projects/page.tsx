"use client";
import { FullscreenIcon, SquareArrowOutUpRightIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const cards = [
  {
    title: "Apex",
    description:
      "Apex was a fake store page I made in 2023. I used it to learn all kinds of things like animations and tailwind while I was still learning. It was a very fun project and still one of the best looking projects I have made even though its just a simple home page. The reason I like it so much is because it has a very solid theme, and the animations are very smooth.",
    image: "/apex/s1.png",
    preImage: "/apex/s2.png",
    postImage: "/apex/s3.png",
    url: "https://apex-wheat.vercel.app/",
  },
  {
    title: "CookieTranslate",
    description:
      "Cookie Translate lorem",
    image: "/cookieTranslate/s1.png",
    preImage:  "",
    postImage: "",
    url: "https://obsidianride.com",
  },
  {
    title: "ObsidianRide",
    description:
      "  ObsidianRide is a black-car ride scheduling service I started work on for a client in 2023. Its built on NextJS, Firebase, and Capacitor. It's been live since the summer of 2024. It has accounts, drivers, a backend office dashboard, analytics, ride management, and more.",
    image: "/obsidian/s1.png",
    preImage:  "/apex/s3.png",
    postImage: "/apex/s3.png",
    url: "https://obsidianride.com",
  },
    {
    title: "Cooke Utils",
    description:
      "CookieUtils was a python package I created and published in my freshman year of highschool. It was made because I was tired of rewriting the same code for every project I made and wanted a way to condense the tools I used into one package. It was my first experience with any kind of package development and I had a lot of fun making it and learning about package development.",
    image: "/cookieUtils/s1.png",
    preImage:  "/apex/s3.png",
    postImage: "/apex/s3.png",
    url: "https://pypi.org/project/cookieutils/",
  },
  {
    title: "This Portfolio",
    description:
      "I had tried to make a portfolio on a few other occasions but never really liked the way it looked. I had a view in my mind on the way I wanted it to look and this website I think captures it pretty well",
    image: "/portfolio/s1.png",
    preImage:  "/apex/s3.png",
    postImage: "/apex/s3.png",
    url: "https://github.com/Epic-Oreo/portfolio2",
  },
];

const Page = () => {

  const isTouchCapable = () => {
    return ('ontouchstart' in window) || 
         (navigator.maxTouchPoints > 0) 
        //  (navigator.msMaxTouchPoints > 0);
  };


  const outerRef = useRef<null | HTMLDivElement>(null);
  const [isTouch, setIsTouch] = useState<boolean>(true);

  // const currentpercentRef 

  useEffect(() => {
    if (!outerRef.current) return;
    let isPressed = false;
    let currentPercent = 0;

    const totalScrollAmount =
        outerRef.current.scrollWidth - outerRef.current.clientWidth + 20;

    const updateMousePosition = (e: MouseEvent) => {
    if (!outerRef.current) return;
      if (isPressed == false) return;
      currentPercent += -e.movementX / (window.innerWidth * 0.8);

      if (currentPercent > 1) currentPercent = 1; // bounds
      if (currentPercent < 0) currentPercent = 0;

      outerRef.current.scrollLeft = totalScrollAmount * currentPercent;
    };

    const updateMouseDown = () => {
      isPressed = true;
    };

    const updateMouseUp = () => {
      isPressed = false;
    };

    
    if (!isTouchCapable()) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsTouch(false);
      window.addEventListener("mousemove", updateMousePosition);
      window.addEventListener("mousedown", updateMouseDown);
      window.addEventListener("mouseup", updateMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mousedown", updateMouseDown);
      window.removeEventListener("mouseup", updateMouseUp);
    };
  }, []);

  return (
    <div ref={outerRef} className="flex h-screen flex-col sm:flex-row gap-10 items-center overflow-scroll md:overflow-hidden scroll-smooth no-scrollbar px-5" onScrollEnd={(e)=>{

    }}>
      {cards.map((card, i) => {
        return (
          <div
              draggable={false}
            className="w-full md:w-120 shrink-0 select-none flex flex-col justify-center group overflow-x-hidden cursor-pointer"
            key={card.title}
          >

            {/* <div className="h-60 w-full overflow-hidden shadow-lg rounded-lg translate-y-[110%] group-hover:translate-y-0 duration-500 ease-out">
              <Image className="brightness-50 group-hover:brightness-80 duration-200 w-full h-full object-cover" src={card.preImage} alt="Hello" width={500} height={400} draggable={false}/>
            </div> */}


            <div className="h-80 grid w-full bg-white gap-px" id="custom-grid-size">
              <div className="bg-background"></div>
              <div className="width-col-span bg-background"></div>
              <div className="bg-background"></div>
              <div className="bg-background row-span-8"></div>



              <div className="width-col-span row-span-8 overflow-hidden bg-background z-20">
                <Image className="md:brightness-50 group-hover:brightness-80 duration-200 w-full h-full object-cover" src={card.image} alt="Hello" width={500} height={400} draggable={false}/>
              </div>

              <div className="bg-background row-span-8"></div>
              <div className="bg-background"></div>
              <div className="width-col-span bg-background overflow-hidden flex items-center px-2">
                <div className="flex sm:-translate-x-6 gap-1 group-hover:translate-x-0 duration-200 items-center">
                  <SquareArrowOutUpRightIcon className="w-4 h-4"/>
                  <h2 className="text-white/60 duration-200">{card.title}</h2>
                </div>
              </div>
              <div className="bg-background"></div>
            </div>
            
          </div>
        );
      })}
    </div>
  );
};

export default Page;
