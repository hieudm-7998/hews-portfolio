import React from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import WorkList from "@/components/Worklist";
const Layout = dynamic(() => import("@/components/Layout"), { ssr: false });
import Divider from "@/components/Divider";

function About() {
  const router = useRouter();

  return (
    <Layout pageName="IT">
      <div className="section">
        <div className="flex">
          <button
            className="navigate-btn transition-all"
            onClick={() => router.push("/")}
          >
            « Back to homepage
          </button>
          {/* <button className="navigate-btn transition-all" onClick={() => router.push("/")}>My profile »</button> */}
        </div>

        <p className="my-10">
          I've been working as Front-end Developer with over 5 years of
          experience delivering high-quality web applications for diverse
          industries, including CMS, E-commerce, Blockchain. Proficient in
          modern web development technologies with a strong focus on building
          scalable, user-centric solutions. Adept at collaborating with
          crossfunctional teams to develop robust platforms, optimize user
          experiences, and implement innovative features, driving impactful
          digital transformation for global clients.
        </p>
        <Divider />
      </div>
      <WorkList />
    </Layout>
  );
}

export default About;
