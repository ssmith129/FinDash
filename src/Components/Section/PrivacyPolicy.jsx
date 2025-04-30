import React, { Fragment, useState } from "react";
import useHostname from "../Provider/HostnameProvider";
import { useDarkModeContext } from "@/pages/context/DarkModeContext";
import { ReactSVG } from "react-svg";
import { Form } from "react-bootstrap";
import Link from "next/link";

const PrivacyPolicy = () => {
  const originalUrl = useHostname();
  const { darkMode } = useDarkModeContext();

  return (
    <Fragment>
      <div className="grid grid-cols-1 gap-[24px] text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
        <div className="">
          <h4 className="font-semibold text__20 mb-1">
            Privacy & Data Protection
          </h4>
          <p className="text__16 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
            Your privacy matters. Learn how we collect, use, and protect your
            data.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-2">
          <h5 className="font-medium text__18">Privacy Overview</h5>
          <ul className="list-decimal pl-5 text__18 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
            <li>We collect data to enhance your experience.</li>
            <li>We do not sell your personal information.</li>
            <li>You control your privacy settings.</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 gap-2">
          <h5 className="font-medium text__18">
            Need a summary? Here’s what you need to know:
          </h5>
          <ul className="list-none text__18 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
            <li className="flex items-center gap-2">
              {" "}
              <ReactSVG
                src={`${originalUrl}/images/Check 4.svg`}
                beforeInjection={(svg) => {
                  svg.setAttribute("fill", darkMode ? "white" : "#404040");
                }}
              />{" "}
              Your Data – We collect only necessary information.
            </li>
            <li className="flex items-center gap-2">
              {" "}
              <ReactSVG
                src={`${originalUrl}/images/Check 4.svg`}
                beforeInjection={(svg) => {
                  svg.setAttribute("fill", darkMode ? "white" : "#404040");
                }}
              />{" "}
              Security – We use encryption to protect your data.
            </li>
            <li className="flex items-center gap-2">
              {" "}
              <ReactSVG
                src={`${originalUrl}/images/Check 4.svg`}
                beforeInjection={(svg) => {
                  svg.setAttribute("fill", darkMode ? "white" : "#404040");
                }}
              />{" "}
              Control – You can manage your privacy settings anytime.
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-1 gap-2">
          <h5 className="font-medium text__18">Your Privacy Settings</h5>
          <ul className="list-none text__18 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
            <li className="flex items-center gap-2">
              {" "}
              <ReactSVG
                src={`${originalUrl}/images/Check 4.svg`}
                beforeInjection={(svg) => {
                  svg.setAttribute("fill", darkMode ? "white" : "#404040");
                }}
              />{" "}
              Personalized Ads (Adjust ad preferences)
            </li>
            <li className="flex items-center gap-2">
              {" "}
              <ReactSVG
                src={`${originalUrl}/images/Check 4.svg`}
                beforeInjection={(svg) => {
                  svg.setAttribute("fill", darkMode ? "white" : "#404040");
                }}
              />{" "}
              Data Sharing with Partners (Allow or restrict data sharing)
            </li>
            <li className="flex items-center gap-2">
              {" "}
              <ReactSVG
                src={`${originalUrl}/images/Check 4.svg`}
                beforeInjection={(svg) => {
                  svg.setAttribute("fill", darkMode ? "white" : "#404040");
                }}
              />{" "}
              Cookies & Tracking (Manage website tracking settings)
            </li>
          </ul>
        </div>

        <Link
          href="#!"
          className="font-semibold text__14 text-white w-max bg-Malerts-alerts-error rounded-full px-[12px] py-[10px] inline-block"
        >
          Delete My Account
        </Link>
      </div>
    </Fragment>
  );
};

export default PrivacyPolicy;
