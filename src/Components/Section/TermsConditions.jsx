import React, { Fragment, useState } from "react";
import useHostname from "../Provider/HostnameProvider";
import { useDarkModeContext } from "@/pages/context/DarkModeContext";
import { ReactSVG } from "react-svg";
import { Form } from "react-bootstrap";
import Link from "next/link";

const TermsConditions = () => {
  const originalUrl = useHostname();
  const { darkMode } = useDarkModeContext();

  const content = {
    sections: [
      {
        title: "Eligibility & Account Use",
        items: [
          "You must be at least 18 years old to use our services.",
          "You are responsible for maintaining the security of your account.",
        ],
      },
      {
        title: "Payments & Subscriptions",
        items: [
          "All payments are non-refundable unless stated otherwise.",
          "You may cancel your subscription anytime in Settings > Billing & Subscription.",
        ],
      },
      {
        title: "User Conduct & Restrictions",
        items: [
          "You may not use our services for illegal activities or fraud.",
          "We reserve the right to suspend or terminate accounts that violate our policies.",
        ],
      },
      {
        title: "Privacy & Data Protection",
        items: [
          "Your data is processed in accordance with our Privacy Policy.",
          "We do not sell or share personal information without consent.",
        ],
      },
      {
        title: "Liability & Disclaimers",
        items: [
          "We are not responsible for third-party service failures.",
          "We limit liability as permitted by law.",
        ],
      },
    ],
  };

  return (
    <Fragment>
      <div className="grid grid-cols-1 gap-[24px] text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
        <div className="">
          <h4 className="font-semibold text__20 mb-1">Terms & Conditions</h4>
          <p className="text__16 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark mb-1">
            By using our services, you agree to the following terms.
          </p>
          <p className="text__14 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
            Last Updated:{" "}
            <span className="font-medium text__16 text-Mtext-text-secondary dark:text-Mtext-text-secondary-dark">
              March 2025
            </span>
          </p>
        </div>

        <div className="">
          <Link
            href={"#!"}
            className="flex items-center gap-2  px-3 py-[10px] w-max rounded-full border !border-Mborder-border-primary dark:!border-Mborder-border-primary-dark"
          >
            <p className="font-semibold text__14 text-Mtext-text-secondary dark:text-Mtext-text-secondary-dark">
              Download PDF
            </p>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <p className="text__14 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
            Overview of Key Terms
          </p>

          {content.sections.map((section) => (
            <div className="grid grid-cols-1 gap-2" key={section.title}>
              <h5 className="font-medium text__18">{section.title}</h5>
              <ul className="list-disc pl-5 text__18 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
                {section.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>
    </Fragment>
  );
};

export default TermsConditions;
