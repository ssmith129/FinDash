import React, { Fragment, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import Layout from "@/Components/Layout/Layout";
import useHostname from "@/Components/Provider/HostnameProvider";
import { useDarkModeContext } from "../context/DarkModeContext";
import { ReactSVG } from "react-svg";
import ChartLine from "@/Components/Chart/ChartLine";
import BackdropFixed from "@/Components/Path/BackdropFixed";
import ChartBar from "@/Components/Chart/ChartBar";
import ChartDonut from "@/Components/Chart/ChartDonut";
import Link from "next/link";
import UpgradePlan from "@/Components/Path/UpgradePlan";
import ChartFilter from "@/Components/Path/ChartFilter";

const Analytics = () => {
  const originalUrl = useHostname();
  const { darkMode } = useDarkModeContext();

  const [ToogleContact, setToogleContact] = useState(false);
  return (
    <Fragment>
      <Layout title="Analytics" description="Analytics" NavTitle={"Analytics"}>
        <BackdropFixed
          status={ToogleContact}
          onAction={() => setToogleContact(!ToogleContact)}
        />
        <div
          className={
            "fixed w-[560px] h-full p-4 top-0 z-[99] transition-all duration-300 " +
            (ToogleContact
              ? "right-0"
              : "opacity-0 -right-full  pointer-events-none")
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
                        Income
                      </h4>
                      <ChartFilter />
                    </div>
                    <ChartBar />
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
                </div>
              </Col>
              <Col xl={4}>
                <div className="grid grid-cols-1 gap-[24px]">
                  <div className="rounded-xl border !border-Mborder-border-primary dark:!border-Mborder-border-primary-dark p-4">
                    <h4 className="font-semibold text__20 mb-3 text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
                      Spending
                    </h4>

                    <div className="flex items-center justify-between gap-2">
                      <ChartDonut />

                      <div className="flex flex-wrap gap-3">
                        <div className="w-full flex items-center gap-2">
                          <div className="w-[6px] h-[6px] rounded-full bg-Mbrand-brand-primary"></div>
                          <div className="">
                            <p className="text__12 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
                              Subscribe
                            </p>
                            <h5 className="font-semibold text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
                              $980.00
                            </h5>
                          </div>
                        </div>
                        <div className="w-full flex items-center gap-2">
                          <div className="w-[6px] h-[6px] rounded-full bg-Mbrand-brand-primary opacity-50"></div>
                          <div className="">
                            <p className="text__12 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
                              Home
                            </p>
                            <h5 className="font-semibold text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
                              $3,643.00
                            </h5>
                          </div>
                        </div>
                        <div className="w-full flex items-center gap-2">
                          <div className="w-[6px] h-[6px] rounded-full bg-Mbrand-brand-primary opacity-10"></div>
                          <div className="">
                            <p className="text__12 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
                              Others
                            </p>
                            <h5 className="font-semibold text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
                              $232.00
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-xl border !border-Mborder-border-primary dark:!border-Mborder-border-primary-dark p-4 grid grid-cols-1 gap-4">
                    <h4 className="font-semibold text__20 text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
                      My Saving
                    </h4>

                    <div className="p-3 rounded-xl border !border-Mborder-border-primary dark:!border-Mborder-border-primary-dark">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="flex items-center justify-center w-[32px] h-[32px] rounded-full border !border-Mborder-border-secondary dark:!border-Mborder-border-secondary-dark">
                            <img
                              src={originalUrl + "/images/Wallets ss.svg"}
                              alt=""
                            />
                          </div>
                          <p className="font-medium text__14 text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
                            Mutual funds
                          </p>
                        </div>
                        <h5 className="font-semibold text__16 text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
                          $454.00
                        </h5>
                      </div>

                      <div className="mb-2 mt-3 relative w-full h-[6px] rounded-full overflow-hidden bg-Mbackgrounds-bg-tertiary dark:bg-Mbackgrounds-bg-tertiary-dark">
                        <div className="w-[80%] h-full absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-Mbrand-brand-primary"></div>
                      </div>
                      <p className="text__12 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
                        Monthly income 10%
                      </p>
                    </div>

                    <div className="p-3 rounded-xl border !border-Mborder-border-primary dark:!border-Mborder-border-primary-dark">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="flex items-center justify-center w-[32px] h-[32px] rounded-full border !border-Mborder-border-secondary dark:!border-Mborder-border-secondary-dark">
                            <img
                              src={originalUrl + "/images/Activity.svg"}
                              alt=""
                            />
                          </div>
                          <p className="font-medium text__14 text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
                            Investment
                          </p>
                        </div>
                        <h5 className="font-semibold text__16 text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
                          $213.78
                        </h5>
                      </div>

                      <div className="mb-2 mt-3 relative w-full h-[6px] rounded-full overflow-hidden bg-Mbackgrounds-bg-tertiary dark:bg-Mbackgrounds-bg-tertiary-dark">
                        <div className="w-[50%] h-full absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-Mbrand-brand-primary"></div>
                      </div>
                      <p className="text__12 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
                        Monthly income 5%
                      </p>
                    </div>
                  </div>

                  <UpgradePlan />
                </div>
              </Col>
            </Row>
          </section>
        </Container>
      </Layout>
    </Fragment>
  );
};

export default Analytics;
