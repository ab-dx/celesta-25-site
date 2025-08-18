'use client';
import Image from "next/image";
import styles from "./Home.module.css"
import { ArrowDown } from "lucide-react";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PerformerCard from "@/components/performer_card";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const fadeRef = useRef(null);

  useEffect(() => {
    gsap.from(fadeRef.current, {
      y: 30,
      duration: 1,
      ease: "power2.out",
    });
    gsap.to(fadeRef.current, {
      y: -30,
      duration: 1,
      ease: "power2.out",
    });
  }, []);

  const performers = [
    {
      image: '/images/performer.jpg',
      name: 'Performer 1',
      desc: 'Nice performance'
    },
    {
      image: '/images/performer.jpg',
      name: 'Performer 2',
      desc: 'Nice performance'
    }
  ]

  return (
    <div className={`flex flex-col justify-center items-center ${styles.background}`}>
      <section className="flex h-[90vh] justify-center items-center">
        <Image className="translate-y-[30px]" ref={fadeRef} src="/images/banner-logo.png" alt="banner-logo" width={1000} height={500} />
      </section>
      <ArrowDown className="text-white animate-bounce" />
      <section className="flex flex-col gap-8 my-20 justify-center items-center w-[80vw]">
        <h1 className="text-white font-bold text-6xl state-wide mb-20">Past Performers</h1>
        {performers.map((performer, idx) =>
          <PerformerCard idx={idx} key={idx} performer={performer} />
        )}
      </section>
      <section className="flex flex-col gap-8 my-20 justify-center items-center w-[80vw]">
        <h1 className="text-white font-bold text-6xl state-wide mb-20">Events</h1>
      </section>
    </div>
  );
}
