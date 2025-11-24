"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const FancyButton = ({
  link,
  Icon,
  title,
  className,
  outside=false,
}: {
  link: string;
  outside: boolean;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  className?: string;
  title: string;
}) => {
  const textRef = useRef<HTMLDivElement>(null);
  const [leftAmount, setLeftPosition] = useState(0);

  useEffect(()=>{
    setLeftPosition((textRef.current?.clientWidth ?? 0) + 7)
  }, [textRef])

  return (
    <Link
      href={link}
      target={outside ? "_blank" : undefined}
      className={twMerge("group hover:rotate-12 bg-background border border-foreground relative rounded-lg p-2 text-background size-10 z-50  duration-200 fill-foreground flex justify-center items-center", className)}
    >
      <Icon className="duration-200 size-6" />

      <div
        ref={textRef}
        className={`
          hidden md:block absolute top-1/2 -translate-y-1/2 left-0 z-50 text-foreground opacity-0 group-hover:opacity-100 duration-200 group-hover:translate-x-0 translate-x-11
          before:w-full before:h-full before:bg-background before:top-0 before:-z-10 before:left-0 before:absolute before:blur-sm  
        `}
        style={{
          left: "-"+ leftAmount + "px"
        }}
      >
        {title}
      </div>
    </Link>
  );
};

export default FancyButton;
