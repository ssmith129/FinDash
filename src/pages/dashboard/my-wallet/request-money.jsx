import LayoutStep from "@/Components/Layout/LayoutStep";
import InputCurency from "@/Components/Path/InputCurency";
import Loader from "@/Components/Path/Loader";
import useHostname from "@/Components/Provider/HostnameProvider";
import { useDarkModeContext } from "@/pages/context/DarkModeContext";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { ReactSVG } from "react-svg";
import VerificationInput from "react-verification-input";

const RequestMoney = () => {
  const originalUrl = useHostname();
  const { darkMode } = useDarkModeContext();

  const [activeStep, setactiveStep] = useState(0);

  const handleReload = () => {
    // Me-reload halaman saat tombol diklik
    window.location.reload();
  };

  const router = useRouter();

  const goBack = () => {
    router.back(); // This will take the user to the previous page in the browser history
  };

  return (
    <Fragment>
      <LayoutStep
        title="Dashboard -  Request Money"
        description="Dashboard -  Request Money"
        NavTitle={"Dashboard -  Request Money"}
        step={false}
      >
        <section>
          <Container>
            {0 == activeStep ? (
              <>
                <div className="w-full sm:w-[500px] mx-auto bg-Mbackgrounds-bg-primary dark:bg-Mbackgrounds-bg-primary-dark p-[32px] rounded-3xl border !border-Mborder-border-primary dark:!border-Mborder-border-primary-dark shadow-[0px_2px_12px_1px_rgba(0,0,0,0.04)]">
                  <div className="text-center mb-5">
                    <h4 className="font-semibold text__24 text-Mtext-text-primary dark:text-Mtext-text-primary-dark mb-1">
                      Enter Recipient
                    </h4>
                    <p className="text__16 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
                      Enter an email, phone number, or username.
                    </p>
                  </div>

                  <div className="mb-5">
                    <div className="flex items-center gap-2 w-full py-[2px] px-[12px] border !border-Mborder-border-primary dark:!border-Mborder-border-primary-dark rounded-xl h-[44px]">
                      <ReactSVG
                        src={originalUrl + "/images/Search.svg"}
                        beforeInjection={(svg) => {
                          svg.setAttribute("fill", "#404040");
                        }}
                      />
                      <input
                        type="text"
                        placeholder="Search..."
                        className="placeholder:text-Mtext-text-disable dark:placeholder:text-Mtext-text-disable-dark bg-transparent outline-none hover:active:focus:outline-none dark:text-white w-full"
                      />
                    </div>

                    <div className="flex items-center justify-between my-[18px]">
                      <div className="flex items-center gap-2">
                        <ReactSVG
                          src={originalUrl + "/images/Add.svg"}
                          beforeInjection={(svg) => {
                            svg.setAttribute(
                              "fill",
                              darkMode ? "white" : "#404040"
                            );
                          }}
                        />
                        <p className="font-semibold text__16 text-Mtext-text-secondary dark:text-Mtext-text-secondary-dark">
                          Add recipient
                        </p>
                      </div>
                      <ReactSVG
                        src={originalUrl + "/images/Chevron-right.svg"}
                        beforeInjection={(svg) => {
                          svg.setAttribute(
                            "fill",
                            darkMode ? "white" : "#404040"
                          );
                        }}
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-3 pt-3">
                      {[
                        {
                          name: "Makenna Siphron",
                          phone: "953 4224 5563",
                          image: "/images/ss8.png",
                        },
                        {
                          name: "Jaxon Lemaire",
                          phone: "874 3857 2154",
                          image: "/images/ss7.png",
                        },
                        {
                          name: "Aria Westwood",
                          phone: "659 7384 1279",
                          image: "/images/ss6.png",
                        },
                        {
                          name: "Liam Hargrove",
                          phone: "238 4956 7890",
                          image: "/images/ss5.png",
                        },
                        {
                          name: "Zoe Kensington",
                          phone: "487 2356 3981",
                          image: "/images/ss4.png",
                        },
                      ].map((contact, index) => {
                        return (
                          <Fragment>
                            {index > 0 ? (
                              <div className="w-full h-[1px] bg-Mborder-border-primary dark:bg-Mborder-border-primary-dark"></div>
                            ) : (
                              ""
                            )}
                            <div
                              key={index}
                              className="flex items-center justify-between"
                            >
                              <div className="flex items-center gap-2">
                                <img
                                  src={contact.image}
                                  className="w-[46px] h-[46px] rounded-full object-cover"
                                  alt={contact.name}
                                />
                                <div>
                                  <h5 className="font-medium text__16 text-Mtext-text-primary dark:text-Mtext-text-primary-dark mb-1">
                                    {contact.name}
                                  </h5>
                                  <p className="text__14 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
                                    {contact.phone}
                                  </p>
                                </div>
                              </div>
                              <ReactSVG
                                src="/images/Chevron-right.svg"
                                beforeInjection={(svg) => {
                                  svg.setAttribute(
                                    "fill",
                                    darkMode ? "white" : "#404040"
                                  );
                                }}
                              />
                            </div>
                          </Fragment>
                        );
                      })}
                    </div>
                  </div>

                  <div
                    onClick={() => setactiveStep(activeStep + 1)}
                    className="rounded-full inline-block text-center font-semibold text__18 text-white !py-[15px] bg-Mbrand-brand-primary !border-MPrimary btnClass w-full cursor-pointer shadow-[0px_4px_20px_rgba(1,_122,_255,_0.3),_inset_0px_1px_0px_rgba(255,_255,_255,_0.4),_inset_0px_-4px_13px_rgba(0,_0,_0,_0.2)]"
                  >
                    Continue
                  </div>
                </div>
              </>
            ) : (
              <></>
            )}
            {1 == activeStep ? (
              <>
                <div className="w-full sm:w-[500px] mx-auto bg-Mbackgrounds-bg-primary dark:bg-Mbackgrounds-bg-primary-dark p-[32px] rounded-3xl border !border-Mborder-border-primary dark:!border-Mborder-border-primary-dark shadow-[0px_2px_12px_1px_rgba(0,0,0,0.04)]">
                  <div className="text-center mb-5">
                    <h4 className="font-semibold text__24 text-Mtext-text-primary dark:text-Mtext-text-primary-dark mb-1">
                      Enter Amount
                    </h4>
                    <p className="text__16 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
                      Fast, easy, and secure transactions—whether it’s for
                      friends, family, or business.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-[24px] mb-4">
                    <InputCurency />

                    <div className="">
                      <p className="text__12 text-Mtext-text-secondary dark:text-Mtext-text-secondary-dark mb-2">
                        Add a Note (Optional)
                      </p>

                      <textarea
                        name=""
                        id=""
                        placeholder="e.g., dinner split, freelance work, etc."
                        className="p-3 bg-transparent outline-none hover:active:focus:outline-none text__14 placeholder:text-Mtext-text-disable dark:placeholder:text-Mtext-text-disable-dark w-full rounded-xl border !border-Mborder-border-primary dark:!border-Mborder-border-primary-dark"
                      ></textarea>
                      <p className="text__12 text-Mtext-text-secondary dark:text-Mtext-text-secondary-dark">
                        Supporting text
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <img
                        src={originalUrl + "/images/ss8.png"}
                        className="w-[46px] h-[46px] object-cover rounded-full"
                        alt=""
                      />
                      <div className="">
                        <h5 className="font-medium text__16 text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
                          Makenna Siphron
                        </h5>
                        <p className="text__14 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
                          953 4224 5563
                        </p>
                      </div>
                    </div>
                    <h5 className="font-medium text__20 text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
                      1000
                    </h5>
                  </div>

                  <div
                    onClick={() => setactiveStep(activeStep + 1)}
                    className="rounded-full inline-block text-center font-semibold text__18 text-white !py-[15px] bg-Mbrand-brand-primary !border-MPrimary btnClass w-full cursor-pointer shadow-[0px_4px_20px_rgba(1,_122,_255,_0.3),_inset_0px_1px_0px_rgba(255,_255,_255,_0.4),_inset_0px_-4px_13px_rgba(0,_0,_0,_0.2)]"
                  >
                    Continue
                  </div>
                </div>
              </>
            ) : (
              <></>
            )}
            {2 == activeStep ? (
              <>
                <div className="w-full sm:w-[500px] mx-auto bg-Mbackgrounds-bg-primary dark:bg-Mbackgrounds-bg-primary-dark p-[32px] rounded-3xl border !border-Mborder-border-primary dark:!border-Mborder-border-primary-dark shadow-[0px_2px_12px_1px_rgba(0,0,0,0.04)]">
                  <img
                    src={originalUrl + "/images/CheckCircle.svg"}
                    className="mx-auto mb-5"
                    alt=""
                  />
                  <div className="text-center mb-5">
                    <h4 className="font-semibold text__24 text-Mtext-text-primary dark:text-Mtext-text-primary-dark mb-1">
                      Request Sent!
                    </h4>
                    <p className="text__16 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
                      You’ve requested{" "}
                      <span className="font-semibold text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
                        $100.00
                      </span>{" "}
                      from Makenna Siphron
                    </p>
                  </div>

                  <div className="flex items-center ss:grid ss:grid-cols-2 gap-2">
                    <div
                      onClick={handleReload}
                      className="rounded-full inline-block text-center font-semibold text__18 text-Mtext-text-secondary dark:text-Mtext-text-secondary-dark !py-[15px] btnClass w-full cursor-pointer"
                    >
                      Request Again
                    </div>
                    <div
                      onClick={goBack}
                      className="rounded-full inline-block text-center font-semibold text__18 text-white px-3 flex-shrink-0 ss:px-0 !py-[15px] bg-Mbrand-brand-primary !border-MPrimary btnClass ss:w-full cursor-pointer shadow-[0px_4px_20px_rgba(1,_122,_255,_0.3),_inset_0px_1px_0px_rgba(255,_255,_255,_0.4),_inset_0px_-4px_13px_rgba(0,_0,_0,_0.2)]"
                    >
                      Back to Dashboard
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <></>
            )}
          </Container>
        </section>
      </LayoutStep>
    </Fragment>
  );
};

export default RequestMoney;
