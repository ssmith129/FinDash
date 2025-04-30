import React, { Fragment, useState } from "react";
import { ReactSVG } from "react-svg";
import useHostname from "../Provider/HostnameProvider";
import { useDarkModeContext } from "@/pages/context/DarkModeContext";

const Currency = ({
  selectCurrency = {
    country: "United States",
    currency: "USD",
    flag: "https://flagcdn.com/168x126/us.png",
  },
  setselectCurrency,
}) => {
  const originalUrl = useHostname();
  const { darkMode } = useDarkModeContext();
  const [openCurrency, setopenCurrency] = useState(false);
  const flagMoney = [
    {
      country: "United States",
      currency: "USD",
      flag: "https://flagcdn.com/168x126/us.png",
    },
    {
      country: "Canada",
      currency: "CAD",
      flag: "https://flagcdn.com/168x126/ca.png",
    },
    {
      country: "United Kingdom",
      currency: "GBP",
      flag: "https://flagcdn.com/168x126/gb.png",
    },
    {
      country: "Germany",
      currency: "EUR",
      flag: "https://flagcdn.com/168x126/de.png",
    },
    {
      country: "France",
      currency: "EUR",
      flag: "https://flagcdn.com/168x126/fr.png",
    },
    {
      country: "Australia",
      currency: "AUD",
      flag: "https://flagcdn.com/168x126/au.png",
    },
    {
      country: "Japan",
      currency: "JPY",
      flag: "https://flagcdn.com/168x126/jp.png",
    },
    {
      country: "India",
      currency: "INR",
      flag: "https://flagcdn.com/168x126/in.png",
    },
    {
      country: "Brazil",
      currency: "BRL",
      flag: "https://flagcdn.com/168x126/br.png",
    },
    {
      country: "South Korea",
      currency: "KRW",
      flag: "https://flagcdn.com/168x126/kr.png",
    },
  ];
  
  return (
    <Fragment>
      <div className="relative flex-shrink-0">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setopenCurrency(!openCurrency)}
        >
          <img
            src={selectCurrency.flag}
            className="w-[20px] h-[20px] rounded-full object-cover"
            alt=""
          />
          <p className="text__12 text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
            {selectCurrency.currency}
          </p>
          <div
            className={
              "transition-all duration-300 " +
              (openCurrency ? "-rotate-180" : "")
            }
          >
            <ReactSVG
              src={originalUrl + "/images/Chevron-down.svg"}
              beforeInjection={(svg) => {
                svg.setAttribute("fill", darkMode ? "white" : "#1A1A1A");
                svg.setAttribute("stroke", darkMode ? "white" : "#1A1A1A");
              }}
            />
          </div>
        </div>

        <div
          className={
            "w-[85px] absolute right-0  bg-Mbackgrounds-bg-primary dark:bg-Mbackgrounds-bg-primary-dark rounded-xl grid grid-cols-1 shadow-[32px_32px_40px_rgba(35,35,35,0.06)] h-[200px] overflow-auto transition-all duration-300 " +
            (openCurrency
              ? "top-[110%]"
              : "top-[135%] opacity-0 pointer-events-none")
          }
        >
          {flagMoney.map((obj) => {
            return (
              <div
                className={
                  "flex items-center gap-2 cursor-pointer p-2 " +
                  (obj.country == selectCurrency.country
                    ? "bg-Mbackgrounds-bg-tertiary dark:bg-Mtext-text-tertiary-dark"
                    : "")
                }
                onClick={(e) => setselectCurrency(obj)}
              >
                <img
                  src={obj.flag}
                  className="w-[20px] h-[20px] rounded-full object-cover"
                  alt=""
                />
                <p className="text__12 text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
                  {obj.currency}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default Currency;
