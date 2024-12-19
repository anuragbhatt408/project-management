import React from "react";
import ReusablePriorityPage from "../resulablePriorityPage/index";
import { Priority } from "@/app/state/api";

const Urgent = () => {
  return <ReusablePriorityPage priority={Priority.Urgent} />;
};

export default Urgent;
