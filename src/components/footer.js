import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <>
      <div className="w-full bg-black text-white px-24 py-16 flex z-50">
        <div className="flex-1">
          <Image className="" src="/images/banner-logo.png" alt="banner-logo" width={400} height={600} />
        </div>
        <div className="flex flex-col justify-center gap-4">
          <Link href="https://www.instagram.com/celestaiitp_official/"><span className="flex gap-2 justify-center"><Instagram /> celestaiitp_official</span></Link>
          <Link href="https://www.linkedin.com/company/celesta-iit-patna/"><span className="flex gap-2 justify-center"><Linkedin /> celesta-iit-patna</span></Link>
        </div>
      </div>
    </>
  )
}
