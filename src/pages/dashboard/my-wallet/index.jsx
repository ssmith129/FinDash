import React, { Fragment, useRef, useState } from "react";
import { Col, Container, Dropdown, Form, Row } from "react-bootstrap";
import Layout from "@/Components/Layout/Layout";
import useHostname from "@/Components/Provider/HostnameProvider";
import { ReactSVG } from "react-svg";
import BackdropFixed from "@/Components/Path/BackdropFixed";
import Link from "next/link";
import { useDarkModeContext } from "@/pages/context/DarkModeContext";
import CreditCard from "@/Components/Card/CreditCard";
import ChartListDouble from "@/Components/Chart/ChartListDouble";
import SelectCurencyField from "@/Components/Path/SelectCurencyField";
import SideModal from "@/Components/Modal/SideModal";
import { FormattedInput } from "@buttercup/react-formatted-input";
import ChartFilter from "@/Components/Path/ChartFilter";

const Index = () => {
  const originalUrl = useHostname();
  const { darkMode } = useDarkModeContext();

  const [TooglePopup, setTooglePopup] = useState("");

  const [SelectCard, setSelectCard] = useState("Master Card ending 5563");

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

  return (
    <Fragment>
      <Layout title="My Wallet" description="My Wallet" NavTitle={"My Wallet"}>
        <BackdropFixed
          status={TooglePopup}
          onAction={() => setTooglePopup("")}
        />

        <SideModal
          subtitle=" Securely add, update, or remove your saved payment cards."
          title={"Manage Payment Cards"}
          setToogle={() => setTooglePopup("")}
          Toogle={TooglePopup == "Manage Card" ? true : false}
        >
          <div className="my-[24px]">
            <div
              className="flex items-center justify-between cursor-pointer mb-3"
              onClick={() => setSelectCard("Master Card ending 5563")}
            >
              <div className="flex items-center gap-2">
                <h5 className="font-semibold text__16 text-Mtext-text-secondary dark:text-Mtext-text-secondary-dark">
                  Master Card ending 5563
                </h5>
                <p className="text__16 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
                  Default
                </p>
              </div>
              <div
                className={
                  "w-[24px] h-[24px] rounded-full border flex items-center justify-center " +
                  (SelectCard == "Master Card ending 5563"
                    ? "!border-Malerts-alerts-success"
                    : "!border-Micon-icon-disable")
                }
              >
                {SelectCard == "Master Card ending 5563" ? (
                  <div className="w-4 h-4 rounded-full bg-Malerts-alerts-success"></div>
                ) : (
                  ""
                )}
              </div>
            </div>
            <CreditCard heightCus="h-[280px]" type="big" />
          </div>
          <div className="my-[24px]">
            <div
              className="flex items-center justify-between cursor-pointer mb-3"
              onClick={() => setSelectCard("Master Card ending 9568")}
            >
              <div className="flex items-center gap-2">
                <h5 className="font-semibold text__16 text-Mtext-text-secondary dark:text-Mtext-text-secondary-dark">
                  Master Card ending 9568
                </h5>
              </div>
              <div
                className={
                  "w-[24px] h-[24px] rounded-full border flex items-center justify-center " +
                  (SelectCard == "Master Card ending 9568"
                    ? "!border-Malerts-alerts-success"
                    : "!border-Micon-icon-disable")
                }
              >
                {SelectCard == "Master Card ending 9568" ? (
                  <div className="w-4 h-4 rounded-full bg-Malerts-alerts-success"></div>
                ) : (
                  ""
                )}
              </div>
            </div>
            <CreditCard
              heightCus="h-[280px]"
              bgColor="bg-[#FF9500]"
              type="big"
            />
          </div>

          <div
            className="px-[20px] py-[14px] rounded-full w-full border !border-Mborder-border-primary dark:!border-Mborder-border-primary cursor-pointer"
            onClick={() => setTooglePopup("Add New Card")}
          >
            <div className="flex items-center justify-center w-full gap-2">
              <ReactSVG
                className="cursor-pointer"
                src={originalUrl + "/images/Add 2.svg"}
                beforeInjection={(svg) => {
                  svg.setAttribute("fill", darkMode ? "white" : "#404040");
                }}
              />
              <p className="text__18 font-semibold text-Mtext-text-secondary dark:text-Mtext-text-secondary-dark">
                Add New Card
              </p>
            </div>
          </div>
          <p className="text-center mt-[24px] text__14 text-Mtext-text-secondary dark:text-Mtext-text-secondary-dark">
            Setting a default card makes future payments faster
          </p>
        </SideModal>

        <SideModal
          subtitle="Securely store your card for faster payments."
          title={"Add a New Payment Card"}
          setToogle={() => setTooglePopup("")}
          Toogle={TooglePopup == "Add New Card" ? true : false}
        >
          <div className="flex flex-wrap h-full">
            <div className="w-full">
              <h5 className="font-semibold text__16 text-Mtext-text-primary dark:text-Mtext-text-primary-dark mb-3">
                Card Information
              </h5>
              <div className="grid grid-cols-1 gap-4">
                <div className="w-full px-3 rounded-xl border !border-Mborder-border-primary dark:!border-Mborder-border-primary-dark">
                  <input
                    type="text"
                    className="w-full bg-transparent outline-none hover:active:focus:outline-none h-[48px] text__14 text-Mtext-text-primary dark:text-Mtext-text-primary-dark placeholder:text-Mtext-text-tertiary placeholder:dark:text-Mtext-text-tertiary-dark"
                    placeholder="Your Name"
                  />
                </div>
                <div className="w-full px-3 rounded-xl border !border-Mborder-border-primary dark:!border-Mborder-border-primary-dark">
                  <FormattedInput
                    className="w-full bg-transparent outline-none hover:active:focus:outline-none h-[48px] text__14 text-Mtext-text-primary dark:text-Mtext-text-primary-dark placeholder:text-Mtext-text-tertiary placeholder:dark:text-Mtext-text-tertiary-dark"
                    format={idPattern}
                    value={cardNumber}
                    onChange={(formattedValue, raw) => {
                      setCardNumber(formattedValue);
                    }}
                    placeholder="Write Card Number"
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
                        <img src={originalUrl + "/images/Check 2.svg"} alt="" />
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="text__14 text-Mtext-text-secondary dark:text-Mtext-text-secondary-dark">
                    Save this card for future payments
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 mt-[24px] self-end w-full">
              <div
                onClick={() => setTooglePopup("")}
                className="rounded-full inline-block text-center font-semibold text__18 text-Mtext-text-secondary dark:text-Mtext-text-secondary-dark !py-[14px] !px-[20px] btnClass cursor-pointer"
              >
                Close
              </div>
              <div
                onClick={() => setTooglePopup("success")}
                className="rounded-full inline-block text-center font-semibold text__18 text-white !py-[14px] !px-[20px] bg-Mbrand-brand-primary !border-MPrimary btnClass cursor-pointer shadow-[0px_4px_20px_rgba(1,_122,_255,_0.3),_inset_0px_1px_0px_rgba(255,_255,_255,_0.4),_inset_0px_-4px_13px_rgba(0,_0,_0,_0.2)]"
              >
                Save Card
              </div>
            </div>
          </div>
        </SideModal>

        <div
          className={
            "bg-Mbackgrounds-bg-primary dark:bg-Mbackgrounds-bg-primary-dark border !border-Mborder-border-primary dark:!border-Mborder-border-primary-dark rounded-3xl p-[32px] fixed z-[90] left-1/2 -translate-x-1/2  -translate-y-1/2 w-[340px] xx:w-[360px] ss:w-[430px] transition-all duration-300 text-center " +
            (TooglePopup == "success"
              ? "top-1/2"
              : "top-[80%] opacity-0 pointer-events-none")
          }
        >
          <img
            src={originalUrl + "/images/CheckCircle.svg"}
            className="mx-auto"
            alt=""
          />

          <div className="my-[24px]">
            <h5 className="font-semibold text__24 text-Mtext-text-primary dark:text-Mtext-text-primary-dark mb-1">
              Card Added Successfully!
            </h5>
            <p className="text__16 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
              Your Visa ****3456 is now saved for future payments.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 mt-[24px]">
            <div
              onClick={() => setTooglePopup("")}
              className="rounded-full inline-block text-center font-semibold text__18 text-Mtext-text-secondary dark:text-Mtext-text-secondary-dark !py-[15px] btnClass w-full cursor-pointer"
            >
              Set as Default
            </div>
            <div
              onClick={() => setTooglePopup("")}
              className="rounded-full inline-block text-center font-semibold text__18 text-white !py-[15px] bg-Mbrand-brand-primary !border-MPrimary btnClass w-full cursor-pointer shadow-[0px_4px_20px_rgba(1,_122,_255,_0.3),_inset_0px_1px_0px_rgba(255,_255,_255,_0.4),_inset_0px_-4px_13px_rgba(0,_0,_0,_0.2)]"
            >
              Close
            </div>
          </div>
        </div>

        <Container>
          <section className="pt-0 pb-[40px]">
            <Row className="gap-y-4">
              <Col xl={4}>
                <div className="grid grid-cols-1 gap-6">
                  <div className="p-[24px] border !border-Mborder-border-primary dark:!border-Mborder-border-primary-dark bg-Mbackgrounds-bg-primary dark:bg-Mbackgrounds-bg-primary-dark rounded-xl w-full">
                    <h5 className="font-semibold text__20 text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
                      Total Balance
                    </h5>
                    <div className="my-[24px]">
                      <div className="flex items-end gap-2">
                        <h5 className="font-semibold text__32 text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
                          $88,232.00
                        </h5>
                        <p className="text__14 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
                          USD
                        </p>
                      </div>
                      <div className="mt-1 flex items-center gap-2">
                        <p className="text__14 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
                          11 April 2022
                        </p>
                        <div className="flex items-center gap-1">
                          <img
                            src={
                              originalUrl +
                              "/images/heroicons-outline_trending-up.svg"
                            }
                            alt=""
                          />
                          <p className="text__14 text-Malerts-alerts-success">
                            2,05%
                          </p>
                        </div>
                      </div>
                    </div>
                    <Link
                      href={"/dashboard/my-wallet/withdraw"}
                      className="rounded-full inline-block text-center font-semibold text__14 text-white py-[10px] px-[12px] bg-Mbrand-brand-primary !border-MPrimary btnClass cursor-pointer shadow-[0px_4px_20px_rgba(1,_122,_255,_0.3),_inset_0px_1px_0px_rgba(255,_255,_255,_0.4),_inset_0px_-4px_13px_rgba(0,_0,_0,_0.2)]"
                    >
                      Withdraw
                    </Link>
                  </div>
                  <div className="p-[24px] border !border-Mborder-border-primary dark:!border-Mborder-border-primary-dark bg-Mbackgrounds-bg-primary dark:bg-Mbackgrounds-bg-primary-dark rounded-xl w-full">
                    <div className="grid grid-cols-1 gap-6">
                      <h5 className="font-semibold text__20 text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
                        Total Balance
                      </h5>
                      <CreditCard />
                      <CreditCard bgColor="bg-Madditional-additional-orange" />

                      <div
                        onClick={() => setTooglePopup("Manage Card")}
                        className="rounded-full inline-block text-center font-semibold text__16 py-[12px] px-[16px] w-full border !border-Mtext-brand text-Mtext-brand cursor-pointer"
                      >
                        Manage Card
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xl={8}>
                <div className="grid grid-cols-1 gap-6">
                  <div className="p-[24px] border !border-Mborder-border-primary dark:!border-Mborder-border-primary-dark bg-Mbackgrounds-bg-primary dark:bg-Mbackgrounds-bg-primary-dark rounded-xl w-full">
                    <h5 className="font-semibold text__20 text-Mtext-text-primary dark:text-Mtext-text-primary-dark mb-[24px]">
                      Quick Links
                    </h5>

                    <div className="grid grid-cols-5">
                      {[
                        {
                          icon: originalUrl + "/images/Plus.svg",
                          title: "Deposite",
                          link: "/dashboard/my-wallet/deposite",
                        },
                        {
                          icon: originalUrl + "/images/Send.svg",
                          title: "Send",
                          link: "/dashboard/send-money/contact",
                        },
                        {
                          icon: originalUrl + "/images/Paper Download.svg",
                          title: "Request",
                          link: "/dashboard/my-wallet/request-money",
                        },
                        {
                          icon: originalUrl + "/images/CalendarDots.svg",
                          title: "Schedule",
                          link: "/dashboard/my-wallet/scheduled-transfer",
                        },
                        {
                          icon: originalUrl + "/images/Paper.svg",
                          title: "Invoice",
                          link: "/dashboard/my-wallet/invoices",
                        },
                      ].map((obj, idx) => {
                        return (
                          <>
                            {obj.link ? (
                              <Link
                                href={obj.link}
                                className={
                                  "text-center cursor-pointer onHoverWrap md:border-l md:!border-Mborder-border-secondary dark:md:!border-Mborder-border-secondary-dark " +
                                  (idx == 0 ? "!border-none" : "")
                                }
                              >
                                <div className="w-[46px] xx:w-[56px] ss:w-[69px] h-[46px] xx:h-[56px] ss:h-[69px] relative overflow-hidden flex items-center justify-center border !border-Mborder-border-primary dark:!border-Mborder-border-primary-dark rounded-xl mx-auto text-[#007AFF] colorChange">
                                  <ReactSVG
                                    src={obj.icon}
                                    className="relative z-[1]"
                                  />
                                  <div className="animateBg bg-Mneutral-900 dark:bg-Mbrand-brand-primary"></div>
                                </div>

                                <p className="mt-3 font-medium text__14 text-[#757575]">
                                  {obj.title}
                                </p>
                              </Link>
                            ) : (
                              <div
                                className={
                                  "text-center cursor-pointer onHoverWrap md:border-l md:!border-Mborder-border-secondary md:dark:!border-Mborder-border-secondary-dark " +
                                  (idx == 0 ? "!border-none" : "")
                                }
                              >
                                <div className="w-[46px] xx:w-[56px] ss:w-[69px] h-[46px] xx:h-[56px] ss:h-[69px] relative overflow-hidden flex items-center justify-center border !border-Mborder-border-primary dark:!border-Mborder-border-primary-dark rounded-xl mx-auto text-[#007AFF] colorChange">
                                  <ReactSVG
                                    src={obj.icon}
                                    className="relative z-[1]"
                                  />
                                  <div className="animateBg bg-Mneutral-900 dark:bg-Mbrand-brand-primary"></div>
                                </div>

                                <p className="mt-3 font-medium text__14 text-[#757575]">
                                  {obj.title}
                                </p>
                              </div>
                            )}
                          </>
                        );
                      })}
                    </div>
                  </div>
                  <div className="p-[24px] border !border-Mborder-border-primary dark:!border-Mborder-border-primary-dark bg-Mbackgrounds-bg-primary dark:bg-Mbackgrounds-bg-primary-dark rounded-xl w-full">
                    <div className="flex items-center justify-between gap-3">
                      <h4 className="font-semibold text__20 text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
                        Money Flow
                      </h4>
                      <ChartFilter />
                    </div>
                    <ChartListDouble />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-[24px] border !border-Mborder-border-primary dark:!border-Mborder-border-primary-dark bg-Mbackgrounds-bg-primary dark:bg-Mbackgrounds-bg-primary-dark rounded-xl w-full">
                      <h5 className="font-semibold text__20 text-Mtext-text-primary dark:text-Mtext-text-primary-dark mb-[24px]">
                        Conversion
                      </h5>
                      <div className="mb-4">
                        <SelectCurencyField />
                      </div>
                      <SelectCurencyField select="€ EUR" />
                    </div>
                    <div className="p-[24px] border !border-Mborder-border-primary dark:!border-Mborder-border-primary-dark bg-Mbackgrounds-bg-primary dark:bg-Mbackgrounds-bg-primary-dark rounded-xl w-full">
                      <h5 className="font-semibold text__20 text-Mtext-text-primary dark:text-Mtext-text-primary-dark mb-[24px]">
                        Currency
                      </h5>

                      <div className="grid grid-cols-1 gap-4">
                        {[
                          {
                            country: "United States",
                            currency: "USD",
                            flag: "https://flagcdn.com/168x126/us.png",
                            price: "56,476.00",
                          },
                          {
                            country: "United Kingdom",
                            currency: "GBP",
                            flag: "https://flagcdn.com/168x126/gb.png",
                            price: "49,973.67",
                          },
                          {
                            country: "Germany",
                            currency: "EUR",
                            flag: "https://flagcdn.com/168x126/de.png",
                            price: "45,098.56",
                          },
                        ].map((obj) => {
                          return (
                            <div className="flex items-center justify-between gap-2">
                              <div className="flex items-center gap-2">
                                <img
                                  src={obj.flag}
                                  className="w-[24px] h-[24px] rounded-full object-cover"
                                  alt=""
                                />
                                <p className="font-medium text__16 text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
                                  {obj.currency}
                                </p>
                              </div>
                              <p className="font-medium text__16 text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
                                {obj.price}{" "}
                                <span className="text-Mtext-text-disable dark:text-Mtext-text-disable-dark">
                                  {obj.currency}
                                </span>
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
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
