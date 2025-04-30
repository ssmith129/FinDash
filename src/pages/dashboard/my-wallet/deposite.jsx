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

const Deposite = () => {
  const originalUrl = useHostname();
  const { darkMode } = useDarkModeContext();

  const [activeStep, setactiveStep] = useState(0);

  useEffect(() => {
    if (activeStep === 4) {
      // Setelah 3 detik, ubah activeStep ke 5
      const timer = setTimeout(() => {
        setactiveStep(activeStep + 1);
      }, 3000);

      // Bersihkan timer jika komponen dibersihkan sebelum 3 detik
      return () => clearTimeout(timer);
    }
  }, [activeStep]);

  const handleReload = () => {
    // Me-reload halaman saat tombol diklik
    window.location.reload();
  };

  const [SelectCard, setSelectCard] = useState("Debit Card");

  const router = useRouter();

  const goBack = () => {
    router.back(); // This will take the user to the previous page in the browser history
  };

  return (
    <Fragment>
      <LayoutStep
        title="Dashboard - Deposite"
        description="Dashboard - Deposite"
        NavTitle={"Dashboard - Deposite"}
        step={false}
      >
        <section>
          <Container>
            {0 == activeStep ? (
              <>
                <div className="w-full sm:w-[500px] mx-auto bg-Mbackgrounds-bg-primary dark:bg-Mbackgrounds-bg-primary-dark p-[32px] rounded-3xl border !border-Mborder-border-primary dark:!border-Mborder-border-primary-dark shadow-[0px_2px_12px_1px_rgba(0,0,0,0.04)]">
                  <div className="text-center mb-5">
                    <h4 className="font-semibold text__24 text-Mtext-text-primary dark:text-Mtext-text-primary-dark mb-1">
                      Deposit Method
                    </h4>
                    <p className="text__16 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
                      How would you like to deposit money?
                    </p>
                  </div>

                  <div className="mb-4 grid grid-cols-1 gap-3">
                    {[
                      {
                        icon: originalUrl + "/images/image 1.png",
                        title: "Debit Card",
                        desc: "Master Card ending 5563",
                      },
                      {
                        icon: originalUrl + "/images/image 1-1.png",
                        title: "Visa",
                        desc: "Visa ending 5563",
                      },
                      {
                        icon: originalUrl + "/images/image 1-2.png",
                        title: "Bank of America",
                        desc: "Giro 5563",
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
                                  {obj.title}
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
                  </div>

                  <div
                    onClick={() => setactiveStep(activeStep + 1)}
                    className="rounded-full inline-block text-center font-semibold text__18 text-white !py-[15px] bg-Mbrand-brand-primary !border-MPrimary btnClass w-full cursor-pointer shadow-[0px_4px_20px_rgba(1,_122,_255,_0.3),_inset_0px_1px_0px_rgba(255,_255,_255,_0.4),_inset_0px_-4px_13px_rgba(0,_0,_0,_0.2)]"
                  >
                    Continue
                  </div>

                  <div className="mt-4 grid grid-cols-1 gap-2">
                    <div className="flex items-center gap-2">
                      <ReactSVG
                        src={originalUrl + "/images/Check (1).svg"}
                        beforeInjection={(svg) => {
                          svg.setAttribute(
                            "fill",
                            darkMode ? "white" : "#404040"
                          );
                        }}
                      />
                      <p className="text__14 text-Mtext-text-secondary dark:text-Mtext-text-secondary-dark">
                        Credit/Debit Card (Instant, 2% fee)
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <ReactSVG
                        src={originalUrl + "/images/Check (1).svg"}
                        beforeInjection={(svg) => {
                          svg.setAttribute(
                            "fill",
                            darkMode ? "white" : "#404040"
                          );
                        }}
                      />
                      <p className="text__14 text-Mtext-text-secondary dark:text-Mtext-text-secondary-dark">
                        Bank Transfer (1-3 business days, no fee)
                      </p>
                    </div>
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
                      How much would you like to withdraw?
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-[24px] mb-5">
                    <div className="">
                      <InputCurency />
                      <p className="text__12 text-Mtext-text-secondary dark:text-Mtext-text-secondary-dark mt-2">
                        Balance: $88,232.00{" "}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 gap-[12px]">
                      <div className="flex items-center gap-2 justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-[24px] h-[24px] rounded-full border !border-Mborder-border-secondary dark:!border-Mborder-border-secondary-dark flex items-center justify-center">
                            <ReactSVG
                              src={originalUrl + "/images/ArrowsClockwise.svg"}
                              beforeInjection={(svg) => {
                                svg.setAttribute(
                                  "fill",
                                  darkMode ? "white" : "#1A1A1A"
                                );
                              }}
                            />
                          </div>
                          <p className="text__14 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
                            Currency Exchange Rate
                          </p>
                        </div>
                        <h5 className="font-medium text__14 text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
                          1 USD = 0.92 EUR
                        </h5>
                      </div>
                      <div className="flex items-center gap-2 justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-[24px] h-[24px] rounded-full border !border-Mborder-border-secondary dark:!border-Mborder-border-secondary-dark flex items-center justify-center">
                            <ReactSVG
                              src={originalUrl + "/images/Minus.svg"}
                              beforeInjection={(svg) => {
                                svg.setAttribute(
                                  "fill",
                                  darkMode ? "white" : "#737373"
                                );
                              }}
                            />
                          </div>
                          <p className="text__14 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
                            Processing Fee
                          </p>
                        </div>
                        <h5 className="font-medium text__14 text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
                          $2.00 (Credit/Debit Card)
                        </h5>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div
                      onClick={() => setactiveStep(activeStep - 1)}
                      className="rounded-full inline-block text-center font-semibold text__18 text-Mtext-text-secondary dark:text-Mtext-text-secondary-dark !py-[15px] btnClass w-full cursor-pointer"
                    >
                      Back
                    </div>
                    <div
                      onClick={() => setactiveStep(activeStep + 1)}
                      className="rounded-full inline-block text-center font-semibold text__18 text-white !py-[15px] bg-Mbrand-brand-primary !border-MPrimary btnClass w-full cursor-pointer shadow-[0px_4px_20px_rgba(1,_122,_255,_0.3),_inset_0px_1px_0px_rgba(255,_255,_255,_0.4),_inset_0px_-4px_13px_rgba(0,_0,_0,_0.2)]"
                    >
                      Continue
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <></>
            )}
            {2 == activeStep ? (
              <>
                <div className="w-full sm:w-[500px] mx-auto bg-Mbackgrounds-bg-primary dark:bg-Mbackgrounds-bg-primary-dark p-[32px] rounded-3xl border !border-Mborder-border-primary dark:!border-Mborder-border-primary-dark shadow-[0px_2px_12px_1px_rgba(0,0,0,0.04)]">
                  <div className="text-center mb-5">
                    <h4 className="font-semibold text__24 text-Mtext-text-primary dark:text-Mtext-text-primary-dark mb-1">
                      Review & Confirm Deposit
                    </h4>
                    <p className="text__16 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
                      Everything looks good? Proceed to confirmation.
                    </p>
                  </div>

                  <div className="p-[20px] border !border-Mborder-border-primary dark:!border-Mborder-border-primary-dark rounded-[20px]">
                    <div className="grid grid-cols-1 gap-[20px]">
                      <div className="flex items-center justify-between">
                        <p className="text__16 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
                          Recipient's Name
                        </p>
                        <h5 className="font-medium text__18 text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
                          Makenna Siphron
                        </h5>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text__16 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
                          Deposit Amount
                        </p>
                        <h5 className="font-medium text__18 text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
                          $10,000
                        </h5>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text__16 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
                          Processing Fee
                        </p>
                        <h5 className="font-medium text__18 text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
                          $2.00
                        </h5>
                      </div>
                      <div className="w-full h-[1px] bg-Mborder-border-primary dark:bg-Mborder-border-primary-dark"></div>
                      <div className="flex items-center justify-between">
                        <p className="text__16 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
                          Total Deducted
                        </p>
                        <h5 className="font-medium text__18 text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
                          10,002
                        </h5>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text__16 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
                          Delivery Time
                        </p>
                        <h5 className="font-medium text__18 text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
                          Instant
                        </h5>
                      </div>
                    </div>
                  </div>

                  <h5 className="text-center my-4 sm:my-5 text__16 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
                    Should arrive in{" "}
                    <span className="font-medium text__16 text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
                      4 hours
                    </span>
                  </h5>

                  <div
                    onClick={() => setactiveStep(activeStep + 1)}
                    className="rounded-full inline-block text-center font-semibold text__18 text-white !py-[15px] bg-Mbrand-brand-primary !border-MPrimary btnClass w-full cursor-pointer shadow-[0px_4px_20px_rgba(1,_122,_255,_0.3),_inset_0px_1px_0px_rgba(255,_255,_255,_0.4),_inset_0px_-4px_13px_rgba(0,_0,_0,_0.2)]"
                  >
                    Confirm & Authenticate
                  </div>
                </div>
              </>
            ) : (
              <></>
            )}
            {3 == activeStep ? (
              <>
                <div className="w-full sm:w-[500px] mx-auto bg-Mbackgrounds-bg-primary dark:bg-Mbackgrounds-bg-primary-dark p-[32px] rounded-3xl border !border-Mborder-border-primary dark:!border-Mborder-border-primary-dark shadow-[0px_2px_12px_1px_rgba(0,0,0,0.04)]">
                  <div className="text-center mb-5">
                    <h4 className="font-semibold text__24 text-Mtext-text-primary dark:text-Mtext-text-primary-dark mb-1">
                      Verify Your Withdrawal
                    </h4>
                    <p className="text__16 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
                      For security reasons, please enter the 6-digit
                      verification code sent to your registered device.
                    </p>
                  </div>

                  <div className="w-full sm:w-[384px] mx-auto">
                    <div className="WrapVerification">
                      <VerificationInput
                        length={5}
                        classNames={{
                          container: "wrap",
                          character: "character",
                          characterInactive: "character--inactive",
                          characterSelected: "character--selected",
                        }}
                      />
                    </div>
                  </div>

                  <h5 className="text-center my-4 sm:my-5 text__16 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
                    Didn’t receive a code?{" "}
                    <a
                      href="#!"
                      className="font-medium text__16 text-Mtext-text-primary dark:text-Mtext-text-primary-dark"
                    >
                      Resend Code
                    </a>
                  </h5>

                  <div className="flex items-center ss:grid ss:grid-cols-2 gap-2">
                    <div
                      onClick={() => setactiveStep(activeStep - 1)}
                      className="rounded-full inline-block text-center font-semibold text__18 text-Mtext-text-secondary dark:text-Mtext-text-secondary-dark !py-[15px] btnClass w-full cursor-pointer"
                    >
                      Back
                    </div>
                    <div
                      onClick={() => setactiveStep(activeStep + 1)}
                      className="rounded-full inline-block text-center font-semibold text__18 text-white px-3 flex-shrink-0 ss:px-0 !py-[15px] bg-Mbrand-brand-primary !border-MPrimary btnClass ss:w-full cursor-pointer shadow-[0px_4px_20px_rgba(1,_122,_255,_0.3),_inset_0px_1px_0px_rgba(255,_255,_255,_0.4),_inset_0px_-4px_13px_rgba(0,_0,_0,_0.2)]"
                    >
                      Confirm Payment
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <></>
            )}

            {4 == activeStep ? (
              <>
                <div className="w-full sm:w-[500px] mx-auto">
                  <div className="flex items-center justify-center mb-5">
                    <Loader />
                  </div>
                  <div className="text-center mb-5">
                    <h4 className="font-semibold text__24 text-Mtext-text-primary dark:text-Mtext-text-primary-dark mb-1">
                      Processing your transaction…
                    </h4>
                    <p className="text__16 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
                      This may take a few seconds. Please don’t <br /> close
                      this window.
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <></>
            )}

            {5 == activeStep ? (
              <>
                <div className="w-full sm:w-[500px] mx-auto bg-Mbackgrounds-bg-primary dark:bg-Mbackgrounds-bg-primary-dark p-[32px] rounded-3xl border !border-Mborder-border-primary dark:!border-Mborder-border-primary-dark shadow-[0px_2px_12px_1px_rgba(0,0,0,0.04)]">
                  <img
                    src={originalUrl + "/images/CheckCircle.svg"}
                    className="mx-auto mb-5"
                    alt=""
                  />
                  <div className="text-center mb-5">
                    <h4 className="font-semibold text__24 text-Mtext-text-primary dark:text-Mtext-text-primary-dark mb-2">
                      Deposit Successful!
                    </h4>
                    <p className="text__16 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
                      Your
                      <span className="font-semibold text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
                        $10,002.00
                      </span>{" "}
                      deposit has been added to your account.
                    </p>
                  </div>

                  <div className="flex items-center ss:grid ss:grid-cols-2 gap-2">
                    <div
                      onClick={handleReload}
                      className="rounded-full inline-block text-center font-semibold text__18 text-Mtext-text-secondary dark:text-Mtext-text-secondary-dark !py-[15px] btnClass w-full cursor-pointer"
                    >
                      View Transaction
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
              ""
            )}
          </Container>
        </section>
      </LayoutStep>
    </Fragment>
  );
};

export default Deposite;
