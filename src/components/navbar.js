import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <>
      <div className="fixed w-full bg-black/90 backdrop-blur text-white p-8 flex items-center uppercase">
        <span className="font-bold text-2xl flex-1 race">Celesta</span>
        <span className="flex gap-6 items-center">
          <span>Home</span>
          <span>Events</span>
          <span>Sponsors</span>
          <button className="uppercase text-sm tracking-wide px-6 py-2 rounded-lg bg-teal-600 outline-none">Login</button>
          <button className="uppercase text-sm tracking-wide px-6 py-2 rounded-lg border-2 border-teal-600 outline-none">Register</button>

        </span>
      </div>
    </>
  )
}
