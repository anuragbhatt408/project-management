import React from "react";
import ReusablePriorityPage from "../resulablePriorityPage/index";
import { Priority } from "@/app/state/api";

const Low = () => {
  return <ReusablePriorityPage priority={Priority.Low} />;
};

export default Low;
