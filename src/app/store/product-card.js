import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ name, cost, img_src, register_link }) {
  return <>
    <div className="p-4 rounded-xl w-[28rem] transition hover:scale-105 shadow-xl flex flex-col">
      <Image src={img_src} alt="img" className="rounded-xl h-[32rem] brightness-50" width={500} height={200} />
      <div className="translate-y-[-12rem] gap-4 m-6">
        <h1 className="text-white uppercase text-4xl font-extrabold">{name}</h1>
        <h1 className="text-white uppercase text-2xl font-medium">Rs.{cost}</h1>
        {/*TODO: add qty picker */}
        <button className="px-2 py-1 mt-4 rounded-md border-2 border-white hover:bg-white hover:text-gray-800 transition uppercase tracking-[2px] text-md">Purchase</button>
      </div>
    </div>
  </>
}
