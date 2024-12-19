import React from "react";
import ReusablePriorityPage from "../resulablePriorityPage/index";
import { Priority } from "@/app/state/api";

const Backlog = () => {
  return <ReusablePriorityPage priority={Priority.Backlog} />;
};

export default Backlog;
