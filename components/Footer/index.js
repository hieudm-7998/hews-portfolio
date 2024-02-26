"use client";

import Logo from "../Logo";
import { motion } from "framer-motion";
import { build } from "../Colophon";
import Link from "next/link";

// const Badge = () => {
//   return (
//     <>
//       <Link href="/">
//         <motion.div
//           className="inline-flex items-center relative top-8 transition hover:scale-105"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1, top: 0 }}
//           transition={{
//             duration: 0.1,
//             delay: 0.2,
//             type: "spring",
//             stiffness: 80,
//           }}
//           viewport={{ once: true }}
//         >
//           <motion.div
//             className="h-10 w-10 mr-3 transform relative -left-3"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1, left: 0 }}
//             transition={{
//               duration: 0.2,
//               delay: 0.4,
//               type: "spring",
//               stiffness: 80,
//             }}
//             viewport={{ once: true }}
//           >
//             <Logo subtle />
//             <motion.span
//               className="absolute top-0 bottom-0 right-0 left-0 bg-themePrimary blur-lg opacity-50 -z-10"
//               initial={{ opacity: 0, scale: 0 }}
//               whileInView={{ opacity: 0.5, scale: 1 }}
//               transition={{
//                 duration: 0.2,
//                 delay: 0.4,
//                 type: "spring",
//                 stiffness: 80,
//               }}
//               viewport={{ once: true }}
//             />
//           </motion.div>
//           <div className="flex flex-col items-start">
//             <span className="font-bold text-base">Ryan Parag</span>
//             <span className="text-sm opacity-70">Product Designer</span>
//           </div>
//         </motion.div>
//       </Link>
//     </>
//   );
// };

const Footer = () => {
  const links = [
    {
      name: "Email",
      href: "mailto:hieudm.7998@gmail.com",
      icon: (
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M4.75 7.75C4.75 6.64543 5.64543 5.75 6.75 5.75H17.25C18.3546 5.75 19.25 6.64543 19.25 7.75V16.25C19.25 17.3546 18.3546 18.25 17.25 18.25H6.75C5.64543 18.25 4.75 17.3546 4.75 16.25V7.75Z"
          ></path>
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M5.5 6.5L12 12.25L18.5 6.5"
          ></path>
        </svg>
      ),
      outbound: true,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/hieu-do-minh-b2b918245/",
      icon: (
        <svg
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
        >
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      outbound: true,
    },
    {
      name: "GitHub",
      href: "https://github.com/hieudm-7998",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 98 96"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
            fill="currentColor"
          />
        </svg>
      ),
      outbound: true,
    },
    {
      name: "Bandcamp",
      href: "https://hews.bandcamp.com/",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
          width="20"
          height="20"
          viewBox="0 0 97.75 97.75"
        >
          <path
            d="M48.875,0C21.882,0,0,21.882,0,48.875S21.882,97.75,48.875,97.75S97.75,75.868,97.75,48.875S75.868,0,48.875,0z M64.835,70.857H12.593l20.32-43.965h52.244L64.835,70.857z"
            fill="currentColor"
          ></path>
        </svg>
      ),
      outbound: true,
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/channel/UCNogHQtPH1FTzDVzKYrsRBQ",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.67 8.14002C19.5811 7.7973 19.4028 7.48433 19.1533 7.23309C18.9038 6.98185 18.5921 6.80134 18.25 6.71001C16.176 6.4654 14.0883 6.35517 12 6.38001C9.91174 6.35517 7.82405 6.4654 5.75001 6.71001C5.40793 6.80134 5.09622 6.98185 4.84674 7.23309C4.59725 7.48433 4.41894 7.7973 4.33001 8.14002C4.10282 9.41396 3.99236 10.706 4.00001 12C3.99198 13.3007 4.10244 14.5994 4.33001 15.88C4.42355 16.2172 4.60391 16.5239 4.85309 16.7696C5.10226 17.0153 5.41153 17.1913 5.75001 17.28C7.82405 17.5246 9.91174 17.6349 12 17.61C14.0883 17.6349 16.176 17.5246 18.25 17.28C18.5885 17.1913 18.8978 17.0153 19.1469 16.7696C19.3961 16.5239 19.5765 16.2172 19.67 15.88C19.8976 14.5994 20.008 13.3007 20 12C20.0077 10.706 19.8972 9.41396 19.67 8.14002ZM10.36 14.39V9.63001L14.55 12L10.36 14.38V14.39Z"
            fill="currentColor"
          ></path>
        </svg>
      ),
      outbound: true,
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center">
      {/* <Badge /> */}
      <motion.div
        className="w-full flex-1 relative my-8 top-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, top: 0 }}
        transition={{
          duration: 0.1,
          delay: 0.2,
          type: "spring",
          stiffness: 80,
        }}
        viewport={{ once: true }}
      >
        <div className="spatial text-sm mb-4 text-center">Find me on...</div>
        <div className="w-full grid grid-cols-3 md:grid-cols-4 gap-2">
          {links.map((item, index) => (
            <div key={index}>
              {item.outbound ? (
                <div>
                  <Link
                    href={item.href}
                    target="_blank"
                    className="transition text-sm md:text-base inline-flex items-center hover:underline hover:text-themePrimary"
                  >
                    <div className="inline-flex mr-2">{item.icon}</div>
                    {item.name}
                  </Link>
                </div>
              ) : (
                <div key={index}>
                  <Link href={item.href}>
                    <span className="transition text-sm md:text-base inline-flex items-center hover:underline hover:text-themePrimary">
                      <div className="inline-flex mr-2">{item.icon}</div>
                      {item.name}
                    </span>
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.div>
      {/* <motion.div
        className="h-px bg-themeOutline w-20 mt-8 relative top-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, top: 0 }}
        transition={{
          duration: 0.1,
          delay: 0.2,
          type: "spring",
          stiffness: 80,
        }}
        viewport={{ once: true }}
      /> */}
      {/* <motion.div
        className="text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.1,
          delay: 0.2,
          type: "spring",
          stiffness: 80,
        }}
        viewport={{ once: true }}
      >
        Built with{" "}
        <a
          className="transition hover:underline hover:text-themePrimary"
          href={build.built.link}
          target="_blank"
        >
          {build.built.name}
        </a>
        ,{" "}
        <a
          className="transition hover:underline hover:text-themePrimary"
          href={build.style.link}
          target="_blank"
        >
          {build.style.name}
        </a>
        , and{" "}
        <a
          className="transition hover:underline hover:text-themePrimary"
          href={build.animation.link}
          target="_blank"
        >
          {build.animation.name}
        </a>
        . Website set in{" "}
        <a
          className="transition hover:underline hover:text-themePrimary"
          href={build.typography.link}
          target="_blank"
        >
          {build.typography.name}
        </a>
        .
      </motion.div> */}
    </div>
  );
};

export default Footer;
