"use client";
import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
type Product = {
  title: string;
  link: string;
  thumbnail: string;
};
const HeroParallax = ({ products }: { products: Product[] }) => {
  const firstRow = products.slice(0, 4);
  const secondRow = products.slice(4, 8);
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.15], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 300]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-[250vh] md:h-[300vh] bg-black overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="mb-20"
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-4 md:space-x-20 mb-4 md:mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-4 md:mb-20 space-x-4 md:space-x-20">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};
const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold text-white">
        The Ultimate <br /> Parv's Gallery
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 text-neutral-200">
        Zinda hun yaar kaai hai DUHH!!
      </p>
    </div>
  );
};
interface ProductCardProps {
  product: Product;
  translate: MotionValue<number>;
}
const ProductCard = ({ product, translate }: ProductCardProps) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-48 w-[15rem] md:h-96 md:w-[30rem] relative flex-shrink-0"
    >
      <a
        href={product.link}
        className="block group-hover/product:shadow-2xl"
      >
        <img
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </a>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
export default function SurrealGallery() {
  const products: Product[] = [
    {
      title: "Surreal Dream 1",
      link: "#",
      thumbnail: "/test/1.jpg",
    },
    {
      title: "Surreal Dream 2",
      link: "#",
      thumbnail: "/test/2.jpg",
    },
    {
      title: "Surreal Dream 3",
      link: "#",
      thumbnail: "/test/3.jpg",
    },
    {
      title: "Surreal Dream 4",
      link: "#",
      thumbnail: "/test/4.png",
    },
    {
      title: "Surreal Dream 5",
      link: "#",
      thumbnail: "/test/5.jpg",
    },
    {
      title: "Surreal Dream 6",
      link: "#",
      thumbnail: "/test/6.jpg",
    },
    {
      title: "Surreal Dream 7",
      link: "#",
      thumbnail: "/test/7.jpg",
    },
    {
      title: "Surreal Dream 8",
      link: "#",
      thumbnail: "/test/8.jpg",
    },
  ];

  return (
    <div>
      <HeroParallax products={products} />
    </div>
  );
}
