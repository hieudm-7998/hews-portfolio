"use client";

import {
  Coinfo,
  Corsair,
  Smartbox,
  SideProjects,
} from "@/components/Role";

const Divider = () => {
  return (
    <div className="section px-4 md:!px-0">
      <div className="h-px bg-themeOutline w-20 my-8 m-auto" />
    </div>
  );
};

const WorkList = () => {
  return (
    <>
      <div className="section">
        <h2 className="spatial text-2xl text-center">Selected work</h2>
      </div>
      <Smartbox />
      <Divider />
      <Corsair />
      <Divider />
      <Coinfo />
      <Divider />
      <SideProjects />
      <Divider />
    </>
  );
};

export default WorkList;
