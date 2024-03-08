"use client";

import ProjectCarousel from "@/components/ProjectCarousel";
import Image from "next/legacy/image";
import Logo from "../Logo";
import { motion } from "framer-motion";

const Position = ({ role, start, end }) => {
  return (
    <motion.div className="w-full flex items-center text-xs my-6 text-themeOnSurfaceVariant spatial">
      <strong>{role}</strong>
      <motion.span
        className="mt-1 h-1 border-t border-current border-dashed w-full block flex-1 text-themeOnSurfaceVariant mx-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.3 }}
        transition={{
          duration: 0.3,
          delay: 0.3,
          type: "spring",
          stiffness: 80,
        }}
        viewport={{ once: true }}
      />
      {start} - {end}
    </motion.div>
  );
};

const Header = ({ title, description }) => {
  return (
    <div className="flex w-full items-start md:items-center">
      <motion.div
        className="relative overflow-hidden"
        initial={{ opacity: 0, left: "-16px", rotate: "6deg" }}
        whileInView={{ opacity: 1, left: 0, rotate: 0 }}
        transition={{
          duration: 0.3,
          delay: 0.3,
          type: "spring",
          stiffness: 50,
        }}
        viewport={{ once: true }}
      >
        <div className="flex-1">
          <h3 className="text-2xl mb-0">{title}</h3>
          <span className="text-sm text-themeOnSurfaceVariant">
            {description}
          </span>
        </div>
      </motion.div>
    </div>
  );
};

const Container = ({ children, id }) => {
  return (
    <div id={id} className="py-8 px-4">
      {children}
    </div>
  );
};

export const Coinfo = () => {
  return (
    <Container id={"Coinfo"}>
      <ProjectCarousel company={"Coinfo"} color={"#1C66DC"} />
      <motion.div
        className="section px-0 pt-4 md:pt-0 relative top-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, top: 0 }}
        transition={{
          duration: 0.3,
          delay: 0.1,
          type: "spring",
          stiffness: 80,
        }}
        viewport={{ once: true }}
      >
        <Header
          image="Coinfo"
          title="Coinfo"
          description="Where you can securely keep your crypto."
        />
        <Position role="Front-end Developer" start="08/2021" end="12/2021" />
        <p>
          COINFO is a news aggregator platform and a trading signals provider
          for traders and cryptocurrency enthusiasts.
          <br />
          <br />
          Programming languages & libraries used: NextJS, TailwindCSS, ChakraUI.
          <br />
          Design system used: Figma.
        </p>
      </motion.div>
    </Container>
  );
};

export const Corsair = () => {
  return (
    <Container id={"Corsair"}>
      <ProjectCarousel company={"Corsair"} color={"#99C221"} />
      <motion.div
        className="section px-0 pt-4 md:pt-0 relative top-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, top: 0 }}
        transition={{
          duration: 0.3,
          delay: 0.1,
          type: "spring",
          stiffness: 80,
        }}
        viewport={{ once: true }}
      >
        <Header
          image="Corsair"
          title="Corsair"
          description="Leading global developer and manufacturer of high-performance gear and technology for gamers, content creators, and PC enthusiasts."
        />
        <Position role="Front-end Developer" start="08/2021" end="12/2021" />
        <p>
          At Corsair, I help re-build cross-platform store page from scratch
          following old design system to Single Page Application, also bug
          fixing from Contentful's old product mockup.
          <br />
          <br />
          Programming languages & libraries used: NextJS, TailwindCSS, GraphQL.
          <br />
          Design system used: Figma.
        </p>
      </motion.div>
    </Container>
  );
};

export const Smartbox = () => {
  return (
    <Container id={"Smartbox"}>
      <ProjectCarousel company={"Smartbox"} color={"#FA0000"} />
      <motion.div
        className="section px-0 pt-4 md:pt-0 relative top-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, top: 0 }}
        transition={{
          duration: 0.3,
          delay: 0.1,
          type: "spring",
          stiffness: 80,
        }}
        viewport={{ once: true }}
      >
        <Header
          image="Smartbox"
          title="Smartbox"
          description="The number one experience gift provider in Europe, selling millions of gifts every year across Europe."
        />
        <Position role="Front-end Developer" start="01/2022" end="Now" />
        <p>
          Smartbox Group is a multinational ecosystem which built for
          e-commerce. I was having chance to work with friendly Ireland workers
          in their own system. This project requires a lot of difficult
          technique during doing it.
          <br />
          <br />
          Programming languages & libraries used: NuxtJS, Redis, Storybook.
          <br />
          Design system used: Zeplin.
        </p>
      </motion.div>
    </Container>
  );
};

export const SideProjects = () => {
  const projects = [
    {
      link: "https://suntex.vn",
      title: "Suntex",
      description:
        "Suntex Co., Ltd. is proud to be one of the leading manufacturers of plastic & wooden hangers in Vietnam and is reputable in the international market.",
    },
    {
      link: "https://hatdieu.org/",
      title: "Le's Garden",
      description:
        "The woman who grown for 30 years in a province has grown cashew nuts the most of Vietnam countryside story.",
    },
    {
      link: "https://www.starify.io/",
      title: "Starify",
      description: "Unlock the value of your digital assets.",
    },

    {
      link: "https://vti-solutions.vn/",
      title: "VTI Solution",
      description:
        "VTI Solutions provides comprehensive software & solutions with high scalability and specialised customisation for all manufacturing industries.",
    },
    {
      link: "https://scgdistributioneordering.scg.com/",
      title: "SCG EO",
      description: "SCG Packaging - Total Packaging Solutions Provider.",
    },
    {
      link: "#",
      title: "SCG Prime Living",
      description:
        "SCG is a leading business conglomerate operating the business for over a century in line with the principle of sustainable development and good corporate governance since 1913.",
    },
  ];

  return (
    <Container id={"ryan-side-projects"}>
      <div className="section px-0 pt-4 md:pt-0">
        <Header
          title="Side Projects"
          description="A selection of side projects I'm tinkering through."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 my-6 gap-4">
          {projects.map((project, i) => (
            <motion.div
              className="flex flex-row md:flex-col items-start p-4 rounded-xl bg-themeSurfaceVariant text-themeOnSurfaceVariant relative opacity-0 top-8"
              key={i}
              initial={{ opacity: 0, rotate: "2deg" }}
              whileInView={{ opacity: 1, top: 0, rotate: 0 }}
              transition={{
                duration: 0.3,
                delay: 0.1 + 0.1 * i,
                type: "spring",
                stiffness: 80,
              }}
              viewport={{ once: true }}
            >
              <div className="flex-1 w-full flex items-start flex-col">
                <h5 className="text-lg">{project.title}</h5>
                <span className="text-sm mt-1 mb-3">{project.description}</span>
                <a
                  href={project.link}
                  target="_blank"
                  className="text-link--icon"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Container>
  );
};
