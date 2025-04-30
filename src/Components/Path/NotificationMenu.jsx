import React, { Fragment, useState } from "react";
import { ReactSVG } from "react-svg";
import useHostname from "../Provider/HostnameProvider";
import { useDarkModeContext } from "@/pages/context/DarkModeContext";

const NotificationMenu = () => {
  const originalUrl = useHostname();
  const { darkMode } = useDarkModeContext();

  const [ToogleNotification, setToogleNotification] = useState(false);
  return (
    <Fragment>
      <div className="relative">
        <div
          onClick={() => setToogleNotification(!ToogleNotification)}
          className={
            "cursor-pointer flex items-center justify-center w-[40px] h-[40px] rounded-full border !border-Mborder-border-secondary dark:!border-Mborder-border-secondary-dark " +
            (ToogleNotification ? "bg-Mbackgrounds-bg-tertiary dark:bg-Mbackgrounds-bg-tertiary-dark" : "")
          }
        >
          <div className="w-[16px] h-[16px] flex items-center justify-center text-white bg-Mdefault-red border !border-white dark:!border-Mbackgrounds-bg-primary-dark rounded-full absolute right-[3px] top-[3px] text-[10px]">
            8
          </div>
          <ReactSVG
            src={originalUrl + "/images/Notification.svg"}
            beforeInjection={(svg) => {
              svg.setAttribute("fill", darkMode ? "white" : "#1A1A1A");
            }}
          />
        </div>
        <div
          className={
            "absolute -right-[6rem] sm:right-0  w-[320px] shadow-[32px_32px_40px_rgba(35,35,35,0.06)] p-[18px] rounded-[12px] bg-Mbackgrounds-bg-primary dark:bg-Mbackgrounds-bg-primary-dark border !border-Mborder-border-primary dark:!border-Mborder-border-primary-dark grid grid-cols-1 gap-2 transition-all duration-300 " +
            (ToogleNotification
              ? "top-[110%]"
              : "top-[130%] opacity-0 pointer-events-none")
          }
        >
          <div className="flex items-center justify-between">
            <p className="text__12 text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
              Notifications (8)
            </p>
            <ReactSVG
              src={originalUrl + "/images/EnvelopeOpen.svg"}
              beforeInjection={(svg) => {
                svg.setAttribute("fill", darkMode ? "white" : "#404040");
              }}
            />
          </div>

          <div className="grid grid-cols-1 gap-2">
            <p className="text-[10px] text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
              Today
            </p>
            <div className="flex items-center gap-2">
              <div className="flex-shrink-0 w-[32px] h-[32px] rounded-full flex items-center justify-center bg-Mbackgrounds-bg-tertiary dark:bg-Mbackgrounds-bg-tertiary-dark border !border-Mborder-border-secondary dark:!border-Mborder-border-secondary-dark">
                <ReactSVG
                  src={originalUrl + "/images/ArrowUp.svg"}
                  beforeInjection={(svg) => {
                    svg.setAttribute("fill", darkMode ? "white" : "#737373");
                  }}
                />
              </div>
              <div className="">
                <h5 className="font-medium text__12 text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
                  Payment Sent!
                </h5>
                <p className="text__12 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
                  You sent{" "}
                  <span className="text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
                    $500
                  </span>{" "}
                  to John Doe.{" "}
                  <a
                    href="#!"
                    className="text-Mtext-text-secondary dark:text-Mtext-text-secondary-dark underline"
                  >
                    View Details
                  </a>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex-shrink-0 w-[32px] h-[32px] rounded-full flex items-center justify-center bg-Mbackgrounds-bg-tertiary dark:bg-Mbackgrounds-bg-tertiary-dark border !border-Mborder-border-secondary dark:!border-Mborder-border-secondary-dark">
                <ReactSVG
                  src={originalUrl + "/images/ArrowDown.svg"}
                  beforeInjection={(svg) => {
                    svg.setAttribute("fill", darkMode ? "white" : "#737373");
                  }}
                />
              </div>
              <div className="">
                <h5 className="font-medium text__12 text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
                  Payment Received!
                </h5>
                <p className="text__12 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
                  You received{" "}
                  <span className="text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
                    $250
                  </span>{" "}
                  to Sarah.{" "}
                  <a
                    href="#!"
                    className="text-Mtext-text-secondary dark:text-Mtext-text-secondary-dark underline"
                  >
                    View Details
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2">
            <p className="text-[10px] text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
              Yesterday
            </p>
            <div className="flex items-center gap-2">
              <div className="flex-shrink-0 w-[32px] h-[32px] rounded-full flex items-center justify-center bg-Mbackgrounds-bg-tertiary dark:bg-Mbackgrounds-bg-tertiary-dark border !border-Mborder-border-secondary dark:!border-Mborder-border-secondary-dark">
                <ReactSVG
                  src={originalUrl + "/images/ArrowLineDown.svg"}
                  beforeInjection={(svg) => {
                    svg.setAttribute("fill", darkMode ? "white" : "#737373");
                  }}
                />
              </div>
              <div className="">
                <h5 className="font-medium text__12 text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
                  Withdrawal Completed!
                </h5>
                <p className="text__12 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
                  Your $100 withdrawal to your bank is now complete.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex-shrink-0 w-[32px] h-[32px] rounded-full flex items-center justify-center bg-Mbackgrounds-bg-tertiary dark:bg-Mbackgrounds-bg-tertiary-dark border !border-Mborder-border-secondary dark:!border-Mborder-border-secondary-dark">
                <ReactSVG
                  src={originalUrl + "/images/X.svg"}
                  beforeInjection={(svg) => {
                    svg.setAttribute("fill", darkMode ? "white" : "#737373");
                  }}
                />
              </div>
              <div className="">
                <h5 className="font-medium text__12 text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
                  Payment Failed!
                </h5>
                <p className="text__12 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
                  Your payment of $50 to John Doe Store was declined.{" "}
                  <a
                    href="#!"
                    className="text-Mtext-text-secondary dark:text-Mtext-text-secondary-dark underline"
                  >
                    Try Again
                  </a>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex-shrink-0 w-[32px] h-[32px] rounded-full flex items-center justify-center bg-Mbackgrounds-bg-tertiary dark:bg-Mbackgrounds-bg-tertiary-dark border !border-Mborder-border-secondary dark:!border-Mborder-border-secondary-dark">
                <ReactSVG
                  src={originalUrl + "/images/Lock.svg"}
                  beforeInjection={(svg) => {
                    svg.setAttribute("fill", darkMode ? "white" : "#737373");
                  }}
                />
              </div>
              <div className="">
                <h5 className="font-medium text__12 text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
                  Password Changed Successfully!
                </h5>
                <p className="text__12 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
                  YIf you didn’t make this change,{" "}
                  <a
                    href="#!"
                    className="text-Mtext-text-secondary dark:text-Mtext-text-secondary-dark underline"
                  >
                    Reset Your Password
                  </a>
                </p>
              </div>
            </div>
          </div>

          <a
            href="#!"
            className="text-center font-semibold text__14 pt-2 text-Mtext-text-secondary dark:text-Mtext-text-secondary-dark"
          >
            See All
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default NotificationMenu;
