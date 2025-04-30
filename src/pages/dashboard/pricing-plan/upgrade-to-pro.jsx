import LayoutStep from "@/Components/Layout/LayoutStep";
import InputCurency from "@/Components/Path/InputCurency";
import Loader from "@/Components/Path/Loader";
import useHostname from "@/Components/Provider/HostnameProvider";
import { useDarkModeContext } from "@/pages/context/DarkModeContext";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ReactSVG } from "react-svg";
import { FormattedInput } from "@buttercup/react-formatted-input";

const UpgradeToPro = () => {
  const originalUrl = useHostname();
  const { darkMode } = useDarkModeContext();

  const [activeStep, setactiveStep] = useState(0);

  useEffect(() => {
    if (activeStep === 1) {
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

  const [toogleBank, settoogleBank] = useState("Credit Card");

  const idPattern = [
    { char: /\d/, repeat: 4 },
    { exactly: " " }, // Added space as a character
    { char: /\d/, repeat: 4 },
    { exactly: " " }, // Added space as a character
    { char: /\d/, repeat: 4 },
    { exactly: " " }, // Added space as a character
    { char: /\d/, repeat: 4 },
  ];
  const [cardNumber, setCardNumber] = useState();

  const idPatternDate = [
    { char: /\d/, repeat: 2 },
    { exactly: "/" }, // Added space as a character
    { char: /\d/, repeat: 2 },
  ];
  const [cardDate, setCardDate] = useState();

  const idPatternCCV = [{ char: /\d/, repeat: 3 }];
  const [cardCCv, setCardCCv] = useState();

  const [ToogleCheckCard, setToogleCheckCard] = useState(false);

  const [TooglePayment, setTooglePayment] = useState({
    type: "Yearly",
    price: "$99.99/month",
  });

  return (
    <Fragment>
      <LayoutStep
        title="Upgrade to pro"
        description="Upgrade to pro"
        NavTitle={"Upgrade to pro"}
        step={false}
      >
        <section className="pt-[40px] md:pt-0">
          <Container>
            {0 == activeStep ? (
              <>
                <div className="flex items-center gap-1 mb-[20px]">
                  {[
                    { title: "My Wallet", link: "/dashboard/my-wallet" },
                    {
                      title: "Scheduled Transfer",
                      link: "/dashboard/my-wallet/scheduled-transfer",
                    },
                  ].map((obj, idx, arr) => {
                    return (
                      <>
                        {idx > 0 ? (
                          <ReactSVG
                            src={originalUrl + "/images/Chevron-right 3.svg"}
                            beforeInjection={(svg) => {
                              svg.setAttribute(
                                "fill",
                                darkMode ? "#737373ff" : "#A3A3A3"
                              );
                            }}
                          />
                        ) : (
                          ""
                        )}
                        <Link
                          href={obj.link}
                          className={
                            "text__14  " +
                            (arr.length - 1 == idx
                              ? "text-Mtext-text-primary dark:text-Mtext-text-primary-dark"
                              : "text-Mtext-text-disable dark:text-Mtext-text-disable-dark")
                          }
                        >
                          {obj.title}
                        </Link>
                      </>
                    );
                  })}
                </div>
              </>
            ) : (
              ""
            )}

            {0 == activeStep ? (
              <>
                <Row className="text-Mtext-text-primary dark:text-Mtext-text-primary-dark justify-between gap-y-4">
                  <Col md={7}>
                    <h4 className="text__32 font-semibold mb-1">
                      Upgrade to Pro
                    </h4>
                    <p className="text__16 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
                      Get advanced tools, priority support, and premium
                      insights.
                    </p>

                    <div className="mt-6">
                      <div className="grid grid-cols-1 gap-4">
                        <h5 className="font-semibold text__18">
                          Payment Method
                        </h5>

                        <div className="grid grid-cols-1 gap-3">
                          <h5 className="text__14 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
                            Debit/Credit Card
                          </h5>

                          <div className="grid grid-cols-1 gap-3">
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

                          <h5 className="text__14 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
                            Bank Transfer
                          </h5>

                          <div className="grid grid-cols-1 gap-3">
                            {[
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
                        </div>

                        <h5 className="text__14 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
                          Or add new payment
                        </h5>

                        <div className="inline-block">
                          <div className="flex items-center w-max p-1 rounded-full bg-Mbackgrounds-bg-tertiary dark:bg-Mbackgrounds-bg-tertiary-dark">
                            <div
                              onClick={() => settoogleBank("Credit Card")}
                              className={
                                "cursor-pointer min-w-[90px] px-3 py-2 rounded-full font-semibold text__14  " +
                                (toogleBank == "Credit Card"
                                  ? "bg-white border !border-Mborder-border-primary dark:!border-Mborder-border-primary-dark"
                                  : "text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark")
                              }
                            >
                              Credit Card
                            </div>
                            <div
                              onClick={() => settoogleBank("Bank Transfer")}
                              className={
                                "cursor-pointer min-w-[90px] px-3 py-2 rounded-full font-semibold text__14  " +
                                (toogleBank == "Bank Transfer"
                                  ? "bg-white border !border-Mborder-border-primary dark:!border-Mborder-border-primary-dark"
                                  : "text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark")
                              }
                            >
                              Bank Transfer
                            </div>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 gap-3">
                          <div className="w-full px-3 rounded-xl border !border-Mborder-border-primary dark:!border-Mborder-border-primary-dark">
                            <FormattedInput
                              className="w-full bg-transparent outline-none hover:active:focus:outline-none h-[48px] text__14 text-Mtext-text-primary dark:text-Mtext-text-primary-dark placeholder:text-Mtext-text-tertiary placeholder:dark:text-Mtext-text-tertiary-dark"
                              format={idPattern}
                              value={cardNumber}
                              onChange={(formattedValue, raw) => {
                                setCardNumber(formattedValue);
                              }}
                              placeholder="Card Number"
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="w-full px-3 rounded-xl border !border-Mborder-border-primary dark:!border-Mborder-border-primary-dark">
                              <FormattedInput
                                className="w-full bg-transparent outline-none hover:active:focus:outline-none h-[48px] text__14 text-Mtext-text-primary dark:text-Mtext-text-primary-dark placeholder:text-Mtext-text-tertiary placeholder:dark:text-Mtext-text-tertiary-dark"
                                format={idPatternDate}
                                value={cardDate}
                                onChange={(formattedValue, raw) => {
                                  setCardDate(formattedValue);
                                }}
                                placeholder="Expiration"
                              />
                            </div>
                            <div className="w-full px-3 rounded-xl border !border-Mborder-border-primary dark:!border-Mborder-border-primary-dark">
                              <FormattedInput
                                className="w-full bg-transparent outline-none hover:active:focus:outline-none h-[48px] text__14 text-Mtext-text-primary dark:text-Mtext-text-primary-dark placeholder:text-Mtext-text-tertiary placeholder:dark:text-Mtext-text-tertiary-dark"
                                format={idPatternCCV}
                                value={cardCCv}
                                onChange={(formattedValue, raw) => {
                                  setCardCCv(formattedValue);
                                }}
                                placeholder="CVC"
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="w-full px-3 rounded-xl border !border-Mborder-border-primary dark:!border-Mborder-border-primary-dark">
                              <select
                                name=""
                                className="w-full bg-transparent outline-none hover:active:focus:outline-none h-[48px] text__14 text-Mtext-text-primary dark:text-Mtext-text-primary-dark placeholder:text-Mtext-text-tertiary placeholder:dark:text-Mtext-text-tertiary-dark"
                                id=""
                              >
                                {[
                                  {
                                    id: 1,
                                    name: "United States",
                                  },
                                  {
                                    id: 2,
                                    name: "Canada",
                                  },
                                  {
                                    id: 3,
                                    name: "Mexico",
                                  },
                                  {
                                    id: 4,
                                    name: "Germany",
                                  },
                                  {
                                    id: 5,
                                    name: "France",
                                  },
                                  {
                                    id: 6,
                                    name: "Japan",
                                  },
                                  {
                                    id: 7,
                                    name: "Australia",
                                  },
                                ].map((obj) => {
                                  return <option>{obj.name}</option>;
                                })}
                              </select>
                            </div>
                            <div className="w-full px-3 rounded-xl border !border-Mborder-border-primary dark:!border-Mborder-border-primary-dark">
                              <input
                                type="text"
                                className="w-full bg-transparent outline-none hover:active:focus:outline-none h-[48px] text__14 text-Mtext-text-primary dark:text-Mtext-text-primary-dark placeholder:text-Mtext-text-tertiary placeholder:dark:text-Mtext-text-tertiary-dark"
                                placeholder="Zip Code"
                              />
                            </div>
                          </div>
                          <div
                            className="flex items-center gap-2 cursor-pointer"
                            onClick={() => setToogleCheckCard(!ToogleCheckCard)}
                          >
                            <div
                              className={
                                "w-[24px] h-[24px] rounded-full border flex items-center justify-center " +
                                (ToogleCheckCard
                                  ? "!border-Malerts-alerts-success bg-Malerts-alerts-success"
                                  : "!border-Micon-icon-disable")
                              }
                            >
                              {ToogleCheckCard ? (
                                <>
                                  <img
                                    src={originalUrl + "/images/Check 2.svg"}
                                    alt=""
                                  />
                                </>
                              ) : (
                                ""
                              )}
                            </div>
                            <div className="text__14 text-Mtext-text-secondary dark:text-Mtext-text-secondary-dark">
                              By adding a new payment method, you agree to the
                              following term
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md={5} xl={4}>
                    <h5 className="font-semibold text__18 mb-6">
                      Billing Option
                    </h5>
                    <div className="p-6 bg-Mbackgrounds-bg-primary dark:bg-Mbackgrounds-bg-primary-dark rounded-3xl">
                      <div className="grid grid-cols-1 gap-3">
                        <div
                          className="flex items-center justify-between cursor-pointer"
                          onClick={() =>
                            setTooglePayment({
                              type: "Monthly",
                              price: "$9.99/month",
                            })
                          }
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={
                                "w-[24px] h-[24px] rounded-full border flex items-center justify-center " +
                                (TooglePayment.type == "Monthly"
                                  ? "!border-Malerts-alerts-success"
                                  : "!border-Micon-icon-disable")
                              }
                            >
                              {TooglePayment.type == "Monthly" ? (
                                <div className="w-4 h-4 rounded-full bg-Malerts-alerts-success"></div>
                              ) : (
                                ""
                              )}
                            </div>
                            <div className="">
                              <h5 className="font-medium text__16">
                                Pay Monthly
                              </h5>
                              <p className="text__14 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
                                $9.99/month
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="w-full h-[1px] bg-Mborder-border-primary dark:bg-Mborder-border-primary-dark"></div>
                        <div
                          className="flex items-center justify-between cursor-pointer"
                          onClick={() =>
                            setTooglePayment({
                              type: "Yearly",
                              price: "$99.99/month",
                            })
                          }
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={
                                "w-[24px] h-[24px] rounded-full border flex items-center justify-center " +
                                (TooglePayment.type == "Yearly"
                                  ? "!border-Malerts-alerts-success"
                                  : "!border-Micon-icon-disable")
                              }
                            >
                              {TooglePayment.type == "Yearly" ? (
                                <div className="w-4 h-4 rounded-full bg-Malerts-alerts-success"></div>
                              ) : (
                                ""
                              )}
                            </div>
                            <div className="">
                              <h5 className="font-medium text__16">
                                Pay Yearly
                              </h5>
                              <p className="text__14 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
                                $99.99/month
                              </p>
                            </div>
                          </div>
                          <h5 className="font-medium text__18 text-Malerts-alerts-success">
                            Save 20%
                          </h5>
                        </div>
                      </div>

                      <div className="flex items-center justify-between my-4">
                        <h5 className="text__16 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
                          Total
                        </h5>
                        <h5 className="text__18 font-medium">
                          {TooglePayment.price}
                        </h5>
                      </div>

                      <div
                        onClick={() => setactiveStep(activeStep + 1)}
                        className="rounded-full inline-block text-center font-semibold text__18 text-white !py-[15px] bg-Mbrand-brand-primary !border-MPrimary btnClass w-full cursor-pointer shadow-[0px_4px_20px_rgba(1,_122,_255,_0.3),_inset_0px_1px_0px_rgba(255,_255,_255,_0.4),_inset_0px_-4px_13px_rgba(0,_0,_0,_0.2)]"
                      >
                        Upgrade to Pro
                      </div>
                      <p className="text__14 mt-4 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
                        By continuing, you acknowledge that you have read,
                        understood, and agree to our Terms & Conditions and
                        Privacy Policy.
                      </p>
                    </div>
                  </Col>
                </Row>
              </>
            ) : (
              <></>
            )}

            {1 == activeStep ? (
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

            {2 == activeStep ? (
              <>
                <div className="w-full sm:w-[500px] mx-auto bg-Mbackgrounds-bg-primary dark:bg-Mbackgrounds-bg-primary-dark p-[32px] rounded-3xl border !border-Mborder-border-primary dark:!border-Mborder-border-primary-dark shadow-[0px_2px_12px_1px_rgba(0,0,0,0.04)]">
                  <img
                    src={originalUrl + "/images/CheckCircle.svg"}
                    className="mx-auto mb-5"
                    alt=""
                  />
                  <div className="text-center mb-5">
                    <h4 className="font-semibold text__24 text-Mtext-text-primary dark:text-Mtext-text-primary-dark mb-2">
                      Welcome to Pro!
                    </h4>
                    <p className="text__16 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
                      Your upgrade is successful. You now have access to premium
                      features.
                    </p>
                  </div>

                  <div className="mb-5">
                    <div className="grid grid-cols-1 gap-[20px]">
                      <div className="flex items-center justify-between">
                        <p className="text__16 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
                          Next Billing Date
                        </p>
                        <h5 className="font-medium text__18 text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
                          April 20, 2025
                        </h5>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text__16 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
                          Amount Paid
                        </p>
                        <h5 className="font-medium text__18 text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
                          $99.99 (Annual Plan)
                        </h5>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text__16 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
                          Transaction ID
                        </p>
                        <h5 className="font-medium text__18 text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
                          #UPG123456
                        </h5>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center ss:grid ss:grid-cols-2 gap-2">
                    <Link href={"/dashboard/pricing-plan"}
                      className="rounded-full inline-block text-center font-semibold text__18 text-Mtext-text-secondary dark:text-Mtext-text-secondary-dark !py-[15px] btnClass w-full cursor-pointer"
                    >
                      Explore Features
                    </Link>
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

export default UpgradeToPro;
