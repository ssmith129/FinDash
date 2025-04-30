import React, { Fragment, useState } from "react";
import { ReactSVG } from "react-svg";
import useHostname from "../Provider/HostnameProvider";
import { useDarkModeContext } from "@/pages/context/DarkModeContext";
import Link from "next/link";

const UserMenu = ({ clickActionLogout }) => {
  const originalUrl = useHostname();
  const { darkMode } = useDarkModeContext();

  const [ToogleUserMenu, setToogleUserMenu] = useState(false);
  return (
    <Fragment>
      <div className="relative">
        <div
          onClick={() => setToogleUserMenu(!ToogleUserMenu)}
          className={
            "cursor-pointer flex items-center gap-2 p-[4px] !pr-[12px] rounded-full border !border-Mborder-border-secondary dark:!border-Mborder-border-secondary-dark " +
            (ToogleUserMenu
              ? "bg-Mbackgrounds-bg-tertiary dark:bg-Mbackgrounds-bg-tertiary-dark"
              : "")
          }
        >
          <img
            src={originalUrl + "/images/Ellipse 73.png"}
            className="w-[32px] h-[32px] rounded-full object-cover"
            alt=""
          />

          <div
            className={
              "transition-all duration-300 " +
              (ToogleUserMenu ? "-rotate-180" : "")
            }
          >
            <ReactSVG
              src={originalUrl + "/images/Chevron-down.svg"}
              beforeInjection={(svg) => {
                svg.setAttribute("fill", darkMode ? "white" : "#1A1A1A");
                svg.setAttribute("stroke", darkMode ? "white" : "#1A1A1A");
              }}
            />
          </div>
        </div>
        <div
          className={
            "absolute right-0 w-[230px] shadow-[32px_32px_40px_rgba(35,35,35,0.06)] p-[18px] rounded-[12px] bg-Mbackgrounds-bg-primary dark:bg-Mbackgrounds-bg-primary-dark border !border-Mborder-border-primary dark:!border-Mborder-border-primary-dark grid grid-cols-1 gap-2 transition-all duration-300 " +
            (ToogleUserMenu
              ? "top-[110%]"
              : "top-[130%] opacity-0 pointer-events-none")
          }
        >
          <div className="grid grid-cols-1 gap-3">
            {[
              {
                icon: "User 2.svg",
                title: "Edit Profile",
              },
              {
                icon: "LockKey.svg",
                title: "Password & Security",
              },
              {
                icon: "CreditCard 2.svg",
                title: "Billing & Subscription",
              },
              {
                icon: "ShieldCheck.svg",
                title: "Privacy Policy",
              },
              {
                icon: "ListBullets 2.svg",
                title: "FAQs",
              },
              {
                icon: "ShieldWarning.svg",
                title: "Terms & Conditions",
              },
            ].map((item, index) => (
              <Link
                key={index}
                href={{
                  pathname: "/dashboard/settings", // Halaman tujuan
                  query: { title: item.title }, // Data yang ingin dikirim
                }}
                className="inline-block w-full transition-all duration-200 opacity-60 hover:opacity-100"
              >
                <div className="flex items-center justify-between">
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
                    <p
                      className={`font-semibold text__12  ${
                        item.style ||
                        "text-Mtext-text-secondary dark:text-Mtext-text-secondary-dark"
                      }`}
                    >
                      {item.title}
                    </p>
                  </div>
                  <ReactSVG
                    src={`${originalUrl}/images/Chevron-right 2.svg`}
                    beforeInjection={(svg) => {
                      svg.setAttribute("fill", darkMode ? "white" : "#404040");
                    }}
                    className="w-4 h-4"
                  />
                </div>
              </Link>
            ))}

            <div
              onClick={clickActionLogout}
              className="cursor-pointer inline-block w-full transition-all duration-200 opacity-60 hover:opacity-100"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ReactSVG
                    src={`${originalUrl}/images/SignOut.svg`}
                    beforeInjection={(svg) => {
                      svg.setAttribute("fill", darkMode ? "white" : "#404040");
                    }}
                  />
                  <p
                    className={`font-semibold text__12 text-Malerts-alerts-error`}
                  >
                    Logout
                  </p>
                </div>
                <ReactSVG
                  src={`${originalUrl}/images/Chevron-right 2.svg`}
                  beforeInjection={(svg) => {
                    svg.setAttribute("fill", darkMode ? "white" : "#404040");
                  }}
                  className="w-4 h-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default UserMenu;
