import React from "react";
import ReusablePriorityPage from "../resulablePriorityPage/index";
import { Priority } from "@/app/state/api";

const High = () => {
  return <ReusablePriorityPage priority={Priority.High} />;
};

export default High;
