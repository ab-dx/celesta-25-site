'use client';
import Image from "next/image";
import styles from "./Home.module.css";
import { ArrowDown } from "lucide-react";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Events from "./events/page";
import Workshop from "./workshop/page";
import SponsorsPage from "./spons/spons";
import SurrealGallery from "./gallery/gall";
import TeamsPage from "./team/page";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const fadeRef = useRef(null);

  // Performers data
  const performers = [
    {
      images: ['/images/artists/irfan_1.jpg', '/images/artists/irfan_2.jpg', '/images/artists/irfan_3.jpg'],
      name: 'Mohammed Irfan'
    },
    {
      images: ['/images/artists/bassi_1.jpg', '/images/artists/bassi_2.webp', '/images/artists/bassi_3.webp'],
      name: 'Anubhav Singh Bassi'
    },
    {
      images: ['/images/artists/kapoor_1.png', '/images/artists/kapoor_2.png', '/images/artists/kapoor_3.jpg'],
      name: 'Gaurav Kapoor'
    },
    {
      images: ['/images/artists/artist4-1.jpg', '/images/artists/artist4-2.jpg', '/images/artists/artist4-3.jpg'],
      name: 'Aaditya Kulshreshth'
    }
  ];

  // Fade-in sections on scroll
  useEffect(() => {
    gsap.utils.toArray(".reveal-section").forEach((section) => {
      gsap.fromTo(
        section,
        { autoAlpha: 0, y: 100 },
        {
          duration: 1,
          autoAlpha: 1,
          y: 0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  // Banner animation
  useEffect(() => {
    if (fadeRef.current) {
      gsap.fromTo(
        fadeRef.current,
        { y: 30, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 1.5, ease: "power2.out" }
      );
    }
  }, []);

  // Image slideshow
  useEffect(() => {
    const intervals = performers.map((performer, idx) => {
      let currentIndex = 0;
      let isAnimating = false;

      return setInterval(() => {
        if (isAnimating) return;

        const currentImg = document.querySelector(`#performer-${idx}-img-current`);
        const nextImg = document.querySelector(`#performer-${idx}-img-next`);

        if (currentImg && nextImg) {
          isAnimating = true;
          const nextIndex = (currentIndex + 1) % performer.images.length;
          const direction = idx % 2 === 0 ? 'right' : 'left';

          // Set next image offscreen
          nextImg.src = performer.images[nextIndex];
          nextImg.style.transition = 'none';
          nextImg.style.transform = direction === 'right' ? 'translateX(-100%)' : 'translateX(100%)';
          nextImg.style.zIndex = '2';

          // Force reflow
          nextImg.offsetHeight;

          // Animate transition
          requestAnimationFrame(() => {
            currentImg.style.transition = 'transform 1s ease-in-out';
            nextImg.style.transition = 'transform 1s ease-in-out';

            currentImg.style.transform = direction === 'right' ? 'translateX(100%)' : 'translateX(-100%)';
            nextImg.style.transform = 'translateX(0)';
            currentImg.style.zIndex = '1';
          });

          setTimeout(() => {
            currentImg.src = performer.images[nextIndex];
            currentImg.style.transition = 'none';
            currentImg.style.transform = 'translateX(0)';
            currentImg.style.zIndex = '2';
            nextImg.style.zIndex = '1';

            currentIndex = nextIndex;
            isAnimating = false;
          }, 1050);
        }
      }, 3000);
    });

    return () => intervals.forEach(interval => clearInterval(interval));
  }, [performers]);

  // Animate performer names sliding from left/right
  useEffect(() => {
    performers.forEach((performer, idx) => {
      const el = document.querySelector(`#performer-name-${idx}`);
      if (!el) return;

      const xOffset = idx % 2 === 0 ? -window.innerWidth : window.innerWidth;

      gsap.fromTo(
        el,
        { x: xOffset, autoAlpha: 0 },
        {
          x: 0,
          autoAlpha: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, [performers]);

  return (
    <div className="overflow-x-hidden w-full">
      {/* Banner Section */}
      <div className={`flex flex-col justify-center items-center ${styles.background}`}>
        <section className="flex h-[90vh] justify-center items-center w-full">
          <Image className="translate-y-[30px]" ref={fadeRef} src="/images/banner-logo.png" alt="banner-logo" width={1000} height={500} />
        </section>
        <ArrowDown className="text-white animate-bounce" />
      </div>

      {/* Performers Section */}
      <div className={`flex flex-col ${styles.background2} w-full`}>
        <h1 className="text-white font-bold text-6xl sm:text-5xl text-center my-20 reveal-section">
          Past Performers
        </h1>
        <div className="w-full">
          {performers.map((performer, idx) => (
            <div key={idx} className="relative w-full h-[500px] overflow-hidden reveal-section">
              {/* Slideshow */}
              <img
                id={`performer-${idx}-img-current`}
                className="absolute inset-0 w-full h-full object-cover"
                src={performer.images[0]}
                alt={performer.name}
                style={{ zIndex: 2 }}
              />
              <img
                id={`performer-${idx}-img-next`}
                className="absolute inset-0 w-full h-full object-cover"
                src={performer.images[0]}
                alt={performer.name}
                style={{ transform: 'translateX(100%)', zIndex: 1 }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 z-10" />

              {/* Artist Name */}
              <div className={`absolute inset-0 flex items-center z-20 px-4 sm:px-10 md:px-20 justify-${idx % 2 === 0 ? 'start' : 'end'}`}>
                <h2
                  id={`performer-name-${idx}`}
                  className="text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wider uppercase drop-shadow-2xl break-words"
                >
                  {performer.name}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Events Section */}
      <div className={`flex flex-col justify-center items-center ${styles.background} w-full`}>
        <section className="flex flex-col gap-8 justify-center items-center w-full reveal-section backdrop-brightness-50">
          <div className="w-full">
            <Events/>
          </div>
        </section>
      </div>

      <div className={`flex flex-col justify-center items-center ${styles.background} w-full`}>
        <section className="flex flex-col gap-8 justify-center items-center w-full reveal-section backdrop-brightness-50">
          <div>
            <SponsorsPage/>
          </div>
        </section>
      </div>

      <div className={`flex flex-col justify-center items-center ${styles.background} w-full`}>
        <section className="flex flex-col gap-8 justify-center items-center w-full reveal-section backdrop-brightness-50">
          <div className="w-full">
            <Workshop/>
          </div>
        </section>
      </div>

      <div className={`flex flex-col justify-center items-center ${styles.background} w-full`}>
        <section className="flex flex-col gap-8 justify-center items-center w-full reveal-section backdrop-brightness-50">
          <div className="w-full">
            <TeamsPage/>
          </div>
        </section>
      </div>

      <div className={`flex flex-col justify-center items-center ${styles.background} w-full`}>
        <section className="flex flex-col gap-8 justify-center items-center w-full reveal-section backdrop-brightness-50">
          <div className="w-full">
            <SurrealGallery/>
          </div>
        </section>
      </div>
    </div>
  );
}
