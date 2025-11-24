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
        `relative flex overflow-x-hidden w-full
      before:absolute before:left-0 before:h-full before:bg-linear-to-l before:from-transparent before:to-background before:w-20 before:z-10
      after:absolute after:right-0 after:h-full after:bg-linear-to-r after:from-transparent after:to-background after:w-20 after:z-10
    `,
        className
      )}
    >
      <div className="relative flex overflow-x-hidden">
        <div className="py-12 animate-marquee whitespace-nowrap">
          {items.map((item, index) => (
          <span key={index} className={"mx-4 font-bold "}>
            {item}
          </span>
        ))}
        </div>
        <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
          {items.map((item, index) => (
          <span key={index} className={"mx-4 font-bold "}>
            {item}
          </span>
        ))}
        </div>
      </div>
    </div>
  );
}
