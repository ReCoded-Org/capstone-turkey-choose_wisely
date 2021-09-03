import React, { useState, useEffect } from "react";
import { LOADING_TIME } from "../../utilities/variables";
import "./style.scss";
import { useTranslation } from "react-i18next";

const Preloader = () => {
  const [fetchSuccess, setFetchSuccess] = useState(false);
  const { t } = useTranslation();
  useEffect(() => {
    setTimeout(() => {
      setFetchSuccess(true);
    }, LOADING_TIME);
  }, []);

  const preloaderclass = fetchSuccess ? "loaded" : "";
  return (
    <div id="preloader_wrap" className={`${preloaderclass}`}>
      <h2 className="preloading_heading">{t("loading")}</h2>
      <svg
        width="24"
        height="24"
        viewBox="0 0 44 44"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#FFF"
      >
        <g fill="none" fillRule="evenodd" strokeWidth="2">
          <circle cx="22" cy="22" r="1">
            <animate
              attributeName="r"
              begin="0s"
              dur="1.8s"
              values="1; 20"
              calcMode="spline"
              keyTimes="0; 1"
              keySplines="0.165, 0.84, 0.44, 1"
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke-opacity"
              begin="0s"
              dur="1.8s"
              values="1; 0"
              calcMode="spline"
              keyTimes="0; 1"
              keySplines="0.3, 0.61, 0.355, 1"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="22" cy="22" r="1">
            <animate
              attributeName="r"
              begin="-0.9s"
              dur="1.8s"
              values="1; 20"
              calcMode="spline"
              keyTimes="0; 1"
              keySplines="0.165, 0.84, 0.44, 1"
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke-opacity"
              begin="-0.9s"
              dur="1.8s"
              values="1; 0"
              calcMode="spline"
              keyTimes="0; 1"
              keySplines="0.3, 0.61, 0.355, 1"
              repeatCount="indefinite"
            />
          </circle>
        </g>
      </svg>
    </div>
  );
};

export default Preloader;
