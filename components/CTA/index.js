"use client";

import React, { useState, useRef } from "react";
import Image from "next/legacy/image";
import { copyTextToClipboard } from "@/utils/copy";
import { motion, useInView } from "framer-motion";

const CTA = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    copyTextToClipboard();
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="section px-4 md:!px-0 text-center">
      <motion.article
        className="bg-themeSurfaceVariant relative rounded-xl p-4 md:p-6 opacity-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.3,
          delay: 0.1,
          type: "spring",
          stiffness: 200,
        }}
        viewport={{ once: true }}
      >
        {/* <motion.div
          className="bg-themeSurfaceVariant rounded-full h-28 w-28 p-2"
          initial={{ opacity: 0, top: 0 }}
          whileInView={{ opacity: 1, top: "-48px" }}
          transition={{
            duration: 0.3,
            delay: 0.3,
            type: "spring",
            stiffness: 80,
          }}
          viewport={{ once: true }}
        >
          <div className="bg-themeSurface w-full h-full rounded-full relative">
            <Image src="/memoji.png" layout="fill" alt="Ryan's face" />
          </div>
        </motion.div> */}
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, top: 0 }}
          transition={{
            duration: 0.3,
            delay: 0.1,
            type: "spring",
            stiffness: 80,
          }}
          className="text-xl md:text-3xl top-4 relative"
          viewport={{ once: true }}
        >
          Want a closer look into my work?
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, top: 0 }}
          transition={{
            duration: 0.3,
            delay: 0.2,
            type: "spring",
            stiffness: 80,
          }}
          className="top-4 relative"
          viewport={{ once: true }}
        >
          Let&apos;s chat if you&apos;d like a more in-depth view into my design
          process and the past projects I&apos;ve worked on.
        </motion.p>
        <motion.div
          className="flex flex-col md:flex-row justify-center items-center mt-2 top-4 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, top: 0 }}
          transition={{
            duration: 0.3,
            delay: 0.2,
            type: "spring",
            stiffness: 80,
          }}
          viewport={{ once: true }}
        >
          <button
            onClick={() => copyEmail()}
            className="w-full md:w-auto button buttonLg buttonPrimary"
          >
            Copy email address
          </button>
          <span className={`text-sm mt-4 md:mt-0 ml-0 md:ml-4`}>
            {copied ? (
              <motion.span
                className="inline-flex items-center opacity-0"
                whileInView={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.2,
                  delay: 0,
                  type: "spring",
                  stiffness: 200,
                }}
              >
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="mr-1 text-themePrimary"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M5.75 12.8665L8.33995 16.4138C9.15171 17.5256 10.8179 17.504 11.6006 16.3715L18.25 6.75"
                  ></path>
                </svg>
                Copied
              </motion.span>
            ) : (
              "hi*********@gmail.com"
            )}
          </span>
        </motion.div>
      </motion.article>
    </section>
  );
};

export default CTA;
