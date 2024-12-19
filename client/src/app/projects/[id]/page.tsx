"use client";

import React, { useState } from "react";
import ProjectHeader from "../ProjectHeader";
import Board from "../BoardView/index";
import List from "../ListView/index";
import Timeline from "../TimelineView/index";
import Table from "../TableView/index";
import ModalNewTask from "@/components/ModalNewTask/index";
import { useParams } from "next/navigation";

const Project = () => {
  // const { id } = params;
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState("Board");
  const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);
  return (
    <div>
      {/* MODAL NEW TASKS */}
      <ModalNewTask
        id={id}
        isOpen={isModalNewTaskOpen}
        onClose={() => setIsModalNewTaskOpen(false)}
      />

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
      {activeTab === "Table" && (
        <Table id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
      )}
    </div>
  );
};

export default Project;
