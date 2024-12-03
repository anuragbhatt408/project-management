"use client";

import React, { useState } from "react";
import ProjectHeader from "../ProjectHeader";
import Board from "../BoardView/index";
import List from "../ListView/index";
import Timeline from "../TimelineView/index";

type Props = {
  params: { id: string };
};

const Project = ({ params }: Props) => {
  const { id } = React.use(params);
  const [activeTab, setActiveTab] = useState("Board");
  const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);
  return (
    <div>
      {/* MODAL NEW TASKS */}

      {/* Projects Tab */}
      <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "Board" && (
        <Board id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
      )}
      {activeTab === "List" && (
        <List id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
      )}
      {activeTab === "Timeline" && (
        <Timeline id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
      )}
      {/* {activeTab === "Table" && (
        <Table id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
      )} */}
    </div>
  );
};

export default Project;
