import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <>
      <div className="fixed w-full bg-black/90 backdrop-blur text-white p-8 flex items-center uppercase z-50">
        <span className="font-bold text-2xl flex-1 race select-none">Celesta</span>
        <span className="flex gap-6 items-center">
          <Link href="/"><span className="cursor-pointer hover:translate-x-[-3px] hover:text-gray-400 transition">Home</span></Link>
          <Link href="/events"><span className="cursor-pointer hover:translate-x-[-3px] hover:text-gray-400 transition">Events</span></Link>
          <Link href="/sponsors"><span className="cursor-pointer hover:translate-x-[-3px] hover:text-gray-400 transition">Sponsors</span></Link>
          <Link href="/login"><button className="uppercase text-sm tracking-wide px-6 py-2 rounded-lg bg-teal-600 hover:bg-teal-800 transition outline-none">Login</button></Link>
          <Link href="/register"><button className="uppercase text-sm tracking-wide px-6 py-2 rounded-lg border-2 border-teal-600 hover:bg-teal-700 transition outline-none">Register</button></Link>

        </span>
      </div>
    </>
  )
}
