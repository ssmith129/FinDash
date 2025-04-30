import React, { Fragment, useState } from "react";
import useHostname from "../Provider/HostnameProvider";
import { useDarkModeContext } from "@/pages/context/DarkModeContext";
import { ReactSVG } from "react-svg";
import { Form } from "react-bootstrap";

const BillingSubscription = () => {
  const originalUrl = useHostname();
  const { darkMode } = useDarkModeContext();

  const [SelectCard, setSelectCard] = useState("Debit Card");
  return (
    <Fragment>
      <div className="grid grid-cols-1 gap-[24px] text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
        <div className="">
          <h4 className="font-semibold text__20 mb-1">
            Billing & Subscription
          </h4>
          <p className="text__16 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
            Manage your subscription, update payment methods, and view invoices.
          </p>
        </div>

        <div className="p-[24px] rounded-3xl bg-Mbackgrounds-bg-primary dark:bg-Mbackgrounds-bg-primary-dark border !border-Mborder-border-primary dark:!border-Mborder-border-primary-dark">
          <p className="text__14 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark mb-1">
            Your Plan
          </p>
          <h4 className="font-semibold text__32 mb-2">Pro Plan</h4>
          <div className="flex items-center flex-wrap gap-2 text__16 mb-6">
            <span className="text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
              Next payment date:
            </span>
            <span className="font-medium text-Mtext-text-secondary dark:text-Mtext-text-secondary-dark">
              April 20, 2025
            </span>
            <span className="text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
              ·
            </span>
            <span className="text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
              Auto-Renewal:
            </span>
            <span className="font-medium text-Mtext-text-secondary dark:text-Mtext-text-secondary-dark">
              Enabled
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 xl:gap-4 w-max">
            <div className="rounded-full inline-block text-center font-semibold text__14 text-white py-[8px] xl:py-[15px] px-2 xl:px-4 bg-Mbrand-brand-primary !border-MPrimary btnClass w-full cursor-pointer shadow-[0px_4px_20px_rgba(1,_122,_255,_0.3),_inset_0px_1px_0px_rgba(255,_255,_255,_0.4),_inset_0px_-4px_13px_rgba(0,_0,_0,_0.2)]">
              Upgrade Plan
            </div>
            <div className="rounded-full inline-block text-center font-semibold text__14 text-Mtext-text-secondary dark:text-Mtext-text-secondary-dark py-[8px] xl:py-[15px] px-2 xl:px-4 btnClass w-full cursor-pointer">
              Cancel Subscription
            </div>
          </div>
        </div>

        <div className=" grid grid-cols-1 gap-3">
          <h5 className="font-semibold text__18">Payment Method</h5>

          {[
            {
              icon: originalUrl + "/images/image 1.png",
              title: "Debit Card",
              desc: "Master Card ending 5563",
            },
          ].map((obj, idx) => {
            return (
              <>
                {idx > 0 ? (
                  <>
                    <div className="w-full h-[1px] bg-Mborder-border-primary dark:bg-Mborder-border-primary-dark"></div>
                  </>
                ) : (
                  ""
                )}
                <div
                  className="flex items-center gap-2 justify-between cursor-pointer"
                  onClick={() => setSelectCard(obj.title)}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-[68px] h-[48px] flex items-center justify-center border !border-Mborder-border-primary dark:!border-Mborder-border-primary rounded-lg">
                      <img src={obj.icon} alt="" />
                    </div>

                    <div className="">
                      <h5 className="font-medium text__16 text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
                        {obj.title}{" "}
                        <span className="text__14 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
                          · Primary
                        </span>
                      </h5>
                      <p className="text__14 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
                        {obj.desc}
                      </p>
                    </div>
                  </div>
                  <div
                    className={
                      "w-[24px] h-[24px] rounded-full border flex items-center justify-center " +
                      (SelectCard == obj.title
                        ? "!border-Malerts-alerts-success"
                        : "!border-Micon-icon-disable")
                    }
                  >
                    {SelectCard == obj.title ? (
                      <div className="w-4 h-4 rounded-full bg-Malerts-alerts-success"></div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </>
            );
          })}

          <div className="mt-3">
            <div className="flex items-center gap-4 w-max ml-auto">
              <div className="rounded-full flex items-center justify-center gap-2 text-center font-semibold text__14 text-Mtext-text-primary dark:text-Mtext-text-primary-dark !py-[10px] !px-4 border !border-Mborder-border-primary dark:!border-Mborder-border-primary-dark cursor-pointer flex-shrink-0 w-max">
                <ReactSVG
                  src={`${originalUrl}/images/Add 3.svg`}
                  beforeInjection={(svg) => {
                    svg.setAttribute("fill", darkMode ? "white" : "#404040");
                  }}
                />
                Add New Payment
              </div>
              <div className="rounded-full inline-block text-center font-semibold text__14 text-Mtext-text-secondary dark:text-Mtext-text-secondary-dark !py-[10px] !px-2 btnClass w-full cursor-pointer">
                Remove
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <h5 className="font-semibold text__18 mb-3">Billing History</h5>

          <div className="rounded-xl border !border-Mborder-border-primary dark:!border-Mborder-border-primary-dark p-4">
            <div className="grid grid-cols-1 gap-3">
              <div className="grid grid-cols-3 xl:grid-cols-5">
                <div className="text__14 text-Mtext-text-tertiary dark:text-Mtext-text-secondary-dark">
                  Date
                </div>
                <div className="text__14 text-Mtext-text-tertiary dark:text-Mtext-text-secondary-dark">
                  Plan
                </div>
                <div className="xl:block hidden text__14 text-Mtext-text-tertiary dark:text-Mtext-text-secondary-dark">
                  Amount
                </div>
                <div className="xl:block hidden text__14 text-Mtext-text-tertiary dark:text-Mtext-text-secondary-dark">
                  Status
                </div>
                <div className="text__14 text-Mtext-text-tertiary dark:text-Mtext-text-secondary-dark">
                  Invoice
                </div>
              </div>
              {[
                {
                  date: "April 20, 2025",
                  plan: "Pro Plan",
                  amount: "$99.99",
                  status: "Paid",
                },
                {
                  date: "April 20, 2024",
                  plan: "Pro Plan",
                  amount: "$99.99",
                  status: "Paid",
                },
              ].map((obj, index) => {
                return (
                  <div className="grid grid-cols-3 xl:grid-cols-5 text__16 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
                    <div className="">{obj.date}</div>
                    <div>
                      <p className="text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
                        {obj.plan}
                      </p>
                    </div>
                    <div className="xl:block hidden ">{obj.amount}</div>

                    <div className="xl:block hidden ">
                      <div
                        className={`inline-block text__14 font-medium ${
                          obj.status === "Paid"
                            ? "text-Malerts-alerts-success bg-Malerts-alerts-success-bg"
                            : "text-Malerts-alerts-warning bg-Malerts-alerts-warning-bg"
                        } px-4 py-1 rounded-full`}
                      >
                        {obj.status}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <ReactSVG
                          src={`${originalUrl}/images/FileText 2.svg`}
                          beforeInjection={(svg) => {
                            svg.setAttribute(
                              "fill",
                              darkMode ? "white" : "#404040"
                            );
                          }}
                        />
                        <p className="text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
                          {obj.plan}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BillingSubscription;
