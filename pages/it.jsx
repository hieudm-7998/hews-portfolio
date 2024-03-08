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
          <button className="navigate-btn transition-all" onClick={() => router.push("/")}>« Back to homepage</button>
          {/* <button className="navigate-btn transition-all" onClick={() => router.push("/")}>My profile »</button> */}
        </div>

        <p className="my-10">
          I've been working as Front-end Developer with 4 years of experience in
          designing and implementing user-friendly, responsive and visually
          appealing web applications. Proficient in ReactJS, VueJS and various
          UI libraries. Committed to crafting seamless user experiences through
          responsive and visually appealing interfaces. Passionate about
          creating dynamic and interactive web applications that marry design
          with functionality.
        </p>
        <Divider />
      </div>
      <WorkList />
    </Layout>
  );
}

export default About;
