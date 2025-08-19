import Image from "next/image";

export default function PerformerCard({ performer, idx, className }) {
  if (idx % 2 == 0)
    return <article className={`bg-black/80 backdrop-blur rounded-lg flex w-full border border-transparent shadow-[4px_4px_8px_rgba(0,128,128,0.7)] ${className}`}>
      <Image src={performer.image} alt={performer.name} width={400} height={400} className="rounded" />
      <div className="flex-1 p-8 text-white">
        <h2 className="font-bold text-4xl uppercase tracking-wide shadow-sm shadow-teal-400 race text-left">{performer.name}</h2>
      </div>
    </article>
  else
    return <article className={`bg-black/80 backdrop-blur rounded-lg flex w-full border border-transparent shadow-[4px_4px_8px_rgba(128,0,128,0.7)] reveal-section`}>
      <div className="flex-1 p-8 text-white">
        <h2 className="font-bold text-4xl uppercase tracking-wide shadow-sm shadow-teal-400 race text-right">{performer.name}</h2>
      </div>
      <Image src={performer.image} alt={performer.name} width={400} height={400} className="rounded" />
    </article>

}
