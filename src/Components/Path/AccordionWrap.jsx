import { useDarkModeContext } from "@/pages/context/DarkModeContext";
import React, { Fragment, useState } from "react";
import useHostname from "../Provider/HostnameProvider";
import { ReactSVG } from "react-svg";

const AccordionWrap = ({
  title = "How do I reset my password?",
  desc = `Go to Settings > Security, enter your current password, then set a
            new one.`,
}) => {
  const originalUrl = useHostname();
  const { darkMode } = useDarkModeContext();

  const [toogleAccordion, settoogleAccordion] = useState(false);
  return (
    <Fragment>
      <div className="text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
        <div
          onClick={() => settoogleAccordion(!toogleAccordion)}
          className="flex items-center justify-between gap-2 cursor-pointer"
        >
          <h5 className="font-medium text__18">{title}</h5>
          <ReactSVG
            className={
              "transition-all duration-300 " +
              (toogleAccordion ? "-rotate-180" : "")
            }
            src={originalUrl + "/images/Chevron-down 2.svg"}
            beforeInjection={(svg) => {
              svg.setAttribute("fill", darkMode ? "white" : "#404040");
            }}
          />
        </div>
        <div
          className={
            "transition-all duration-300 " +
            (toogleAccordion ? "max-h-screen" : "max-h-0 overflow-hidden")
          }
        >
          <p className="text__18 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary pt-2">
            {desc}
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default AccordionWrap;
