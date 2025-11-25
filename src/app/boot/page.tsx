"use client"

import { useRef, useState } from "react";
import bootString from "./data";
import { useTimeout } from "usehooks-ts";

const BootPageTest = () => {
  const [lines, setLines] = useState<string[]>([]);


  async function runBoot() {
    // setLines((l)=>([...l, "test"]))


    const bsLines = bootString.split("\n")

    bsLines.forEach((line)=>{
      const delay = parseFloat(line.split("]", 1)[0].slice(1));
      setTimeout(()=>{
        setLines((l)=>([...l, line]))
      }, delay/10)
    })


  }


  return (
    <div className="p-4">

      <div className="p-3 bg-white/10 rounded-xl h-120 flex flex-col justify-end overflow-clip">
        {lines.map((line, i)=>(
          <p className="" key={i}>{line} + {i}</p>
        ))}
      </div>

      <button onClick={()=>runBoot()}>
        run
      </button>

    </div>
  )
}

export default BootPageTest;