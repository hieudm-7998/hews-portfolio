import React from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
const Layout = dynamic(() => import("@/components/Layout"), { ssr: false });
import Divider from "@/components/Divider";

function Music() {
  const router = useRouter();

  return (
    <Layout pageName="Music">
      <div className="section">
        <div className="flex">
          <button
            className="navigate-btn transition-all"
            onClick={() => router.push("/")}
          >
            « Back to homepage
          </button>
        </div>

        <p className="my-10">
          With one year of experience as a music producer, I'm diving headfirst
          into the world of sound creation. Fueled by passion and creativity,
          I'm constantly pushing boundaries and exploring new techniques across
          various genres. Every project is an opportunity to refine my craft and
          carve out my unique sonic identity. Despite being early in my journey,
          I'm committed to honing my skills and making an impact in the
          ever-evolving landscape of music production.
        </p>
        <Divider />
      </div>

      <div className="section">
        <h2 className="spatial text-2xl text-center">My finished project(s)</h2>
        <div className="py-8">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/sIPR_prwXAE?si=H6YjepXu9jxDvPRQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            preload="none"
          ></iframe>
        </div>
        <div className="py-8">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/CHtdoJxysbA?si=bmBinPlyLJbr-orz"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            preload="none"
          ></iframe>
        </div>
        <div className="py-8">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/o7FQqPRoSMc?si=VkaXH8DzDoV6nsgU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            preload="none"
          ></iframe>
        </div>
        <Divider />
        <h2 className="spatial text-2xl text-center">
          And I also make instrumental/type beat...
        </h2>
        <div className="py-8">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/9wtzzRucsX0?si=EZLTaiAcB8ImlkI9"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            preload="none"
          ></iframe>
        </div>
        <div className="py-8">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/j6J6iLWrXqo?si=YyKByCSbo1llsre7"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            preload="none"
          ></iframe>
        </div>
        <div className="py-8">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/JBDE2vkQq1s?si=deyKUTYwjb5-yo-B"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            preload="none"
          ></iframe>
        </div>
        <div className="py-8">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/ZvanX7Xkle8?si=cukGoBoCN5VB-kz3"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            preload="none"
          ></iframe>
        </div>
        <div className="py-8">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/hGmI5PkuEaI?si=BEgzkWfIVO1Wjv49"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            preload="none"
          ></iframe>
        </div>
      </div>
      <Divider />
    </Layout>
  );
}

export default Music;
