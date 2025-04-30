import React, { Fragment, useEffect, useState } from "react";
import Head from "next/head";
import { Container } from "react-bootstrap";
import { ClosedIcon, TextAlignJustifyCenterIcon } from "../svg/Svg";
import useHostname from "../Provider/HostnameProvider";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import { useDarkModeContext } from "@/pages/context/DarkModeContext";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactSVG } from "react-svg";
import _ from "lodash";
import BackdropFixed from "../Path/BackdropFixed";
import NotificationMenu from "../Path/NotificationMenu";
import UserMenu from "../Path/UserMenu";

const LayoutStep = ({
  children,
  title = "Dashboard",
  description = "Dashboard Desc",
  NavTitle = "Dashboard",
  step = false,
  stepData = ["Recipient", "Amount", "Review", "Pay"],
  activeStep = 0,
}) => {
  const originalUrl = useHostname();

  const { darkMode, setDarkMode, toggleTheme } = useDarkModeContext();

  const [ToogleAction, setToogleAction] = useState("");

  const router = useRouter();

  const goBack = () => {
    router.back(); // This will take the user to the previous page in the browser history
  };
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <BackdropFixed
        status={ToogleAction != "" ? true : false}
        onAction={() => setToogleAction("")}
      />

      <div
        className={
          "fixed z-[90] w-[337px] p-4 rounded-[24px] bg-Mbackgrounds-bg-primary dark:bg-Mbackgrounds-bg-primary-dark border !border-Mborder-border-primary dark:!border-Mborder-border-primary-dark transition-all duration-300 left-1/2 -translate-x-1/2  -translate-y-1/2 text-center " +
          (ToogleAction == "logout"
            ? "top-1/2"
            : "opacity-0 top-[80%] pointer-events-none")
        }
      >
        <div className="inline-block">
          <ReactSVG
            src={originalUrl + "/images/SignOut 2.svg"}
            beforeInjection={(svg) => {
              svg.setAttribute("fill", darkMode ? "#737373ff" : "#A3A3A3");
            }}
          />
        </div>

        <h4 className="font-semibold text__24 text-Mtext-text-primary dark:text-Mtext-text-primary-dark mt-4 mb-2">
          Log Out?
        </h4>
        <p className="text__16 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
          Are you sure you want to log out? You’ll need to sign in again to
          access your account.
        </p>

        <div className="grid grid-cols-2 gap-2 mt-4">
          <div
            onClick={() => setToogleAction("")}
            className="cursor-pointer w-full font-semibold text__18 py-[14px] px-[16px] rounded-full text-Mtext-text-secondary dark:text-Mtext-text-secondary-dark"
          >
            Cancel
          </div>
          <Link
            href={"/"}
            className="cursor-pointer w-full font-semibold text__18 py-[14px] px-[16px] rounded-full bg-Malerts-alerts-error text-white"
          >
            Logout
          </Link>
        </div>
      </div>

      <div className="w-full overflow-hidden bg-Mbackgrounds-bg-secondary dark:bg-Mbackgrounds-bg-secondary-dark min-h-screen">
        {/* start:navbar */}
        <div className="transition-all duration-300 w-full h-[88px] bg-Mbackgrounds-bg-secondary dark:!bg-Mbackgrounds-bg-secondary-dark dark:!bg-MGrayscale_800 border-b !border-Mborder-border-primary dark:!border-Mborder-border-primary-dark fixed z-[70] flex items-center justify-center">
          <Container className="relative">
            <div className="flex items-center justify-between">
              <div onClick={goBack} className="cursor-pointer">
                <ReactSVG
                  src={originalUrl + "/images/Logo.svg"}
                  beforeInjection={(svg) => {
                    svg.setAttribute("fill", darkMode ? "white" : "#1A1A1A");
                  }}
                />
              </div>
              <div className="flex items-center">
                <UserMenu clickActionLogout={() => setToogleAction("logout")} />

                <div onClick={goBack} className="cursor-pointer">
                  <ReactSVG
                    src={originalUrl + "/images/xclose.svg"}
                    beforeInjection={(svg) => {
                      svg.setAttribute("fill", darkMode ? "white" : "#404040");
                    }}
                  />
                </div>
              </div>
            </div>
            {step ? (
              <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-[1] w-max lg:block hidden">
                <div className="flex items-center justify-center gap-[32px] relative">
                  {stepData.map((obj, idx) => {
                    return (
                      <div className="relative flex-shrink-0">
                        {idx < stepData.length - 1 ? (
                          <div
                            className={
                              "h-[1px] absolute top-1/2 -translate-y-1/2 w-[32px] left-full " +
                              (idx < activeStep
                                ? "bg-Mbackgrounds-bg-invert dark:bg-Mbackgrounds-bg-invert-dark"
                                : "bg-Mborder-border-primary dark:bg-Mborder-border-primary-dark")
                            }
                          ></div>
                        ) : (
                          ""
                        )}
                        <div className="flex items-center gap-2 px-[8px] py-[2px] rounded-full border !border-Mborder-border-primary dark:!border-Mborder-border-primary-dark">
                          <div
                            className={
                              "w-[8px] h-[8px] rounded-full " +
                              (activeStep >= idx
                                ? "bg-Micon-icon-primary dark:bg-Micon-icon-primary-dark"
                                : "bg-Micon-icon-disable dark:bg-Micon-icon-disable-dark")
                            }
                          ></div>
                          <p className="text__12 text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
                            {obj}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              ""
            )}
          </Container>
        </div>
        {/* end:navbar */}

        <div className="transition-all duration-300 w-full lg:pt-6 pb-6 mt-[88px] lg:px-3 relative">
          {children}
        </div>
      </div>

      <script
        src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js"
        crossorigin
      ></script>

      <script
        src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
        crossorigin
      ></script>

      <script
        src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossorigin
      ></script>
    </Fragment>
  );
};

export default LayoutStep;
