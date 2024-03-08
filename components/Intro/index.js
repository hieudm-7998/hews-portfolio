// This is the code that is bundled for the client-side:

"use client";
import { useState } from "react";
import Randomizer from "../Randomizer";
import Image from "next/legacy/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";

const Intro = () => {
  const router = useRouter();
  const [name, setName] = useState("Hieu, Do Minh");

  return (
    <div className="section flex flex-col items-center text-center">
      <motion.div
        className="bg-themeSurfaceVariant h-24 w-24 p-1 rounded-full relative inline-flex items-center justify-center mb-6"
        initial={{ opacity: 0, top: "24px" }}
        whileInView={{ opacity: 1, top: 0 }}
        transition={{
          duration: 0.1,
          delay: 0.2,
          type: "spring",
          stiffness: 150,
        }}
        viewport={{ once: true }}
      >
        <div className="bg-themeSurface h-full w-full p-1 rounded-full relative inline-flex items-center justify-center">
          <motion.div
            className="relative rounded-full w-full h-full overflow-hidden z-10 opacity-0"
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 0.3,
              type: "spring",
              stiffness: 150,
            }}
          >
            <Image src="/avatar.png" layout="fill" alt="Ryan's face" />
          </motion.div>
          <motion.div
            className="absolute opacity-0 top-0 bottom-0 left-0 right-0 bg-themePrimary blur-xl rounded-full z-0"
            animate={{ opacity: 0.5 }}
            transition={{
              duration: 1,
              delay: 0.8,
              type: "spring",
              stiffness: 150,
            }}
          />
        </div>
      </motion.div>
      <motion.h1
        className="text-4xl lg:text-5xl mb-2 md:mb-4 top-8 opacity-0 relative"
        animate={{ top: 0, opacity: 1 }}
        transition={{
          duration: 0.3,
          delay: 0.5,
          type: "spring",
          stiffness: 150,
        }}
        onMouseEnter={()=> setName("Đỗ Minh Hiếu")}
        onMouseLeave={()=> setName("Hieu, Do Minh")}
      >
        {name}
      </motion.h1>
      <motion.p
        className="text-base sm:text-lg lg:text-xl leading-loose mb-8 top-8 opacity-0 relative"
        animate={{ top: 0, opacity: 1 }}
        transition={{
          duration: 0.3,
          delay: 0.6,
          type: "spring",
          stiffness: 150,
        }}
      >
        Hi, I&apos;m a Front-end Web Developer, Music Producer and <Randomizer />.
        <br />
        <br />
        Welcome to my portfolio ! 👋
        <br />
        <br />
        Click to find more information about me in...
      </motion.p>
      <motion.div
        // className="bg-themeSurfaceVariant"
        className="w-full flex flex-col gap-4 md:flex-row justify-center items-center"
        initial={{ opacity: 0, top: "24px" }}
        whileInView={{ opacity: 1, top: 0 }}
        transition={{
          duration: 0.1,
          delay: 0.2,
          type: "spring",
          stiffness: 150,
        }}
        viewport={{ once: true }}
      >
        <button
          onClick={() => router.push("/it")}
          className="flex-1 w-full md:w-auto button buttonLg buttonPrimary"
        >
          🖥️ IT Business
        </button>
        <button
          onClick={() => router.push("/music")}
          className="flex-1 w-full md:w-auto button buttonLg buttonPrimary"
        >
          🎹 Music Business
        </button>
      </motion.div>
      {/* <Link href="/about">
        <motion.span
          className="button buttonLg buttonPrimary opacity-0 top-4"
          animate={{ opacity: 1, top: 0 }}
          transition={{
            duration: 0.3,
            delay: 0.7,
            type: "spring",
            stiffness: 150,
          }}
        >
          More Info
        </motion.span>
      </Link> */}
      <div className="h-px bg-themeOutline w-20 my-16" />
    </div>
  );
};
export default Intro;
