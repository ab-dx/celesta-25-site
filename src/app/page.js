import Image from "next/image";
import styles from "./Home.module.css"
import { ArrowDown } from "lucide-react";

export default function Home() {
  return (
    <div className={`flex flex-col justify-center items-center ${styles.background}`}>
      <section className="flex h-[90vh] justify-center items-center">
        <Image src="/images/banner-logo.png" alt="banner-logo" width={1000} height={500} />
      </section>
      <ArrowDown className="text-white animate-bounce" />
      <section className="flex my-20 justify-center items-center">
        <h1 className="text-white font-bold text-6xl state-wide">Past Performers</h1>
      </section>
    </div>
  );
}
