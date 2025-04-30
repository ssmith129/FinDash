import React, { Fragment, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import Layout from "@/Components/Layout/Layout";
import useHostname from "@/Components/Provider/HostnameProvider";
import { useDarkModeContext } from "../context/DarkModeContext";
import { ReactSVG } from "react-svg";
import ChartLine from "@/Components/Chart/ChartLine";
import SliderCardCredit from "@/Components/Slider/SliderCardCredit";
import { FormattedInput } from "@buttercup/react-formatted-input";
import BackdropFixed from "@/Components/Path/BackdropFixed";
import Link from "next/link";
import ChartFilter from "@/Components/Path/ChartFilter";

const Index = () => {
  const originalUrl = useHostname();
  const { darkMode } = useDarkModeContext();

  const idPattern = [
    { char: /\d/, repeat: 4 },
    { exactly: " " }, // Added space as a character
    { exactly: "•" }, // The bullet character
    { exactly: " " }, // Added space as a character
    { char: /\d/, repeat: 4 },
    { exactly: " " }, // Added space as a character
    { exactly: "•" }, // The bullet character
    { exactly: " " }, // Added space as a character
    { char: /\d/, repeat: 4 },
    { exactly: " " }, // Added space as a character
    { exactly: "•" }, // The bullet character
    { exactly: " " }, // Added space as a character
    { char: /\d/, repeat: 4 },
  ];
  const [cardNumber, setCardNumber] = useState("3484343423232143");

  const [ToogleContact, setToogleContact] = useState(false);
  return (
    <Fragment>
      <Layout title="Dashboard" description="Dashboard" NavTitle={"Dashboard"}>
        <BackdropFixed
          status={ToogleContact}
          onAction={() => setToogleContact(!ToogleContact)}
        />
        <div
          className={
            "fixed w-full sm:w-[560px] h-full p-4 top-0 z-[99] transition-all duration-300 " +
            (ToogleContact
              ? "-translate-x-1/2 sm:translate-x-0 left-1/2 sm:left-auto sm:right-0"
              : "opacity-0 left-full sm:left-auto sm:-right-full pointer-events-none")
          }
        >
          <div className="w-full h-full overflow-auto bg-Mbackgrounds-bg-primary dark:bg-Mbackgrounds-bg-primary-dark border !border-Mborder-border-primary dark:!border-Mborder-border-primary-dark rounded-3xl p-[32px]">
            <div className="flex items-start justify-between gap-2 mb-[24px]">
              <div className="">
                <h5 className="font-semibold text__20 text-Mtext-text-primary dark:text-Mtext-text-primary-dark mb-1">
                  Contact
                </h5>
                <p className="text__16 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
                  Enter an email, phone number, or username.
                </p>
              </div>
              <ReactSVG
                onClick={() => setToogleContact(!ToogleContact)}
                className="cursor-pointer"
                src={originalUrl + "/images/Close.svg"}
                beforeInjection={(svg) => {
                  svg.setAttribute("fill", darkMode ? "white" : "#1A1A1A");
                }}
              />
            </div>

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
                    svg.setAttribute("fill", darkMode ? "white" : "#404040");
                  }}
                />
                <p className="font-semibold text__16 text-Mtext-text-secondary dark:text-Mtext-text-secondary-dark">
                  Add recipient
                </p>
              </div>
              <ReactSVG
                src={originalUrl + "/images/Chevron-right.svg"}
                beforeInjection={(svg) => {
                  svg.setAttribute("fill", darkMode ? "white" : "#404040");
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
                {
                  name: "Terry Ekstrom Bothman",
                  phone: "487 2356 3981",
                  image: "/images/ss3.png",
                },
                {
                  name: "James Vetrovs",
                  phone: "487 2356 3981",
                  image: "/images/ss2.png",
                },
                {
                  name: "Kianna Mango",
                  phone: "487 2356 3981",
                  image: "/images/ss1.png",
                },
                {
                  name: "Cheyenne Passaquindici",
                  phone: "487 2356 3981",
                  image: "/images/av2.png",
                },
              ].map((contact, index) => {
                return (
                  <Fragment>
                    {index > 0 ? (
                      <div className="w-full h-[1px] bg-Mborder-border-primary dark:bg-Mborder-border-primary-dark"></div>
                    ) : (
                      ""
                    )}
                    <Link
                      href={{
                        pathname: "/dashboard/send-money/contact", // Halaman tujuan
                        query: { step: 1 }, // Data yang ingin dikirim
                      }}
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
                    </Link>
                  </Fragment>
                );
              })}
            </div>
          </div>
        </div>

        <Container>
          <section className="pt-0 pb-[40px]">
            <Row className="gap-y-4">
              <Col xl={8}>
                <div className="grid grid-cols-1 gap-[24px] w-full">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                      {
                        icon: originalUrl + "/images/Walleta.svg",
                        title: "Total Balance",
                        nominal: "$14,200.00",
                      },
                      {
                        icon: originalUrl + "/images/Download.svg",
                        title: "Income",
                        nominal: "$8,342.00",
                      },
                      {
                        icon: originalUrl + "/images/Upload.svg",
                        title: "Spending",
                        nominal: "$5,243.00",
                      },
                      {
                        icon: originalUrl + "/images/Swapa.svg",
                        title: "Transaction",
                        nominal: "$5,243.00",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="p-3 rounded-xl w-full border !border-Mborder-border-primary dark:!border-Mborder-border-primary-dark relative onHoverWrap overflow-hidden"
                      >
                        <div className="animateBg lg bg-Mbrand-brand-primary"></div>
                        <div className="relative z-[1] colorChange lg text-Mbrand-brand-primary">
                          <ReactSVG src={item.icon} />
                          <p className="text__14 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark opacity-70 mt-3 mb-1">
                            {item.title}
                          </p>
                          <h5 className="font-semibold text__20 text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
                            {item.nominal}
                          </h5>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-xl border !border-Mborder-border-primary dark:!border-Mborder-border-primary-dark p-4">
                    <div className="flex items-center justify-between gap-3">
                      <h4 className="font-semibold text__20 text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
                        Total Balance
                      </h4>
                      <ChartFilter />
                    </div>
                    <ChartLine />
                  </div>
                  <div className="rounded-xl border !border-Mborder-border-primary dark:!border-Mborder-border-primary-dark p-4">
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <h4 className="font-semibold text__20 text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
                        Recent Transaction
                      </h4>
                      <a
                        href="#!"
                        className="inline-block font-semibold text__12 text-Mtext-text-secondary dark:text-Mtext-text-secondary-dark"
                      >
                        See All
                      </a>
                    </div>
                    <div className="grid grid-cols-1 gap-3">
                      <div className="grid grid-cols-2 sm:grid-cols-5">
                        <div className="text__14 text-Mtext-text-tertiary dark:text-Mtext-text-secondary-dark">
                          Name
                        </div>
                        <div className="sm:block hidden text__14 text-Mtext-text-tertiary dark:text-Mtext-text-secondary-dark">
                          Date
                        </div>
                        <div className="sm:block hidden text__14 text-Mtext-text-tertiary dark:text-Mtext-text-secondary-dark">
                          Type
                        </div>
                        <div className="text__14 text-Mtext-text-tertiary dark:text-Mtext-text-secondary-dark text-right sm:text-left">
                          Amount{" "}
                        </div>
                        <div className="sm:block hidden text__14 text-Mtext-text-tertiary dark:text-Mtext-text-secondary-dark">
                          Status
                        </div>
                      </div>
                      {[
                        {
                          name: "Figma",
                          date: "Apr 11, 2022",
                          transaction_type: "Subscription",
                          amount: 640.0,
                          status: "Success",
                          icon_url: "/images/figma.svg",
                        },
                        {
                          name: "Upwork",
                          date: "Apr 11, 2022",
                          transaction_type: "Withdraw",
                          amount: 841.0,
                          status: "Pending",
                          icon_url: "/images/upwork.svg",
                        },
                        {
                          name: "Send to Joe",
                          date: "Apr 11, 2022",
                          transaction_type: "Transfer",
                          amount: 645.0,
                          status: "Pending",
                          icon_url: "/images/Ellipse 73.png",
                        },
                      ].map((transaction, index) => {
                        return (
                          <div className="grid grid-cols-2 sm:grid-cols-5 text__16 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
                            <div className="flex items-center gap-2">
                              <div className="w-[36px] h-[36px] rounded-full flex items-center justify-center border !border-[#EDF2F7]">
                                <img
                                  src={transaction.icon_url}
                                  alt={transaction.name}
                                />
                              </div>
                              <p className="text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
                                {transaction.name}
                              </p>
                            </div>
                            <div className="sm:block hidden">
                              {transaction.date}
                            </div>
                            <div className="sm:block hidden">
                              {transaction.transaction_type}
                            </div>
                            <div className="text-right sm:text-left text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
                              ${transaction.amount.toFixed(2)}
                            </div>
                            <div className="sm:block hidden">
                              <div
                                className={`inline-block text__14 font-medium ${
                                  transaction.status === "Success"
                                    ? "text-Malerts-alerts-success bg-Malerts-alerts-success-bg"
                                    : "text-Malerts-alerts-warning bg-Malerts-alerts-warning-bg"
                                } px-4 py-1 rounded-full`}
                              >
                                {transaction.status}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </Col>
              <Col xl={4}>
                <div className="grid grid-cols-1 gap-[24px]">
                  <div className="rounded-xl border !border-Mborder-border-primary dark:!border-Mborder-border-primary-dark p-4">
                    <h4 className="font-semibold text__20 mb-3 text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
                      My Card
                    </h4>
                    <SliderCardCredit />

                    <div className="mt-[36px]">
                      <div className="grid grid-cols-4">
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
                            icon: originalUrl + "/images/Paper.svg",
                            title: "Invoice",
                            link: "/dashboard/my-wallet/invoices",
                          },
                        ].map((obj) => {
                          return (
                            <Link
                              href={obj.link}
                              className="text-center cursor-pointer onHoverWrap"
                            >
                              <div className="w-[56px] ss:w-[69px] h-[56px] ss:h-[69px] relative overflow-hidden flex items-center justify-center border !border-Mborder-border-secondary dark:!border-Mborder-border-secondary-dark rounded-xl mx-auto text-[#007AFF] colorChange">
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
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="rounded-xl border !border-Mborder-border-primary dark:!border-Mborder-border-primary-dark p-4">
                    <h4 className="font-semibold text__20 mb-3 text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
                      Quick Transfer
                    </h4>
                    <div className="flex items-center gap-2 justify-between">
                      <img
                        src={originalUrl + "/images/av1.png"}
                        className="w-[38px] h-[38px] rounded-full object-cover"
                        alt=""
                      />
                      <img
                        src={originalUrl + "/images/av2.png"}
                        className="w-[38px] h-[38px] rounded-full object-cover"
                        alt=""
                      />
                      <img
                        src={originalUrl + "/images/av3.png"}
                        className="w-[38px] h-[38px] rounded-full object-cover"
                        alt=""
                      />
                      <img
                        src={originalUrl + "/images/av4.png"}
                        className="w-[38px] h-[38px] rounded-full object-cover"
                        alt=""
                      />
                      <img
                        src={originalUrl + "/images/av5.png"}
                        className="w-[38px] h-[38px] rounded-full object-cover"
                        alt=""
                      />
                      <img
                        src={originalUrl + "/images/av6.png"}
                        className="w-[38px] h-[38px] rounded-full object-cover ss:block hidden"
                        alt=""
                      />
                      <div
                        className="w-[38px] h-[38px] rounded-full cursor-pointer flex items-center justify-center bg-Mbackgrounds-bg-secondary dark:bg-Mbackgrounds-bg-secondary-dark border !border-Mborder-border-primary dark:!border-Mborder-border-primary-dark flex-shrink-0"
                        onClick={() => setToogleContact(!ToogleContact)}
                      >
                        <ReactSVG
                          src={originalUrl + "/images/Arrow - Right 4.svg"}
                          beforeInjection={(svg) => {
                            svg.setAttribute(
                              "fill",
                              darkMode ? "white" : "#1A1A1A"
                            );
                          }}
                        />
                      </div>
                    </div>

                    <div className="mt-6 mb-4">
                      <p className="text__14 text-Mtext-text-secondary dark:text-Mtext-text-secondary-dark mb-2">
                        Card Number
                      </p>
                      <div className="flex items-center justify-between px-4 h-[56px] rounded-xl border !border-Mborder-border-primary dark:!border-Mborder-border-primary-dark bg-Mbackgrounds-bg-primary dark:bg-Mbackgrounds-bg-primary-dark">
                        <FormattedInput
                          className="w-100 text-Mneutral-900 dark:text-white bg-transparent outline-none active:hover:focus:outline-none"
                          format={idPattern}
                          value={cardNumber}
                          onChange={(formattedValue, raw) => {
                            setCardNumber(formattedValue);
                          }}
                          placeholder="Write Card Number"
                        />
                        <ReactSVG
                          src={originalUrl + "/images/visa 1.svg"}
                          beforeInjection={(svg) => {
                            svg.setAttribute(
                              "fill",
                              darkMode ? "white" : "#1F2C37"
                            );
                          }}
                        />
                      </div>
                    </div>

                    <div className="flex items-center gap-2 justify-between px-4 h-[56px] rounded-xl border !border-Mborder-border-primary dark:!border-Mborder-border-primary-dark bg-Mbackgrounds-bg-primary dark:bg-Mbackgrounds-bg-primary-dark mb-9">
                      <div className="flex items-center gap-2">
                        <span className="dark:text-white">$</span>{" "}
                        <ReactSVG
                          src={originalUrl + "/images/chevron-down (1).svg"}
                          beforeInjection={(svg) => {
                            svg.setAttribute(
                              "stroke",
                              darkMode ? "white" : "#1A1A1A"
                            );
                          }}
                        />
                        <span className="text-Mneutral-900 dark:text-white opacity-[0.08]">
                          |
                        </span>
                      </div>
                      <input
                        type="text"
                        placeholder="Enter Amount"
                        className="bg-transparent outline-none hover:active:focus:outline-none w-full dark:text-white"
                      />
                    </div>

                    <Link
                      href="/dashboard/send-money/contact"
                      className="rounded-full inline-block text-center font-medium text__16 text-white !py-[15px] bg-Mbrand-brand-primary !border-MPrimary btnClass w-full cursor-pointer shadow-[0px_4px_20px_rgba(1,_122,_255,_0.3),_inset_0px_1px_0px_rgba(255,_255,_255,_0.4),_inset_0px_-4px_13px_rgba(0,_0,_0,_0.2)]"
                    >
                      Send Money
                    </Link>
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
