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

const Invoices = () => {
  const originalUrl = useHostname();
  const { darkMode } = useDarkModeContext();

  const [TooglePopup, setTooglePopup] = useState("");

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
      <Layout title="Invoices" description="Invoices" NavTitle={"Invoices"}>
        <BackdropFixed
          status={TooglePopup}
          onAction={() => setTooglePopup("")}
        />

        <Container>
          <section className="pt-0 pb-[40px]">
            <div className="flex items-center gap-1 mb-[20px]">
              {[
                { title: "My Wallet", link: "/dashboard/my-wallet" },
                { title: "Invoices", link: "/dashboard/my-wallet/invoices" },
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

            <div className="p-[24px] border !border-Mborder-border-primary dark:!border-Mborder-border-primary-dark bg-Mbackgrounds-bg-primary dark:bg-Mbackgrounds-bg-primary-dark rounded-xl w-full mt-6">
              <div className="flex items-center justify-between gap-2 mb-5">
                <div className="flex items-center gap-2 w-full">
                  <ReactSVG
                    src={originalUrl + "/images/Search.svg"}
                    beforeInjection={(svg) => {
                      svg.setAttribute("fill", darkMode ? "white" : "#404040");
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="placeholder:text-Mtext-text-disable dark:placeholder:text-Mtext-text-disable-dark bg-transparent outline-none hover:active:focus:outline-none dark:text-white text__14 w-full"
                  />
                </div>
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
                <div className="grid grid-cols-2 md:grid-cols-7">
                  <div className="md:block hidden text__14 text-Mtext-text-tertiary dark:text-Mtext-text-secondary-dark">
                    Invoice Number
                  </div>
                  <div className="text__14 text-Mtext-text-tertiary dark:text-Mtext-text-secondary-dark">
                    Recipient
                  </div>
                  <div className="md:block hidden text__14 text-Mtext-text-tertiary dark:text-Mtext-text-secondary-dark">
                    Date
                  </div>
                  <div className="md:block hidden text__14 text-Mtext-text-tertiary dark:text-Mtext-text-secondary-dark">
                    Amount
                  </div>
                  <div className="md:pr-0 pr-3 text-right sm:text-left text__14 text-Mtext-text-tertiary dark:text-Mtext-text-secondary-dark">
                    Status
                  </div>
                  <div className="md:block hidden text__14 text-Mtext-text-tertiary dark:text-Mtext-text-secondary-dark">
                    Action
                  </div>
                  <div className="md:block hidden text__14 text-Mtext-text-tertiary"></div>
                </div>
                {[
                  {
                    invoiceNumber: "INV-1001",
                    name: "Jaylon Saris",
                    date: "Apr 11, 2022",
                    amount: "$640.00",
                    status: "Pending",
                    actions: ["Send Reminder"],
                  },
                  {
                    invoiceNumber: "INV-1002",
                    name: "Craig Vetrov",
                    date: "Apr 11, 2022",
                    amount: "$841.00",
                    status: "Pending",
                    actions: ["Send Reminder"],
                  },
                  {
                    invoiceNumber: "INV-1003",
                    name: "Allison Dias",
                    date: "Apr 11, 2022",
                    amount: "$645.00",
                    status: "Pending",
                    actions: ["Send Reminder"],
                  },
                  {
                    invoiceNumber: "INV-1004",
                    name: "Adison Dorwart",
                    date: "Apr 11, 2022",
                    amount: "$64.00",
                    status: "Overdue",
                    actions: ["Send Reminder"],
                  },
                  {
                    invoiceNumber: "INV-1005",
                    name: "Mira Lubin",
                    date: "Apr 11, 2022",
                    amount: "$64.00",
                    status: "Paid",
                    actions: ["Download"],
                  },
                  {
                    invoiceNumber: "INV-1006",
                    name: "Alena Aminoff",
                    date: "Apr 11, 2022",
                    amount: "$64.00",
                    status: "Overdue",
                    actions: ["Send Reminder"],
                  },
                  {
                    invoiceNumber: "INV-1007",
                    name: "Ruben Botosh",
                    date: "Apr 11, 2022",
                    amount: "$64.00",
                    status: "Paid",
                    actions: ["Download"],
                  },
                  {
                    invoiceNumber: "INV-1008",
                    name: "Cooper Curtis",
                    date: "Apr 11, 2022",
                    amount: "$64.00",
                    status: "Paid",
                    actions: ["Download"],
                  },
                  {
                    invoiceNumber: "INV-1009",
                    name: "Kierra Workman",
                    date: "Apr 11, 2022",
                    amount: "$64.00",
                    status: "Paid",
                    actions: ["Download"],
                  },
                ].map((transaction, index) => {
                  return (
                    <>
                      <div
                        key={index}
                        className="md:pr-0 pr-3 cursor-pointer grid grid-cols-2 md:grid-cols-7 text__16 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark"
                      >
                        <div className="md:block hidden">
                          {transaction.invoiceNumber}
                        </div>
                        <div className="text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
                          {transaction.name}

                          <p className="md:hidden mt-1 text__14 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
                            {transaction.invoiceNumber}
                          </p>
                        </div>
                        <div className="md:block hidden">
                          {transaction.date}
                        </div>
                        <div className="md:block hidden">
                          {transaction.amount}
                        </div>
                        <div className="text-right sm:text-left">
                          <div
                            className={`inline-block text__14 font-medium ${
                              transaction.status === "Paid"
                                ? "text-Malerts-alerts-success bg-Malerts-alerts-success-bg"
                                : "text-Malerts-alerts-warning bg-Malerts-alerts-warning-bg"
                            } px-4 py-1 rounded-full`}
                          >
                            {transaction.status}
                          </div>
                        </div>
                        <div className="md:block hidden">
                          <a
                            href="#!"
                            className="font-semibold text__14 text-Mtext-brand underline"
                          >
                            View
                          </a>
                        </div>
                        <div className="md:block hidden">
                          {transaction.actions.map((action, actionIndex) => (
                            <a
                              key={actionIndex}
                              href="#!"
                              className="font-semibold text__14 text-Mtext-text-secondary dark:text-Mtext-text-secondary-dark underline"
                            >
                              {action}
                            </a>
                          ))}
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

export default Invoices;
