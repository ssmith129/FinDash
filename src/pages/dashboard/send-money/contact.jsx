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

const contact = () => {
  const originalUrl = useHostname();
  const { darkMode } = useDarkModeContext();

  const [activeStep, setactiveStep] = useState(0);
  const dataStep = ["Recipient", "Amount", "Review", "Pay"];

  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      setactiveStep(router.query.step ?? 0);
    }
  }, [router.isReady, router.query]);

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

  return (
    <Fragment>
      <LayoutStep
        title="Dashboard - Send Money"
        description="Dashboard - Send Money"
        NavTitle={"Dashboard - Send Money"}
        step={activeStep <= 3 ? true : false}
        stepData={dataStep}
        activeStep={activeStep}
      >
        <section>
          <Container>
            {0 == activeStep ? (
              <>
                <div className="w-full sm:w-[500px] mx-auto bg-Mbackgrounds-bg-primary dark:bg-Mbackgrounds-bg-primary-dark p-[32px] rounded-3xl border !border-Mborder-border-primary dark:!border-Mborder-border-primary-dark shadow-[0px_2px_12px_1px_rgba(0,0,0,0.04)]">
                  <div className="text-center mb-5">
                    <h4 className="font-semibold text__24 text-Mtext-text-primary dark:text-Mtext-text-primary-dark mb-1">
                      Who are you sending money to?
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

                  <div className="grid grid-cols-1 gap-[24px] mb-5">
                    <InputCurency />

                    <div className="grid grid-cols-1 gap-[12px]">
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
                            Fees (Currency conversion fee)
                          </p>
                        </div>
                        <h5 className="font-medium text__14 text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
                          $5.32
                        </h5>
                      </div>
                      <div className="flex items-center gap-2 justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-[24px] h-[24px] rounded-full border !border-Mborder-border-secondary dark:!border-Mborder-border-secondary-dark flex items-center justify-center">
                            <ReactSVG
                              src={originalUrl + "/images/Equals.svg"}
                              beforeInjection={(svg) => {
                                svg.setAttribute(
                                  "fill",
                                  darkMode ? "white" : "#737373"
                                );
                              }}
                            />
                          </div>
                          <p className="text__14 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
                            Total amount
                          </p>
                        </div>
                        <h5 className="font-medium text__14 text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
                          $1000
                        </h5>
                      </div>
                      <div className="flex items-center gap-2 justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-[24px] h-[24px] rounded-full border !border-Mborder-border-secondary dark:!border-Mborder-border-secondary-dark flex items-center justify-center">
                            <ReactSVG
                              src={originalUrl + "/images/Timer.svg"}
                              beforeInjection={(svg) => {
                                svg.setAttribute(
                                  "fill",
                                  darkMode ? "white" : "#737373"
                                );
                              }}
                            />
                          </div>
                          <p className="text__14 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
                            Should arrive in
                          </p>
                        </div>
                        <h5 className="font-medium text__14 text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
                          4 hours
                        </h5>
                      </div>
                    </div>

                    <InputCurency
                      title="Recipient Get"
                      value={"994.68"}
                      selectCurrencyData={{
                        country: "France",
                        currency: "EUR",
                        flag: "https://flagcdn.com/168x126/fr.png",
                      }}
                    />
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
                  <div className="text-center mb-5">
                    <h4 className="font-semibold text__24 text-Mtext-text-primary dark:text-Mtext-text-primary-dark mb-1">
                      Review Payment
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
                          Amount to Send
                        </p>
                        <h5 className="font-medium text__18 text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
                          $1000
                        </h5>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text__16 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
                          Fees (Currency conversion fee)
                        </p>
                        <h5 className="font-medium text__18 text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
                          - $5.32
                        </h5>
                      </div>
                      <div className="w-full h-[1px] bg-Mborder-border-primary dark:bg-Mborder-border-primary-dark"></div>
                      <div className="flex items-center justify-between">
                        <p className="text__16 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
                          Total Deducted
                        </p>
                        <h5 className="font-medium text__18 text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
                          994.68
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
                    Continue
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
                      Verify Your Transaction
                    </h4>
                    <p className="text__16 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
                      For your security, please enter the 6-digit verification
                      code sent to your registered device.
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
                    <h4 className="font-semibold text__24 text-Mtext-text-primary dark:text-Mtext-text-primary-dark mb-1">
                      Payment Sent Successfully!
                    </h4>
                    <p className="text__16 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
                      Your transaction is complete. Here are your details:
                    </p>
                  </div>

                  <div className="p-[20px] border !border-Mborder-border-primary dark:!border-Mborder-border-primary-dark rounded-[20px]">
                    <div className="grid grid-cols-1 gap-[20px]">
                      <div className="flex items-center justify-between">
                        <p className="text__16 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
                          Amount send
                        </p>
                        <h5 className="font-medium text__18 text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
                          $1000
                        </h5>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text__16 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
                          Recipient
                        </p>
                        <h5 className="font-medium text__18 text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
                          Makenna Siphron
                        </h5>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text__16 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
                          Transaction ID
                        </p>
                        <h5 className="font-medium text__18 text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
                          TX123456789
                        </h5>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text__16 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
                          Exchange rate USD
                        </p>
                        <h5 className="font-medium text__18 text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
                          1 USD = 0.92 EUR
                        </h5>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text__16 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
                          Payment Method
                        </p>
                        <h5 className="font-medium text__18 text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
                          Wallet Balance
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
                      <div className="flex items-center justify-between">
                        <p className="text__16 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
                          Status
                        </p>
                        <h5 className="font-medium text__18 text-Malerts-alerts-success">
                          Completed
                        </h5>
                      </div>
                    </div>
                  </div>

                  <h5 className="text-center my-5 text__16 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
                    Want a receipt?{" "}
                    <a
                      href="#!"
                      className="underline font-medium text__16 text-Mtext-text-primary dark:text-Mtext-text-primary-dark"
                    >
                      Download Receipt
                    </a>
                  </h5>

                  <div className="flex items-center ss:grid ss:grid-cols-2 gap-2">
                    <div
                      onClick={handleReload}
                      className="rounded-full inline-block text-center font-semibold text__18 text-Mtext-text-secondary dark:text-Mtext-text-secondary-dark !py-[15px] btnClass w-full cursor-pointer"
                    >
                      Send Another
                    </div>
                    <Link
                      href={"/dashboard"}
                      className="rounded-full inline-block text-center font-semibold text__18 text-white px-3 flex-shrink-0 ss:px-0 !py-[15px] bg-Mbrand-brand-primary !border-MPrimary btnClass ss:w-full cursor-pointer shadow-[0px_4px_20px_rgba(1,_122,_255,_0.3),_inset_0px_1px_0px_rgba(255,_255,_255,_0.4),_inset_0px_-4px_13px_rgba(0,_0,_0,_0.2)]"
                    >
                      Back to Dashboard
                    </Link>
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

export default contact;
