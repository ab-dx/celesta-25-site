import Image from "next/image";
import Link from "next/link";

export default function EventCard({ name, img_src, register_link }) {
  return <>
    <div className="p-4 rounded-xl w-[28rem] transition hover:scale-105 shadow-xl">
      <Image src={img_src} alt="img" className="rounded-xl h-[32rem]" width={500} height={200} />
      <div className="translate-y-[-10rem] gap-4 m-6">
        <h1 className="text-white uppercase text-4xl font-extrabold">{name}</h1>
        <Link href={register_link}><button className="px-2 py-1 mt-4 rounded-md border-2 border-white hover:bg-white hover:text-gray-800 transition uppercase tracking-[2px] text-md">Register</button></Link>
      </div>
    </div>
  </>
}
