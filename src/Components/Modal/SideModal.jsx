import React, { Fragment } from "react";
import { ReactSVG } from "react-svg";
import useHostname from "../Provider/HostnameProvider";
import { useDarkModeContext } from "@/pages/context/DarkModeContext";

const SideModal = ({ children, setToogle, Toogle, title, subtitle = "" }) => {
  const originalUrl = useHostname();
  const { darkMode } = useDarkModeContext();
  return (
    <Fragment>
      <div
        className={
          "fixed w-full sm:w-[560px] h-full p-4 top-0 z-[99] transition-all duration-300 " +
          (Toogle
            ? "-translate-x-1/2 sm:translate-x-0 left-1/2 sm:left-auto sm:right-0"
            : "opacity-0 left-full sm:left-auto sm:-right-full pointer-events-none")
        }
      >
        <div className="w-full h-full overflow-auto bg-Mbackgrounds-bg-primary dark:bg-Mbackgrounds-bg-primary-dark border !border-Mborder-border-primary dark:!border-Mborder-border-primary-dark rounded-3xl p-[32px]">
          <div className="flex items-start justify-between gap-2 mb-[24px]">
            <div className="">
              <h5 className="font-semibold text__20 text-Mtext-text-primary dark:text-Mtext-text-primary-dark mb-1">
                {title}
              </h5>
              {subtitle != "" ? (
                <p className="text__16 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
                  {subtitle}
                </p>
              ) : (
                ""
              )}
            </div>
            <ReactSVG
              onClick={setToogle}
              className="cursor-pointer"
              src={originalUrl + "/images/Close.svg"}
              beforeInjection={(svg) => {
                svg.setAttribute("fill", darkMode ? "white" : "#1A1A1A");
              }}
            />
          </div>
          {children}
        </div>
      </div>
    </Fragment>
  );
};

export default SideModal;
