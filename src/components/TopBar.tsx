'use client';


import { Button } from '@/components/ui/button';


export default function TopBar() {
  return (
    <div className="w-full px-4 md:px-8 py-2 sticky z-50 top-0 shadow-xl border-b flex flex-row justify-between items-center  bg-slate-400 ">
      <div className=" font-bold flex  items-center ">
        <div className="flex items-center">
          <a href="#home">
            <img
              src="/bitmap.png" // Replace with your actual logo path
              alt="CCTCA Logo"
              className="h-8 md:h-12 w-auto object-contain"
            />
          </a>
        </div></div>
      <div className=" flex flex-row flex-wrap justify-center items-center gap-1.5">
        <a href="#home">
          <Button className=" text-slate-700 font-bold md:text-2xl p-1  bg-slate-400 hover:bg-slate-500 " variant="ghost">Home</Button>
        </a>
        <a href="#about">
          <Button className=" text-slate-700 font-bold p-1 md:text-2xl  bg-slate-400 hover:bg-slate-500 " variant="ghost">About</Button>
        </a>
        <a href="#programs">
          <Button className=" text-slate-700 font-bold p-1 md:text-2xl  bg-slate-400 hover:bg-slate-500" variant="ghost">Programs</Button>
        </a>
        <a href="#contact">
          <Button className="text-slate-700 font-bold p-1 md:text-2xl  bg-slate-400 hover:bg-slate-500" variant="ghost">Contact</Button>
        </a>
      </div>
    </div>
  );
}