export default function Home() {
  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <div
        id="custom-grid-size"
        className="max-w-4xl w-full h-96 bg-red-500 grid gap-[1px]"
      >
        <div className="bg-background"></div>
        <div className="width-col-span bg-background"></div>
        <div className="bg-background"></div>
        <div className="bg-background row-span-8"></div>

        <div className="width-col-span row-span-8 p-4">
          <p>Content</p>
        </div>

        <div className="bg-background row-span-8"></div>
        <div className="bg-background"></div>
        <div className="width-col-span bg-background"></div>
        <div className="bg-background"></div>
      </div>
    </div>
  );
}
