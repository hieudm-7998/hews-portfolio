// import WorkList from "@/components/WorkList";

import dynamic from "next/dynamic";
import Intro from "@/components/Intro";
// import CTA from "@/components/CTA";
const Layout = dynamic(() => import("@/components/Layout"), { ssr: false });

export default function Home() {
  return (
    <Layout pageName="">
      <Intro />
      {/* <WorkList /> */}
      {/* <CTA /> */}
    </Layout>
  );
}
