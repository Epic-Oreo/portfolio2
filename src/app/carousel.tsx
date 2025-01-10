import { twMerge } from "tailwind-merge";

export default function Carousel({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {

  return (
    <div
      className={twMerge(
        `relative flex overflow-x-hidden w-full max-w-96 lg:max-w-none
      before:absolute before:left-0 before:h-full before:bg-gradient-to-l before:from-transparent before:to-background before:w-20 before:z-10
      after:absolute after:right-0 after:h-full after:bg-gradient-to-r after:from-transparent after:to-background after:w-20 after:z-10
    `,
        className
      )}
    >
      <div className="animate-marquee whitespace-nowrap">
        {items.map((item, index) => (
          <span key={index} className={"mx-4 font-bold "}>
            {item}
          </span>
        ))}
        {/* {items.map((item, index)=><span key={index} className={"mx-4 font-bold "}>{item}</span>)} */}
      </div>

      <div className="absolute top-0 animate-marquee2 whitespace-nowrap">
        {items.map((item, index) => (
          <span key={index} className={"mx-4 font-bold "}>
            {item}
          </span>
        ))}
        {/* {items.map((item, index)=><span key={index} className={"mx-4 font-bold "}>{item}</span>)} */}
      </div>
    </div>
  );
}
