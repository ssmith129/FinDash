import React, { Fragment, useEffect, useRef, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import Layout from "@/Components/Layout/Layout";
import useHostname from "@/Components/Provider/HostnameProvider";
import { useDarkModeContext } from "../../context/DarkModeContext";
import { ReactSVG } from "react-svg";
import Link from "next/link";
import UpgradePlan from "@/Components/Path/UpgradePlan";
import EditProfile from "@/Components/Section/EditProfile";
import PasswordSecurity from "@/Components/Section/PasswordSecurity";
import BillingSubscription from "@/Components/Section/BillingSubscription";
import PrivacyPolicy from "@/Components/Section/PrivacyPolicy";
import Faq from "@/Components/Section/Faq";
import TermsConditions from "@/Components/Section/TermsConditions";
import { useRouter } from "next/router";

const Index = () => {
  const originalUrl = useHostname();
  const { darkMode } = useDarkModeContext();

  const [selectMenu, setselectMenu] = useState("Edit Profile");

  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      setselectMenu(router.query.title ?? "Edit Profile");
    }
  }, [router.isReady, router.query]);
  return (
    <Fragment>
      <Layout title="Settings" description="Settings" NavTitle={"Settings"}>
        <Container>
          <section className="pb-[80px] md:pb-0 pt-0 -mb-6">
            <Row className="gap-y-6">
              <Col md={5} xl={4} className="md:pb-6">
                <div className="grid grid-cols-1 gap-[32px] md:pr-[24px]">
                  <div className="hidden md:grid grid-cols-1 gap-4">
                    <p className="text__14 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
                      Personal Info
                    </p>
                    {[
                      {
                        icon: "a User.svg",
                        title: "Edit Profile",
                      },
                      {
                        icon: "a LockKey.svg",
                        title: "Password & Security",
                      },
                    ].map((obj, idx) => {
                      return (
                        <>
                          {idx == 0 ? (
                            ""
                          ) : (
                            <>
                              <div className="w-full h-[1px] bg-Mborder-border-primary dark:bg-Mborder-border-primary-dark"></div>
                            </>
                          )}
                          <div
                            onClick={() => setselectMenu(obj.title)}
                            className={
                              "cursor-pointer flex items-center justify-between gap-2 " +
                              (selectMenu == obj.title ? "" : "opacity-60")
                            }
                          >
                            <div className="flex items-center gap-2">
                              <ReactSVG
                                src={`${originalUrl}/images/${obj.icon}`}
                                beforeInjection={(svg) => {
                                  svg.setAttribute(
                                    "fill",
                                    darkMode ? "white" : "#404040"
                                  );
                                }}
                              />
                              <p className="font-semibold text__16 text-Mtext-text-secondary dark:text-Mtext-text-secondary-dark">
                                {obj.title}
                              </p>
                            </div>
                            <ReactSVG
                              src={originalUrl + "/images/a Chevron-right.svg"}
                              beforeInjection={(svg) => {
                                svg.setAttribute(
                                  "fill",
                                  darkMode ? "white" : "#404040"
                                );
                              }}
                            />
                          </div>
                        </>
                      );
                    })}
                  </div>
                  <div className="hidden md:grid grid-cols-1 gap-4">
                    <p className="text__14 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
                      General
                    </p>
                    {[
                      {
                        icon: "a CreditCard.svg",
                        title: "Billing & Subscription",
                      },
                      {
                        icon: "a ShieldCheck.svg",
                        title: "Privacy Policy",
                      },
                      {
                        icon: "a ListBullets.svg",
                        title: "FAQs",
                      },
                      {
                        icon: "a ShieldWarning.svg",
                        title: "Terms & Conditions",
                      },
                    ].map((obj, idx) => {
                      return (
                        <>
                          {idx == 0 ? (
                            ""
                          ) : (
                            <>
                              <div className="w-full h-[1px] bg-Mborder-border-primary dark:bg-Mborder-border-primary-dark"></div>
                            </>
                          )}
                          <div
                            onClick={() => setselectMenu(obj.title)}
                            className={
                              "cursor-pointer flex items-center justify-between gap-2 " +
                              (selectMenu == obj.title ? "" : "opacity-60")
                            }
                          >
                            <div className="flex items-center gap-2">
                              <ReactSVG
                                src={`${originalUrl}/images/${obj.icon}`}
                                beforeInjection={(svg) => {
                                  svg.setAttribute(
                                    "fill",
                                    darkMode ? "white" : "#404040"
                                  );
                                }}
                              />
                              <p className="font-semibold text__16 text-Mtext-text-secondary dark:text-Mtext-text-secondary-dark">
                                {obj.title}
                              </p>
                            </div>
                            <ReactSVG
                              src={originalUrl + "/images/a Chevron-right.svg"}
                              beforeInjection={(svg) => {
                                svg.setAttribute(
                                  "fill",
                                  darkMode ? "white" : "#404040"
                                );
                              }}
                            />
                          </div>
                        </>
                      );
                    })}
                  </div>

                  <Form.Select
                    value={selectMenu}
                    onChange={(e) => setselectMenu(e.target.value)}
                    type="text"
                    placeholder="Select Menu"
                    className="text__14 bg-transparent h-[54px] rounded-[8px] px-3 outline-none shadow-none focus:outline-none focus:shadow-none border !border-Mborder-border-primary dark:!border-Mborder-border-primary-dark text-Mtext-text-primary dark:text-Mtext-text-primary-dark md:hidden"
                  >
                    {[
                      {
                        icon: "a User.svg",
                        title: "Edit Profile",
                      },
                      {
                        icon: "a LockKey.svg",
                        title: "Password & Security",
                      },
                      {
                        icon: "a CreditCard.svg",
                        title: "Billing & Subscription",
                      },
                      {
                        icon: "a ShieldCheck.svg",
                        title: "Privacy Policy",
                      },
                      {
                        icon: "a ListBullets.svg",
                        title: "FAQs",
                      },
                      {
                        icon: "a ShieldWarning.svg",
                        title: "Terms & Conditions",
                      },
                    ].map((obj) => {
                      return (
                        <option
                          selected={selectMenu == obj.title ? true : false}
                          value={obj.title}
                        >
                          {obj.title}
                        </option>
                      );
                    })}
                  </Form.Select>

                  <UpgradePlan />
                </div>
              </Col>
              <Col
                md={7}
                xl={8}
                className="border-t md:border-t-0 md:border-l !border-Mborder-border-primary dark:!border-Mborder-border-primary-dark md:pb-6"
              >
                <div className="md:pl-[24px] pt-6 md:pt-0">
                  {selectMenu == "Edit Profile" ? (
                    <>
                      <EditProfile />
                    </>
                  ) : (
                    ""
                  )}
                  {selectMenu == "Password & Security" ? (
                    <>
                      <PasswordSecurity />
                    </>
                  ) : (
                    ""
                  )}
                  {selectMenu == "Billing & Subscription" ? (
                    <>
                      <BillingSubscription />
                    </>
                  ) : (
                    ""
                  )}
                  {selectMenu == "Privacy Policy" ? (
                    <>
                      <PrivacyPolicy />
                    </>
                  ) : (
                    ""
                  )}
                  {selectMenu == "FAQs" ? (
                    <>
                      <Faq />
                    </>
                  ) : (
                    ""
                  )}
                  {selectMenu == "Terms & Conditions" ? (
                    <>
                      <TermsConditions />
                    </>
                  ) : (
                    ""
                  )}
                </div>
              </Col>
            </Row>
          </section>
        </Container>
      </Layout>
    </Fragment>
  );
};

export default Index;
