import React, { Fragment, useRef, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import Layout from "@/Components/Layout/Layout";
import useHostname from "@/Components/Provider/HostnameProvider";
import { useDarkModeContext } from "../context/DarkModeContext";
import { ReactSVG } from "react-svg";
import BackdropFixed from "@/Components/Path/BackdropFixed";
import Link from "next/link";

const TRansaction = () => {
  const originalUrl = useHostname();
  const { darkMode } = useDarkModeContext();

  const [ToogleDetail, setToogleDetail] = useState(false);
  const [ToogleFilter, setToogleFilter] = useState(false);

  const dateInputRef = useRef(null);
  const [selectedDate, setSelectedDate] = useState("");

  const dateInputRefEnd = useRef(null);
  const [selectedDateEnd, setSelectedDateEnd] = useState("");

  const transactionTypes = [
    { id: "sent-money", label: "Sent Money" },
    { id: "received-money", label: "Received Money" },
    { id: "withdrawals", label: "Withdrawals" },
    { id: "deposits", label: "Deposits" },
  ];

  const paymentMethods = [
    { id: "bank-transfer", label: "Bank Transfer" },
    { id: "credit-card", label: "Credit Card" },
    { id: "wallet-balance", label: "Wallet Balance" },
  ];

  const transactionStatuses = [
    { id: "completed", label: "Completed" },
    { id: "pending", label: "Pending" },
    { id: "failed", label: "Failed" },
    { id: "canceled", label: "Canceled" },
  ];

  // State untuk menyimpan pilihan yang dipilih
  const [transactionTypeSelected, setTransactionTypeSelected] = useState([]);
  const [paymentMethodSelected, setPaymentMethodSelected] = useState([]);
  const [transactionStatusSelected, setTransactionStatusSelected] = useState(
    []
  );

  // Fungsi untuk menambahkan/menghapus pilihan Transaction Type
  const handleTransactionTypeChange = (id) => {
    if (transactionTypeSelected.includes(id)) {
      setTransactionTypeSelected(
        transactionTypeSelected.filter((item) => item !== id)
      );
    } else {
      setTransactionTypeSelected([...transactionTypeSelected, id]);
    }
  };

  // Fungsi untuk menambahkan/menghapus pilihan Payment Method
  const handlePaymentMethodChange = (id) => {
    if (paymentMethodSelected.includes(id)) {
      setPaymentMethodSelected(
        paymentMethodSelected.filter((item) => item !== id)
      );
    } else {
      setPaymentMethodSelected([...paymentMethodSelected, id]);
    }
  };

  // Fungsi untuk menambahkan/menghapus pilihan Transaction Status
  const handleTransactionStatusChange = (id) => {
    if (transactionStatusSelected.includes(id)) {
      setTransactionStatusSelected(
        transactionStatusSelected.filter((item) => item !== id)
      );
    } else {
      setTransactionStatusSelected([...transactionStatusSelected, id]);
    }
  };
  return (
    <Fragment>
      <Layout
        title="Transaction"
        description="Transaction"
        NavTitle={"Transaction"}
      >
        <BackdropFixed
          status={ToogleDetail}
          onAction={() => setToogleDetail(!ToogleDetail)}
        />

        <div
          className={
            "fixed w-full sm:w-[560px] h-full p-4 top-0 z-[99] transition-all duration-300 " +
            (ToogleDetail
              ? "-translate-x-1/2 sm:translate-x-0 left-1/2 sm:left-auto sm:right-0"
              : "opacity-0 left-full sm:left-auto sm:-right-full pointer-events-none")
          }
        >
          <div className="w-full h-full overflow-auto bg-Mbackgrounds-bg-primary dark:bg-Mbackgrounds-bg-primary-dark border !border-Mborder-border-primary dark:!border-Mborder-border-primary-dark rounded-3xl p-4 ss:p-[32px]">
            <div className="flex items-start justify-between gap-2 mb-[24px]">
              <h5 className="font-semibold text__20 text-Mtext-text-primary dark:text-Mtext-text-primary-dark mb-1">
                Transaction Details
              </h5>
              <ReactSVG
                onClick={() => setToogleDetail(!ToogleDetail)}
                className="cursor-pointer"
                src={originalUrl + "/images/Close.svg"}
                beforeInjection={(svg) => {
                  svg.setAttribute("fill", darkMode ? "white" : "#1A1A1A");
                }}
              />
            </div>
            <div className="grid grid-cols-1 gap-2">
              <div className="p-[20px] border !border-Mborder-border-primary dark:!border-Mborder-border-primary-dark rounded-[20px]">
                <div className="grid grid-cols-1 gap-[20px]">
                  <div className="flex items-center justify-between flex-wrap">
                    <p className="text__16 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark w-full mb-1">
                      Amount
                    </p>
                    <h5 className="font-semibold text__40 text-Mtext-text-primary dark:text-Mtext-text-primary-dark w-full">
                      $1000
                    </h5>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text__18 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
                      Transaction ID
                    </p>
                    <h5 className="font-medium text__18 text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
                      TX123456789
                    </h5>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text__18 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
                      Exchange rate USD
                    </p>
                    <h5 className="font-medium text__18 text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
                      1 USD = 0.92 EUR
                    </h5>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text__18 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
                      Transaction Fee
                    </p>
                    <h5 className="font-medium text__18 text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
                      $2.50
                    </h5>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text__18 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
                      Transaction Method
                    </p>
                    <h5 className="font-medium text__18 text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
                      Wallet Balance
                    </h5>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text__18 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
                      Date
                    </p>
                    <h5 className="font-medium text__18 text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
                      21-03-2025 · 10:32 AM
                    </h5>
                  </div>

                  <div className="flex items-center justify-between">
                    <p className="text__18 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
                      Status
                    </p>
                    <h5 className="font-medium text__18 text-Malerts-alerts-success">
                      Completed
                    </h5>
                  </div>
                </div>
              </div>
              <div className="p-[20px] border !border-Mborder-border-primary dark:!border-Mborder-border-primary-dark rounded-[20px]">
                <div className="grid grid-cols-1 gap-[20px]">
                  <div className="flex items-center justify-between">
                    <p className="text__18 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
                      Recipient
                    </p>
                    <h5 className="font-medium text__18 text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
                      Makenna Siphron
                    </h5>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text__18 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
                      Email
                    </p>
                    <h5 className="font-medium text__18 text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
                      makennasiphron@gmail.com
                    </h5>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text__18 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
                      Phone Number
                    </p>
                    <h5 className="font-medium text__18 text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
                      +49 170 1234567
                    </h5>
                  </div>
                </div>
              </div>
              <div className="p-[20px] border !border-Mborder-border-primary dark:!border-Mborder-border-primary-dark rounded-[20px]">
                <div className="grid grid-cols-1 gap-[20px]">
                  <div className="flex items-center justify-between">
                    <p className="text__18 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
                      Country
                    </p>
                    <h5 className="font-medium text__18 text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
                      Germany
                    </h5>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text__18 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
                      City
                    </p>
                    <h5 className="font-medium text__18 text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
                      Berlin
                    </h5>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text__18 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
                      Street Address
                    </p>
                    <h5 className="font-medium text__18 text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
                      123 Hauptstraße, 10117
                    </h5>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text__18 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
                      Postal Code
                    </p>
                    <h5 className="font-medium text__18 text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
                      10117
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center ss:grid ss:grid-cols-2 gap-2 mt-[24px]">
              <div
                onClick={() => setToogleDetail(!ToogleDetail)}
                className="rounded-full inline-block text-center font-semibold text__18 text-Mtext-text-secondary dark:text-Mtext-text-secondary-dark !py-[15px] btnClass w-full cursor-pointer"
              >
                Close
              </div>
              <div className="rounded-full inline-block text-center font-semibold text__18 text-white px-3 flex-shrink-0 ss:px-0 !py-[15px] bg-Mbrand-brand-primary !border-MPrimary btnClass ss:w-full cursor-pointer shadow-[0px_4px_20px_rgba(1,_122,_255,_0.3),_inset_0px_1px_0px_rgba(255,_255,_255,_0.4),_inset_0px_-4px_13px_rgba(0,_0,_0,_0.2)]">
                Download Receipt
              </div>
            </div>
          </div>
        </div>

        <Container>
          <section className="pt-0 pb-[40px]">
            <div className="flex items-center w-full gap-2 mb-[20px]">
              <div className="flex items-center gap-2 cursor-pointer w-full">
                <ReactSVG
                  src={originalUrl + "/images/Search.svg"}
                  beforeInjection={(svg) => {
                    svg.setAttribute("fill", darkMode ? "white" : "#404040");
                  }}
                />
                <input
                  type="text"
                  placeholder="Search..."
                  className="placeholder:text-Mtext-text-disable dark:placeholder:text-Mtext-text-disable-dark bg-transparent outline-none hover:active:focus:outline-none dark:text-white cursor-pointer text__14 w-full"
                />
              </div>
              <div className="cursor-pointer flex items-center gap-2 px-[12px] py-[10px] rounded-full border !border-Mtext-brand text-Micon-brand flex-shrink-0">
                <img src={originalUrl + "/images/ArrowSquareOut.svg"} alt="" />
                <p className="font-semibold text__14">Export</p>
              </div>
            </div>

            <div className="p-[24px] border !border-Mborder-border-primary dark:!border-Mborder-border-primary-dark bg-Mbackgrounds-bg-primary dark:bg-Mbackgrounds-bg-primary-dark rounded-xl w-full">
              <div className="flex items-center justify-between gap-2 mb-5">
                <h4 className="font-semibold text__20 text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
                  Transaction List
                </h4>
                <div className="relative inline-block">
                  <div
                    onClick={() => setToogleFilter(!ToogleFilter)}
                    className={
                      "cursor-pointer flex items-center gap-2 px-[10px] !pl-[6px] py-[6px] rounded-full border text-Mtext-text-primary dark:text-Mtext-text-primary-dark " +
                      (ToogleFilter
                        ? "!border-Mtext-brand"
                        : "!border-Mborder-border-primary dark:!border-Mborder-border-primary-dark")
                    }
                  >
                    <ReactSVG
                      src={originalUrl + "/images/Filter.svg"}
                      beforeInjection={(svg) => {
                        svg.setAttribute(
                          "fill",
                          darkMode ? "white" : "#404040"
                        );
                      }}
                    />
                    <p className="font-medium text__14">Filter</p>
                  </div>

                  <div
                    className={
                      "absolute -right-[1rem] ss:right-0 w-[300px] xx:w-[350px] ss:w-[370px] shadow-[32px_32px_40px_rgba(35,35,35,0.06)] rounded-[12px] bg-Mbackgrounds-bg-primary dark:bg-Mbackgrounds-bg-primary-dark border !border-Mborder-border-primary dark:!border-Mborder-border-primary-dark grid grid-cols-1 gap-2 transition-all duration-300 " +
                      (ToogleFilter
                        ? "top-[110%]"
                        : "top-[130%] opacity-0 pointer-events-none")
                    }
                  >
                    <div className="grid grid-cols-1">
                      <div className="w-full p-4">
                        <div className="">
                          <p className="text__12 text-Mtext-text-secondary dark:text-Mtext-text-secondary-dark mb-1">
                            Date Range
                          </p>
                          <div className="grid grid-cols-2 gap-2">
                            <div
                              className="flex items-center gap-2 py-[2px] pl-[12px] rounded-[12px] border !border-Mborder-border-primary dark:!border-Mborder-border-primary-dark relative"
                              onClick={() => dateInputRef.current.showPicker()}
                            >
                              <input
                                ref={dateInputRef}
                                type="date"
                                value={selectedDate}
                                onChange={(e) =>
                                  setSelectedDate(e.target.value)
                                }
                                className="absolute left-0 top-[80%] opacity-0 pointer-events-none"
                              />
                              <input
                                type="text"
                                className="w-full bg-transparent outline-none hover:active:focus:outline-none text__14 text-Mtext-text-primary dark:text-Mtext-text-primary-dark"
                                placeholder="Start Date"
                                value={selectedDate}
                              />
                              <ReactSVG
                                className="flex-shrink-0"
                                src={originalUrl + "/images/Icon.svg"}
                                beforeInjection={(svg) => {
                                  svg.setAttribute(
                                    "fill",
                                    darkMode ? "white" : "#1A1A1A"
                                  );
                                }}
                              />
                            </div>
                            <div
                              className="flex items-center gap-2 py-[2px] pl-[12px] rounded-[12px] border !border-Mborder-border-primary dark:!border-Mborder-border-primary-dark relative"
                              onClick={() =>
                                dateInputRefEnd.current.showPicker()
                              }
                            >
                              <input
                                ref={dateInputRefEnd}
                                type="date"
                                value={selectedDateEnd}
                                onChange={(e) =>
                                  setSelectedDateEnd(e.target.value)
                                }
                                className="absolute left-0 top-[80%] opacity-0 pointer-events-none"
                              />
                              <input
                                type="text"
                                className="w-full bg-transparent outline-none hover:active:focus:outline-none text__14 text-Mtext-text-primary dark:text-Mtext-text-primary-dark"
                                placeholder="Start Date"
                                value={selectedDateEnd}
                              />
                              <ReactSVG
                                className="flex-shrink-0"
                                src={originalUrl + "/images/Icon.svg"}
                                beforeInjection={(svg) => {
                                  svg.setAttribute(
                                    "fill",
                                    darkMode ? "white" : "#1A1A1A"
                                  );
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-full h-[1px] bg-Mborder-border-primary dark:bg-Mborder-border-primary-dark"></div>
                      <div className="w-full p-[12px]">
                        <div className="grid grid-cols-1">
                          <p className="text__12 text-Mtext-text-secondary dark:!text-Mtext-text-secondary-dark p-2">
                            Transaction Type
                          </p>
                          {transactionTypes.map((type) => (
                            <label
                              key={type.id}
                              className={
                                "flex items-center justify-between p-2 font-medium text__14 text-Mtext-text-primary dark:!text-Mtext-text-primary-dark " +
                                (transactionTypeSelected.includes(type.id)
                                  ? "bg-Mbackgrounds-bg-secondary dark:bg-Mbackgrounds-bg-secondary-dark"
                                  : "")
                              }
                            >
                              <input
                                className="hidden"
                                type="checkbox"
                                checked={transactionTypeSelected.includes(
                                  type.id
                                )}
                                onChange={() =>
                                  handleTransactionTypeChange(type.id)
                                }
                                style={{ marginRight: "8px" }}
                              />
                              {type.label}
                              {transactionTypeSelected.includes(type.id) && (
                                <ReactSVG
                                  src={originalUrl + "/images/Check.svg"}
                                  beforeInjection={(svg) => {
                                    svg.setAttribute(
                                      "fill",
                                      darkMode ? "white" : "#1A1A1A"
                                    );
                                  }}
                                />
                              )}
                            </label>
                          ))}
                        </div>
                      </div>
                      <div className="w-full h-[1px] bg-Mborder-border-primary dark:bg-Mborder-border-primary-dark"></div>
                      <div className="w-full p-[12px]">
                        <div className="grid grid-cols-1">
                          <p className="text__12 text-Mtext-text-secondary dark:!text-Mtext-text-secondary-dark p-2">
                            Payment Method
                          </p>
                          {paymentMethods.map((type) => (
                            <label
                              key={type.id}
                              className={
                                "flex items-center justify-between p-2 font-medium text__14 text-Mtext-text-primary dark:!text-Mtext-text-primary-dark " +
                                (paymentMethodSelected.includes(type.id)
                                  ? "bg-Mbackgrounds-bg-secondary dark:bg-Mbackgrounds-bg-secondary-dark"
                                  : "")
                              }
                            >
                              <input
                                className="hidden"
                                type="checkbox"
                                checked={paymentMethodSelected.includes(
                                  type.id
                                )}
                                onChange={() =>
                                  handlePaymentMethodChange(type.id)
                                }
                                style={{ marginRight: "8px" }}
                              />
                              {type.label}
                              {paymentMethodSelected.includes(type.id) && (
                                <ReactSVG
                                  src={originalUrl + "/images/Check.svg"}
                                  beforeInjection={(svg) => {
                                    svg.setAttribute(
                                      "fill",
                                      darkMode ? "white" : "#1A1A1A"
                                    );
                                  }}
                                />
                              )}
                            </label>
                          ))}
                        </div>
                      </div>
                      <div className="w-full h-[1px] bg-Mborder-border-primary dark:bg-Mborder-border-primary-dark"></div>
                      <div className="w-full p-[12px]">
                        <div className="grid grid-cols-1">
                          <p className="text__12 text-Mtext-text-secondary dark:!text-Mtext-text-secondary-dark p-2">
                            Transaction Status
                          </p>
                          {transactionStatuses.map((type) => (
                            <label
                              key={type.id}
                              className={
                                "flex items-center justify-between p-2 font-medium text__14 text-Mtext-text-primary dark:!text-Mtext-text-primary-dark " +
                                (transactionStatusSelected.includes(type.id)
                                  ? "bg-Mbackgrounds-bg-secondary dark:bg-Mbackgrounds-bg-secondary-dark"
                                  : "")
                              }
                            >
                              <input
                                className="hidden"
                                type="checkbox"
                                checked={transactionStatusSelected.includes(
                                  type.id
                                )}
                                onChange={() =>
                                  handleTransactionStatusChange(type.id)
                                }
                                style={{ marginRight: "8px" }}
                              />
                              {type.label}
                              {transactionStatusSelected.includes(type.id) && (
                                <ReactSVG
                                  src={originalUrl + "/images/Check.svg"}
                                  beforeInjection={(svg) => {
                                    svg.setAttribute(
                                      "fill",
                                      darkMode ? "white" : "#1A1A1A"
                                    );
                                  }}
                                />
                              )}
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 h-[700px] overflow-auto scrollCustom">
                <div className="grid grid-cols-2 md:grid-cols-7 pr-4 md:pr-0">
                  <div className="text__14 text-Mtext-text-tertiary dark:text-Mtext-text-secondary-dark md:col-span-2">
                    Name
                  </div>
                  <div className="md:block hidden text__14 text-Mtext-text-tertiary dark:text-Mtext-text-secondary-dark">
                    Date
                  </div>
                  <div className="md:block hidden text__14 text-Mtext-text-tertiary dark:text-Mtext-text-secondary-dark">
                    Type
                  </div>
                  <div className="text-right sm:text-left text__14 text-Mtext-text-tertiary dark:text-Mtext-text-secondary-dark">
                    Amount{" "}
                  </div>
                  <div className="md:block hidden text__14 text-Mtext-text-tertiary dark:text-Mtext-text-secondary-dark">
                    Status
                  </div>
                  <div className="md:block hidden text__14 text-Mtext-text-tertiary dark:text-Mtext-text-secondary-dark text-center">
                    Action
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
                  {
                    name: "Upwork",
                    date: "Apr 11, 2022",
                    transaction_type: "Withdraw",
                    amount: 64.0,
                    status: "Success",
                    icon_url: "/images/upwork.svg",
                  },
                  {
                    name: "Send to Cheyenne",
                    date: "Apr 11, 2022",
                    transaction_type: "Transfer",
                    amount: 64.0,
                    status: "Success",
                    icon_url: "/images/av6.png",
                  },
                  {
                    name: "Send to Lydia",
                    date: "Apr 11, 2022",
                    transaction_type: "Transfer",
                    amount: 64.0,
                    status: "Success",
                    icon_url: "/images/av5.png",
                  },
                  {
                    name: "Send to Kianna",
                    date: "Apr 11, 2022",
                    transaction_type: "Transfer",
                    amount: 64.0,
                    status: "Success",
                    icon_url: "/images/av2.png",
                  },
                  {
                    name: "Send to Nolan",
                    date: "Apr 11, 2022",
                    transaction_type: "Transfer",
                    amount: 64.0,
                    status: "Success",
                    icon_url: "/images/av6.png",
                  },
                  {
                    name: "Send to Ryan",
                    date: "Apr 11, 2022",
                    transaction_type: "Transfer",
                    amount: 64.0,
                    status: "Success",
                    icon_url: "/images/av3.png",
                  },
                ].map((transaction, index) => {
                  return (
                    <>
                      <div
                        onClick={() => setToogleDetail(!ToogleDetail)}
                        className="cursor-pointer grid grid-cols-2 md:grid-cols-7 text__16 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark  pr-4 md:pr-0"
                      >
                        <div className="flex items-center gap-2 md:col-span-2">
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
                        <div className="md:block hidden">
                          {transaction.date}
                        </div>
                        <div className="md:block hidden">
                          {transaction.transaction_type}
                        </div>
                        <div className="text-right sm:text-left text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
                          ${transaction.amount.toFixed(2)}
                        </div>
                        <div className="md:block hidden">
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
                        <div className="md:block hidden">
                          <ReactSVG
                            className="flex items-center justify-center"
                            src={originalUrl + "/images/Action Menu.svg"}
                            beforeInjection={(svg) => {
                              svg.setAttribute(
                                "fill",
                                darkMode ? "white" : "#1A1A1A"
                              );
                            }}
                          />
                        </div>
                      </div>
                      <div className="bg-Mborder-border-secondary dark:bg-Mborder-border-secondary-dark w-full h-[1px]"></div>
                    </>
                  );
                })}
              </div>
            </div>
          </section>
        </Container>
      </Layout>
    </Fragment>
  );
};

export default TRansaction;
