'use client';


import { Button } from '@/components/ui/button';


export default function TopBar() {
  return (
    <div className="w-full px-4 md:px-8 py-2 sticky z-50 top-0 shadow-sm border-b flex flex-row justify-between items-center  bg-slate-300 ">
      <div className=" font-bold flex  items-center ">
        <h1 className='text-xl text-blue-700 md:text-3xl'>CCTCA</h1></div>
      <div className=" flex flex-row flex-wrap justify-center items-center gap-1.5">
        <a href="#home">
          <Button className="font-bold md:text-2xl p-1 border-2 border-slate-400 hover:bg-slate-400" variant="ghost">Home</Button>
        </a>
        <a href="#about">
          <Button className="font-bold p-1 md:text-2xl border-2 border-slate-400 hover:bg-slate-400 " variant="ghost">About</Button>
        </a>
        <a href="#programs">
          <Button className="font-bold p-1 md:text-2xl border-2 border-slate-400 hover:bg-slate-400" variant="ghost">Programs</Button>
        </a>
        <a href="#contact">
          <Button className="font-bold p-1 md:text-2xl border-2 border-slate-400 hover:bg-slate-400" variant="ghost">Contact</Button>
        </a>
      </div>
    </div>
  );
}