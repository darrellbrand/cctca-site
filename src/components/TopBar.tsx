'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';


export default function TopBar() {
  return (
    <div className="w-full px-6 py-4 shadow-sm border-b flex items-center justify-between">
      <div className="text-xl font-bold ">
        <h1 className='text-blue-500'>CCTCA</h1></div>
      <div className="space-x-4 font-bold">
        <Link href="/">
          <Button className="font-bold"variant="ghost">Home</Button>
        </Link>
        <Link href="/about">
          <Button className="font-bold" variant="ghost">About</Button>
        </Link>
        <Link href="/programs">
          <Button  className="font-bold" variant="ghost">Programs</Button>
        </Link>
        <Link href="/contact">
          <Button className="font-bold" variant="ghost">Contact</Button>
        </Link>
      </div>
    </div>
  );
}