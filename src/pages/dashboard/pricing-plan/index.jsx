import React, { Fragment, useRef, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import useHostname from "@/Components/Provider/HostnameProvider";
import { ReactSVG } from "react-svg";
import { useDarkModeContext } from "@/pages/context/DarkModeContext";
import LayoutStep from "@/Components/Layout/LayoutStep";
import Link from "next/link";

const Index = () => {
  const originalUrl = useHostname();
  const { darkMode } = useDarkModeContext();

  const [tooglePrice, settooglePrice] = useState("Monthly");
  return (
    <Fragment>
      <LayoutStep
        title="Pricing Plan"
        description="Pricing Plan"
        NavTitle={"Pricing Plan"}
        step={false}
      >
        <Container>
          <section className="pt-[40px] lg:pt-0 pb-[40px]">
            <div className="text-center">
              <div className="mb-[32px]">
                <h4 className="font-semibold text__32 text-Mtext-text-primary dark:text-Mtext-text-primary-dark mb-1">
                  Pricing Plan
                </h4>
                <p className="text__16 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
                  Get advanced tools, priority support, and <br /> premium
                  insights.
                </p>
              </div>

              <div className="inline-block">
                <div className="flex items-center justify-center p-1 rounded-full bg-Mbackgrounds-bg-tertiary dark:bg-Mbackgrounds-bg-tertiary-dark">
                  <div
                    onClick={() => settooglePrice("Monthly")}
                    className={
                      "cursor-pointer min-w-[90px] px-3 py-2 rounded-full font-semibold text__14  " +
                      (tooglePrice == "Monthly"
                        ? "bg-white border !border-Mborder-border-primary dark:!border-Mborder-border-primary-dark"
                        : "text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark")
                    }
                  >
                    Monthly
                  </div>
                  <div
                    onClick={() => settooglePrice("Yearly")}
                    className={
                      "cursor-pointer min-w-[90px] px-3 py-2 rounded-full font-semibold text__14  " +
                      (tooglePrice == "Yearly"
                        ? "bg-white border !border-Mborder-border-primary dark:!border-Mborder-border-primary-dark"
                        : "text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark")
                    }
                  >
                    Yearly
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full xl:w-[1150px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4 mt-[32px]">
              <div className="flex items-center justify-center">
                <div className="p-[24px] rounded-3xl bg-Mbackgrounds-bg-primary dark:bg-Mbackgrounds-bg-primary-dark border !border-Mborder-border-primary dark:!border-Mborder-border-primary-dark">
                  <h5 className="font-semibold text__20 mb-1">Free Plan</h5>
                  <p className="text__14 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark mb-1">
                    Perfect for individuals who need basic financial tools.
                  </p>
                  <div className="flex items-center gap-1">
                    <h4 className="font-semibold text__40  text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
                      $0
                    </h4>
                    <p className="text__16 text-Mtext-text-disable dark:text-Mtext-text-disable-dark">
                      /month
                    </p>
                  </div>

                  <div className="mt-3 grid grid-cols-1 gap-2 mb-[20px]">
                    {[
                      "Basic financial tracking",
                      "Manual expense entry",
                      "Single account integration",
                      "Basic reporting",
                      "No advanced analytics",
                      "No multi-account support",
                      "No premium insights",
                    ].map((obj) => {
                      return (
                        <div className="flex items-center gap-2">
                          <ReactSVG
                            src={originalUrl + "/images/Checkasds.svg"}
                            beforeInjection={(svg) => {
                              svg.setAttribute(
                                "fill",
                                darkMode ? "white" : "#404040"
                              );
                            }}
                          />
                          <p className="text__16 font-medium text-Mtext-text-secondary dark:text-Mtext-text-secondary-dark">
                            {obj}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  <Link
                    href="/dashboard/pricing-plan/upgrade-to-pro"
                    className="rounded-full inline-block text-center font-semibold text__18 bg-Mbackgrounds-bg-disable dark:bg-Mbackgrounds-bg-disable-dark text-Mtext-text-secondary dark:text-Mtext-text-secondary-dark opacity-40 w-full btnClass !py-[15px]"
                  >
                    Current Plan
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="px-2 pb-2 pt-3 bg-Mbrand-brand-primary rounded-[24px]">
                  <p className="text-center font-medium text__18 text-white pb-3">
                    Most Popular · Save 20%
                  </p>
                  <div className="p-[20px] rounded-[20px] text-Mtext-text-primary dark:text-Mtext-text-primary-dark bg-Mbackgrounds-bg-primary dark:bg-Mbackgrounds-bg-primary-dark">
                    <h5 className="font-semibold text__20 mb-1">Pro Plan</h5>
                    <p className="text__14 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark mb-1">
                      Unlock premium financial tools for smarter money
                      management!
                    </p>
                    <div className="flex items-center gap-1">
                      <h4 className="font-semibold text__40">$9.99</h4>
                      <p className="text__16 text-Mtext-text-disable dark:text-Mtext-text-disable-dark">
                        /month
                      </p>
                    </div>

                    <div className="mt-3 grid grid-cols-1 gap-2 mb-[20px]">
                      {[
                        "Everything in Free, plus:",
                        "Advanced budgeting & insights",
                        "Automated expense categorization",
                        "Multi-account integration",
                        "Custom financial reports",
                        "Priority customer support",
                        "Bank & investment syncing",
                      ].map((obj) => {
                        return (
                          <div className="flex items-center gap-2">
                            <ReactSVG
                              src={originalUrl + "/images/Checkasds.svg"}
                              beforeInjection={(svg) => {
                                svg.setAttribute(
                                  "fill",
                                  darkMode ? "white" : "#404040"
                                );
                              }}
                            />
                            <p className="text__16 font-medium text-Mtext-text-secondary dark:text-Mtext-text-secondary-dark">
                              {obj}
                            </p>
                          </div>
                        );
                      })}
                    </div>

                    <Link
                      href="/dashboard/pricing-plan/upgrade-to-pro"
                      className="rounded-full inline-block text-center font-semibold text__18 text-white !py-[15px] bg-Mbrand-brand-primary !border-MPrimary btnClass w-full cursor-pointer shadow-[0px_4px_20px_rgba(1,_122,_255,_0.3),_inset_0px_1px_0px_rgba(255,_255,_255,_0.4),_inset_0px_-4px_13px_rgba(0,_0,_0,_0.2)]"
                    >
                      Upgrade to Pro
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="p-[24px] rounded-3xl bg-Mbackgrounds-bg-primary dark:bg-Mbackgrounds-bg-primary-dark border !border-Mborder-border-primary dark:!border-Mborder-border-primary-dark">
                  <h5 className="font-semibold text__20 mb-1">Business Plan</h5>
                  <p className="text__14 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark mb-1">
                    For business owners & freelancers managing multiple
                    finances.
                  </p>
                  <div className="flex items-center gap-1">
                    <h4 className="font-semibold text__40 text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
                      $19.99
                    </h4>
                    <p className="text__16 text-Mtext-text-disable dark:text-Mtext-text-disable-dark">
                      /month
                    </p>
                  </div>

                  <div className="mt-3 grid grid-cols-1 gap-2 mb-[20px]">
                    {[
                      "Everything in Pro, plus:",
                      "Unlimited bank & account connections",
                      "Team collaboration",
                      "Export financial reports (CSV & PDF)",
                      "Automated invoice tracking",
                      "Tax calculations & insights",
                    ].map((obj) => {
                      return (
                        <div className="flex items-center gap-2">
                          <ReactSVG
                            src={originalUrl + "/images/Checkasds.svg"}
                            beforeInjection={(svg) => {
                              svg.setAttribute(
                                "fill",
                                darkMode ? "white" : "#404040"
                              );
                            }}
                          />
                          <p className="text__16 font-medium text-Mtext-text-secondary dark:text-Mtext-text-secondary-dark">
                            {obj}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  <Link
                    href="/dashboard/pricing-plan/upgrade-to-pro"
                    className="rounded-full inline-block text-center font-semibold text__18 border !border-Mborder-border-primary dark:!border-Mborder-border-primary-dark text-Mtext-text-secondary dark:text-Mtext-text-secondary-dark w-full btnClass !py-[15px]"
                  >
                    Upgrade to Business
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </Container>
      </LayoutStep>
    </Fragment>
  );
};

export default Index;
