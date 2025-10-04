'use client';
import Image from "next/image";
import styles from "./Home.module.css"
import { ArrowDown } from "lucide-react";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const fadeRef = useRef(null);

  

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
          
          // Determine slide direction based on index
          const direction = idx % 2 === 0 ? 'right' : 'left';
          
          // Set next image source and position it off-screen
          nextImg.src = performer.images[nextIndex];
          nextImg.style.transition = 'none';
          nextImg.style.transform = direction === 'right' ? 'translateX(-100%)' : 'translateX(100%)';
          nextImg.style.zIndex = '2';
          
          // Force reflow
          nextImg.offsetHeight;
          
          // Enable transition and slide both images
          requestAnimationFrame(() => {
            currentImg.style.transition = 'transform 1000ms ease-in-out';
            nextImg.style.transition = 'transform 1000ms ease-in-out';
            
            currentImg.style.transform = direction === 'right' ? 'translateX(100%)' : 'translateX(-100%)';
            nextImg.style.transform = 'translateX(0)';
            currentImg.style.zIndex = '1';
          });
          
          // After animation completes, swap the images
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

  return (
    <>
      <div className={`flex flex-col justify-center items-center ${styles.background}`}>
        <section className="flex h-[90vh] justify-center items-center">
          <Image className="translate-y-[30px]" ref={fadeRef} src="/images/banner-logo.png" alt="banner-logo" width={1000} height={500} />
        </section>
        <ArrowDown className="text-white animate-bounce" />
      </div>
      
      <div className={`flex flex-col ${styles.background2}`}>
        <h1 className="text-white font-bold text-6xl state-wide text-center my-20 reveal-section">Past Performers</h1>
        <div className="w-full">
          {performers.map((performer, idx) => (
            <div key={idx} className="relative w-full h-[500px] overflow-hidden reveal-section">
              {/* Slideshow Background - Two images for smooth transition */}
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
              
              {/* Artist Name - Alternating sides */}
              <div className={`absolute inset-0 flex items-center z-20 ${idx % 2 === 0 ? 'justify-start pl-20' : 'justify-end pr-20'}`}>
                <h2 className="text-white font-bold text-6xl md:text-7xl tracking-wider uppercase drop-shadow-2xl">
                  {performer.name}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className={`flex flex-col justify-center items-center ${styles.background}`}>
        <section className="flex flex-col gap-8 my-20 justify-center items-center w-[75vw] reveal-section">
          <h1 className="text-white font-bold text-6xl state-wide mb-20">Events</h1>
        </section>
      </div>
    </>
  );
}



  // const performers = [
  //   {
  //     images: ['/images/artists/irfan_1.jpg', '/images/artists/irfan_2.jpg', '/images/artists/irfan_3.jpg'],
  //     name: 'Mohammed Irfan'
  //   },
  //   {
  //     images: ['/images/artists/bassi_1.jpg', '/images/artists/bassi_2.webp', '/images/artists/bassi_3.webp'],
  //     name: 'Anubhav Singh Bassi'
  //   },
  //   {
  //     images: ['/images/artists/kapoor_1.jpg', '/images/artists/kapoor_2.jpg', '/images/artists/kapoor_3.jpg'],
  //     name: 'Gaurav Kapoor'
  //   },
  //   {
  //     images: ['/images/artists/artist4-1.jpg', '/images/artists/artist4-2.jpg', '/images/artists/artist4-3.jpg'],
  //     name: 'Aaditya Kulshreshth'
  //   }
  // ];