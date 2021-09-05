import React from "react";
import "./style.scss";
import ResourcesInfos from "./../../components/ResourcesInfos";
import RessourcesHeader from "./../../components/RessourcesHeader";

const ResourcesPage = () => {
  return (
    <main className="resources_page">
      <RessourcesHeader />
      <ResourcesInfos />
    </main>
  );
};

export default ResourcesPage;
