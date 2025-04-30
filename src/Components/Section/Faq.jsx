import React, { Fragment, useState } from "react";
import useHostname from "../Provider/HostnameProvider";
import { useDarkModeContext } from "@/pages/context/DarkModeContext";
import { ReactSVG } from "react-svg";
import { Form } from "react-bootstrap";
import Link from "next/link";
import AccordionWrap from "../Path/AccordionWrap";

const Faq = () => {
  const originalUrl = useHostname();
  const { darkMode } = useDarkModeContext();

  return (
    <Fragment>
      <div className="grid grid-cols-1 gap-[24px] text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
        <div className="">
          <h4 className="font-semibold text__20 mb-1">
            Frequently Asked Questions
          </h4>
          <p className="text__16 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
            Find quick answers to common questions.
          </p>
        </div>

        <div className="flex items-center gap-2 w-full">
          <ReactSVG
            src={originalUrl + "/images/Search.svg"}
            beforeInjection={(svg) => {
              svg.setAttribute("fill", darkMode ? "white" : "#404040");
            }}
          />
          <input
            type="text"
            placeholder="Search FAQs..."
            className="placeholder:text-Mtext-text-disable dark:placeholder:text-Mtext-text-disable-dark bg-transparent outline-none hover:active:focus:outline-none dark:text-white cursor-pointer text__14 w-full"
          />
        </div>

        <div className="grid grid-cols-1 gap-4">
          <p className="text__14 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
            Account & Security
          </p>

          {[
            {
              title: "How do I reset my password?",
              desc: "Go to Settings > Security, enter your current password, then set a new one.",
            },
            {
              title: "How do I enable two-factor authentication (2FA)?",
              desc: "Go to Settings > Security, enter your current password, then set a new one.",
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
                <AccordionWrap title={obj.title} desc={obj.desc} />
              </>
            );
          })}
        </div>
        <div className="grid grid-cols-1 gap-4">
          <p className="text__14 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
            Transactions & Payments
          </p>

          {[
            {
              title: "Why is my payment failing?",
              desc: "Go to Settings > Security, enter your current password, then set a new one.",
            },
            {
              title: "How do I request a refund?",
              desc: "Go to Settings > Security, enter your current password, then set a new one.",
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
                <AccordionWrap title={obj.title} desc={obj.desc} />
              </>
            );
          })}
        </div>
        <div className="grid grid-cols-1 gap-4">
          <p className="text__14 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
            Contact & Support
          </p>

          {[
            {
              title: "How can I contact support?",
              desc: "Go to Settings > Security, enter your current password, then set a new one.",
            },
            {
              title: "What are support hours?",
              desc: "Go to Settings > Security, enter your current password, then set a new one.",
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
                <AccordionWrap title={obj.title} desc={obj.desc} />
              </>
            );
          })}
        </div>
        <div className="grid grid-cols-1 gap-4">
          <p className="text__14 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
            Still Need Help?
          </p>

          <div className="m-2">
            <h5 className="font-medium text__18 mb-1">Contact Support</h5>
            <p className="text__18 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
              If you couldn’t find what you were looking for, our team is happy
              to assist you.
            </p>
            <div className="flex items-center flex-wrap gap-3 mt-3">
              <Link
                href={"#!"}
                className="flex items-center gap-2  px-3 xl:px-4 py-2 xl:py-3 rounded-full border !border-Mborder-border-primary dark:!border-Mborder-border-primary-dark"
              >
                <ReactSVG
                  src={originalUrl + "/images/ChatCircleDots.svg"}
                  beforeInjection={(svg) => {
                    svg.setAttribute("fill", darkMode ? "white" : "#404040");
                  }}
                />
                <p className="font-semibold text__16 text-Mtext-text-secondary dark:text-Mtext-text-secondary-dark">
                  Live Chat
                </p>
              </Link>
              <Link
                href={"#!"}
                className="flex items-center gap-2  px-3 xl:px-4 py-2 xl:py-3 rounded-full border !border-Mborder-border-primary dark:!border-Mborder-border-primary-dark"
              >
                <ReactSVG
                  src={originalUrl + "/images/EnvelopeSimple.svg"}
                  beforeInjection={(svg) => {
                    svg.setAttribute("fill", darkMode ? "white" : "#404040");
                  }}
                />
                <p className="font-semibold text__16 text-Mtext-text-secondary dark:text-Mtext-text-secondary-dark">
                  Email Support
                </p>
              </Link>
              <Link
                href={"#!"}
                className="flex items-center gap-2  px-3 xl:px-4 py-2 xl:py-3 rounded-full border !border-Mborder-border-primary dark:!border-Mborder-border-primary-dark"
              >
                <ReactSVG
                  src={originalUrl + "/images/Phone.svg"}
                  beforeInjection={(svg) => {
                    svg.setAttribute("fill", darkMode ? "white" : "#404040");
                  }}
                />
                <p className="font-semibold text__16 text-Mtext-text-secondary dark:text-Mtext-text-secondary-dark">
                  Call Us
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Faq;
