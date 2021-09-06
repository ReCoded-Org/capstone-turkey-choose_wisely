import React from "react";
import "./style.scss";
import ResourcesInfos from "./../../components/ResourcesInfos";
import RessourcesHeader from "./../../components/RessourcesHeader";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const ResourcesPage = () => {
  const { t } = useTranslation();

  return (
    <main className="resources_page">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {t("navbar.chooseWisely")} | {t("navbar.ressources")}
        </title>
      </Helmet>
      <RessourcesHeader />
      <ResourcesInfos />
    </main>
  );
};

export default ResourcesPage;
