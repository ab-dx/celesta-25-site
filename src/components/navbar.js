"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Home, Calendar, Star, Wrench, Users, ImageIcon, LogIn, UserPlus, } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "Events", href: "/events", icon: Calendar },
    { name: "Sponsors", href: "/spons", icon: Star },
    { name: "Workshops", href: "/workshop", icon: Wrench },
    { name: "Team", href: "/team", icon: Users },
    { name: "Gallery", href: "/gallery", icon: ImageIcon },
    { name: "Login", href: "/login", icon: LogIn, type: "outline" },
    { name: "Register", href: "/register", icon: UserPlus, type: "solid" },
  ];

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-6xl">
      <nav className="mx-4 flex items-center justify-between rounded-full bg-black/20 p-3 text-white backdrop-blur-xl border border-white/10 shadow-lg">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setIsMenuOpen(false)}
        >
          <Image
            src="/images/celesta-icon.png"
            alt="Celesta Logo"
            width={40}
            height={40}
          />
          <span className="font-orbitron text-xl font-bold tracking-wider select-none">
            CELESTA
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6 font-orbitron text-sm uppercase">
          {navLinks.map((link) =>
            link.type === "outline" ? (
              <Link
                key={link.name}
                href={link.href}
                className="rounded-full border-2 border-teal-500 px-5 py-2 opacity-80 hover:opacity-100 hover:bg-teal-500 hover:text-black transition"
              >
                {link.name}
              </Link>
            ) : link.type === "solid" ? (
              <Link
                key={link.name}
                href={link.href}
                className="rounded-full bg-teal-500 px-5 py-2 text-black hover:bg-teal-400 transition"
              >
                {link.name}
              </Link>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className="opacity-80 hover:opacity-100 transition"
              >
                {link.name}
              </Link>
            )
          )}
        </div>

        {/* hamburger menu  icon  */}
        <button
          className="lg:hidden p-2 text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </nav>



      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="lg:hidden mt-3 mx-4 rounded-2xl bg-black/20 border border-white/10 backdrop-blur-xl shadow-lg text-white font-orbitron text-base uppercase flex flex-col items-stretch py-4 px-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map(({ name, href, icon: Icon, type }, idx) => {
              const showDivider = name !== "Login" && name !== "Register";

              return (
                <motion.div
                  key={name}
                  className="flex flex-col items-stretch"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                >
                  <Link
                    href={href}
                    onClick={toggleMenu}
                    className={`flex items-center justify-center gap-3 py-3 rounded-full text-lg font-semibold transition ${type === "outline"
                      ? "border-2 border-teal-500 opacity-80 hover:opacity-100 hover:bg-teal-500 hover:text-black"
                      : type === "solid"
                        ? "bg-teal-500 text-black hover:bg-teal-400"
                        : "opacity-80 hover:opacity-100 hover:text-teal-400"
                      }`}
                  >
                    <Icon size={20} />
                    {name}
                  </Link>

                  {/* line  */}
                  {showDivider && (
                    <motion.div
                      className="border-b border-white/10 my-2"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      exit={{ scaleX: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                    />
                  )}

                  {name === "Login" && <div className="my-2"></div>}
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>




    </header>
  );
}
