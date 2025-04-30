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

const Layout = ({
  children,
  title = "Dashboard",
  description = "Dashboard Desc",
  NavTitle = "Dashboard",
}) => {
  const originalUrl = useHostname();

  const { darkMode, setDarkMode, toggleTheme } = useDarkModeContext();

  const router = useRouter();
  const currentPath = router.pathname;

  // const isActive = (path) => currentPath === path;

  const isActive = (path) => {
    if (path === "/dashboard") {
      return currentPath === "/dashboard"; // Hanya aktif jika currentPath persis /dashboard
    }
    return currentPath.startsWith(path);
  };

  const [ToogleSidebar, setToogleSidebar] = useState(false);

  const [ToogleAction, setToogleAction] = useState("");

  const menuData = [
    { icon: "ListBullets.svg", title: "Recent Transaction" },
    { icon: "ChartPieSlice.svg", title: "Analytics" },
    { icon: "ListBullets-1.svg", title: "Transaction" },
    { icon: "User.svg", title: "Edit Profile" },
    { icon: "FileText.svg", title: "Invoice" },
    { icon: "CreditCard.svg", title: "Billing & Subscription" },
    { icon: "Wallet-1.svg", title: "Wallet" },
    { icon: "Wallet 2.svg", title: "Total Balance" },
  ];

  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = searchQuery
    ? _.filter(menuData, (item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : menuData;

  // Effect to listen for ESC key press to clear search query
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        setSearchQuery(""); // Clear the search query on ESC key press
      }
    };

    // Add event listener for ESC key
    window.addEventListener("keydown", handleEscKey);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("keydown", handleEscKey);
    };
  }, []);

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

      <div className="w-full overflow-hidden bg-Mbackgrounds-bg-primary dark:!bg-Mbackgrounds-bg-primary-dark min-h-screen">
        <div className="flex w-full h-full">
          {/* start:sidebar */}
          <div
            className={
              "transition-all duration-300 w-[80%] xs:w-[257px] fixed h-full top-0 z-[98] lg:z-[70] bg-Mneutral-900 " +
              (ToogleSidebar ? "left-0" : "-left-[100vh] lg:left-0")
            }
          >
            <div className="flex flex-wrap h-full">
              <div className="flex flex-wrap w-full h-max">
                <div className="h-[88px] px-4 pt-3 flex flex-wrap items-center w-full">
                  <div className="flex items-center justify-between w-full">
                    <Link
                      href="/dashboard"
                      className="flex items-center gap-2 w-full"
                    >
                      <img src={originalUrl + "/images/logo-64.svg"} alt="" />
                      <span className="font-semibold text__16 text-white">
                        Findash
                      </span>
                    </Link>
                    <div
                      className="inline-block lg:hidden"
                      onClick={() => setToogleSidebar(!ToogleSidebar)}
                    >
                      <ClosedIcon />
                    </div>
                  </div>
                </div>

                <div className="mt-[40px] flex flex-wrap gap-2 w-full self-start ">
                  <p className="pl-6 text-white text__14 opacity-50">MANAGE</p>
                  <Link
                    href="/dashboard"
                    className={
                      "relative pl-6 cursor-pointer w-full " +
                      (isActive("/dashboard")
                        ? "bg-[rgba(255,255,255,0.1)]"
                        : "")
                    }
                  >
                    <div
                      className={
                        "absolute w-[4px] h-[20px] left-0 top-1/2 -translate-y-1/2 bg-white pointer-events-none " +
                        (isActive("/dashboard") ? "opacity-100" : "opacity-0")
                      }
                    ></div>
                    <div className="flex items-center gap-2 h-[44px] lg:h-[48px]">
                      <ReactSVG
                        src={originalUrl + "/images/Icon - Dashboard.svg"}
                        beforeInjection={(svg) => {
                          svg.setAttribute("fill", "white");
                        }}
                      />
                      <p className={"text__16 text-white"}>Dashboard</p>
                    </div>
                  </Link>
                  <Link
                    href="/dashboard/transaction"
                    className={
                      "relative pl-6 cursor-pointer w-full " +
                      (isActive("/dashboard/transaction")
                        ? "bg-[rgba(255,255,255,0.1)]"
                        : "")
                    }
                  >
                    <div
                      className={
                        "absolute w-[4px] h-[20px] left-0 top-1/2 -translate-y-1/2 bg-white pointer-events-none " +
                        (isActive("/dashboard/transaction")
                          ? "opacity-100"
                          : "opacity-0")
                      }
                    ></div>
                    <div className="flex items-center gap-2 h-[44px] lg:h-[48px]">
                      <ReactSVG
                        src={originalUrl + "/images/Wallet.svg"}
                        beforeInjection={(svg) => {
                          svg.setAttribute("fill", "white");
                        }}
                      />
                      <p className={"text__16 text-white"}>Transaction</p>
                    </div>
                  </Link>
                  <Link
                    href="/dashboard/my-wallet"
                    className={
                      "relative pl-6 cursor-pointer w-full " +
                      (isActive("/dashboard/my-wallet")
                        ? "bg-[rgba(255,255,255,0.1)]"
                        : "")
                    }
                  >
                    <div
                      className={
                        "absolute w-[4px] h-[20px] left-0 top-1/2 -translate-y-1/2 bg-white pointer-events-none " +
                        (isActive("/dashboard/my-wallet")
                          ? "opacity-100"
                          : "opacity-0")
                      }
                    ></div>
                    <div className="flex items-center gap-2 h-[44px] lg:h-[48px]">
                      <ReactSVG
                        src={originalUrl + "/images/Swap.svg"}
                        beforeInjection={(svg) => {
                          svg.setAttribute("fill", "white");
                        }}
                      />
                      <p className={"text__16 text-white"}>My Wallet</p>
                    </div>
                  </Link>
                  <Link
                    href="/dashboard/analytics"
                    className={
                      "relative pl-6 cursor-pointer w-full " +
                      (isActive("/dashboard/analytics")
                        ? "bg-[rgba(255,255,255,0.1)]"
                        : "")
                    }
                  >
                    <div
                      className={
                        "absolute w-[4px] h-[20px] left-0 top-1/2 -translate-y-1/2 bg-white pointer-events-none " +
                        (isActive("/dashboard/analytics")
                          ? "opacity-100"
                          : "opacity-0")
                      }
                    ></div>
                    <div className="flex items-center gap-2 h-[44px] lg:h-[48px]">
                      <ReactSVG
                        src={originalUrl + "/images/Icon - Graph.svg"}
                        beforeInjection={(svg) => {
                          svg.setAttribute("fill", "white");
                        }}
                      />
                      <p className={"text__16 text-white"}>Analytics</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="flex flex-wrap h-max gap-3 self-end pb-4 w-full">
                <Link
                  href="/dashboard/settings"
                  className={
                    "relative pl-6 cursor-pointer w-full " +
                    (isActive("/dashboard/settings")
                      ? "bg-[rgba(255,255,255,0.1)]"
                      : "opacity-50 hover:!opacity-100 transition-all duration-200")
                  }
                >
                  <div
                    className={
                      "absolute w-[4px] h-[20px] left-0 top-1/2 -translate-y-1/2 bg-white pointer-events-none " +
                      (isActive("/dashboard/settings")
                        ? "opacity-100"
                        : "opacity-0")
                    }
                  ></div>
                  <div className="flex items-center gap-2 h-[44px] lg:h-[48px]">
                    <ReactSVG
                      src={originalUrl + "/images/Setting.svg"}
                      beforeInjection={(svg) => {
                        svg.setAttribute("fill", "white");
                      }}
                    />
                    <p className={"text__16 text-white"}>Settings</p>
                  </div>
                </Link>
                <div className="relative pl-6 w-full">
                  <div className="grid grid-cols-2 gap-2 w-full p-1 rounded-full bg-[#262626]">
                    <div
                      onClick={toggleTheme}
                      className={
                        "px-[20px] py-[4px] rounded-full  flex items-center justify-center gap-2 cursor-pointer " +
                        (darkMode ? "" : "bg-white")
                      }
                    >
                      <ReactSVG
                        src={originalUrl + "/images/SunDim.svg"}
                        beforeInjection={(svg) => {
                          svg.setAttribute(
                            "fill",
                            darkMode ? "#A3A3A3" : "#1A1A1A"
                          );
                        }}
                      />
                      <p
                        className={
                          "text__12  " +
                          (darkMode ? "text-[#A3A3A3]" : "text-[#1A1A1A]")
                        }
                      >
                        Light
                      </p>
                    </div>
                    <div
                      onClick={toggleTheme}
                      className={
                        "px-[20px] py-[4px] rounded-full  flex items-center justify-center gap-2 cursor-pointer " +
                        (darkMode ? "bg-white" : "")
                      }
                    >
                      <ReactSVG
                        src={originalUrl + "/images/Moon.svg"}
                        beforeInjection={(svg) => {
                          svg.setAttribute(
                            "fill",
                            darkMode ? "#1A1A1A" : "#A3A3A3"
                          );
                        }}
                      />
                      <p
                        className={
                          "text__12  " +
                          (darkMode ? "text-[#1A1A1A]" : "text-[#A3A3A3]")
                        }
                      >
                        Dark
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end:sidebar */}

          <div
            onClick={() => setToogleSidebar(!ToogleSidebar)}
            className={
              "lg:hidden block fixed transition-all duration-300 w-full h-full top-0 bg-[#0A0A0A] opacity-30 z-[91] " +
              (ToogleSidebar ? "left-0" : "-left-[100%]")
            }
          ></div>

          {/* start:navbar */}
          <div className="transition-all duration-300 w-full lg:w-[calc(100%_-_257px)] lg:ml-[257px] h-[88px] bg-white dark:!bg-Mbackgrounds-bg-primary-dark dark:!bg-MGrayscale_800 fixed z-[70] flex items-center justify-center lg:px-3">
            <Container>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div
                    onClick={() => setToogleSidebar(!ToogleSidebar)}
                    className="inline-block lg:hidden cursor-pointer"
                  >
                    <TextAlignJustifyCenterIcon
                      color={darkMode ? "white" : "#171717"}
                    />
                  </div>
                  <h4 className="font-semibold text__32 dark:text-white clamp-1">
                    {NavTitle}
                  </h4>
                </div>

                <div className="flex items-center gap-3 md:gap-4">
                  <div
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => setToogleAction("search")}
                  >
                    <ReactSVG
                      src={originalUrl + "/images/Search.svg"}
                      beforeInjection={(svg) => {
                        svg.setAttribute(
                          "fill",
                          darkMode ? "white" : "#404040"
                        );
                      }}
                    />
                    <input
                      onClick={() => setToogleAction("search")}
                      type="text"
                      placeholder="Search..."
                      className="placeholder:text-Mtext-text-disable dark:placeholder:text-Mtext-text-disable-dark bg-transparent outline-none hover:active:focus:outline-none dark:text-white cursor-pointer hidden md:block"
                    />
                  </div>

                  <NotificationMenu />

                  <UserMenu
                    clickActionLogout={() => setToogleAction("logout")}
                  />
                </div>
              </div>
            </Container>
          </div>
          {/* end:navbar */}

          <div className="transition-all duration-300 w-full lg:w-[calc(100%_-_257px)] lg:ml-[257px] lg:pt-6 pb-6 mt-[88px] lg:px-3 relative">
            <div
              className={
                "w-[90%] md:w-[580px] bg-Mbackgrounds-bg-primary dark:bg-Mbackgrounds-bg-primary-dark p-[32px] rounded-[20px] fixed left-1/2 -translate-x-1/2  z-[90] transition-all duration-300 grid grid-cols-1 gap-[24px] border !border-Mborder-border-primary dark:!border-Mborder-border-primary-dark " +
                (ToogleAction == "search"
                  ? "top-[15%]"
                  : "top-[25%] opacity-0 pointer-events-none")
              }
            >
              <div className="flex items-center gap-2 cursor-pointer">
                <ReactSVG
                  src={originalUrl + "/images/Search.svg"}
                  beforeInjection={(svg) => {
                    svg.setAttribute("fill", darkMode ? "white" : "#404040");
                  }}
                />
                <input
                  onClick={() => setToogleAction("search")}
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="placeholder:text-Mtext-text-disable dark:placeholder:text-Mtext-text-disable-dark bg-transparent outline-none hover:active:focus:outline-none dark:text-white w-full"
                />

                <div
                  onClick={() => (searchQuery != "" ? setSearchQuery("") : "")}
                  className={
                    "flex items-center gap-2 " +
                    (searchQuery != "" ? "" : "opacity-0 max-w-0")
                  }
                >
                  <p className="font-semibold text__12 text-Mtext-text-secondary dark:text-Mtext-text-secondary-dark">
                    ESC
                  </p>

                  <ReactSVG
                    src={`${originalUrl}/images/Close3.svg`}
                    beforeInjection={(svg) => {
                      svg.setAttribute("fill", darkMode ? "white" : "#404040");
                    }}
                  />
                </div>
              </div>
              <div className="w-full h-[1px] bg-Mborder-border-secondary dark:bg-Mborder-border-secondary-dark"></div>

              {filteredData.length > 0 ? (
                <div
                  className={
                    "grid gap-[24px] " +
                    (searchQuery != "" ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2")
                  }
                >
                  {filteredData.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between gap-2"
                    >
                      <div className="flex items-center gap-2">
                        <ReactSVG
                          src={`${originalUrl}/images/${item.icon}`}
                          beforeInjection={(svg) => {
                            svg.setAttribute(
                              "fill",
                              darkMode ? "white" : "#404040"
                            );
                          }}
                        />
                        <p className="text__16 text-Mtext-text-secondary dark:text-Mtext-text-secondary-dark">
                          {item.title}
                        </p>
                      </div>
                      {searchQuery != "" ? (
                        <ReactSVG
                          src={`${originalUrl}/images/Arrow - Right 4.svg`}
                          beforeInjection={(svg) => {
                            svg.setAttribute(
                              "fill",
                              darkMode ? "white" : "#404040"
                            );
                          }}
                        />
                      ) : (
                        ""
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="w-full py-[32px] flex items-center justify-center">
                  <div className="text-center">
                    <ReactSVG
                      className="flex items-center justify-center mb-2"
                      src={`${originalUrl}/images/FileMagnifyingGlass.svg`}
                      beforeInjection={(svg) => {
                        svg.setAttribute(
                          "fill",
                          darkMode ? "white" : "#A3A3A3"
                        );
                      }}
                    />
                    <p className="text__18 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
                      No result found
                    </p>
                  </div>
                </div>
              )}
            </div>

            {children}
          </div>
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

export default Layout;
