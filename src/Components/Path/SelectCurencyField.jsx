import React, { Fragment, useState } from "react";
import { Dropdown } from "react-bootstrap";
import useHostname from "../Provider/HostnameProvider";
import { useDarkModeContext } from "@/pages/context/DarkModeContext";
import { ReactSVG } from "react-svg";

const SelectCurencyField = ({ select = "$ USD" }) => {
  const originalUrl = useHostname();
  const { darkMode } = useDarkModeContext();

  const [selectedCurrency, setSelectedCurrency] = useState(select);
  return (
    <Fragment>
      <div className="flex items-center gap-2 py-3 px-4 rounded-xl bg-Mbackgrounds-bg-secondary dark:bg-Mbackgrounds-bg-secondary-dark border !border-Mborder-border-primary dark:!border-Mborder-border-primary-dark">
        <div className="pr-2 border-r !border-[#D1D8DD] flex-shrink-0">
          <Dropdown>
            {/* Tombol dropdown */}
            <Dropdown.Toggle
              variant="light"
              id="currency-dropdown"
              bsPrefix="custom-dropdown-toggle"
              className="flex items-center justify-between !p-0 !bg-transparent hover:!bg-transparent focus:!bg-transparent active:!bg-transparent !border-none hover:!border-none focus:!border-none active:!border-none"
            >
              <div className="text__14 font-medium text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
                {selectedCurrency}
              </div>
              <ReactSVG
                src={originalUrl + "/images/Chevron-down.svg"}
                beforeInjection={(svg) => {
                  svg.setAttribute("fill", darkMode ? "white" : "#1A1A1A");
                  svg.setAttribute("stroke", darkMode ? "white" : "#1A1A1A");
                }}
              />
            </Dropdown.Toggle>

            {/* Menu dropdown */}
            <Dropdown.Menu className="mt-2 bg-Mbackgrounds-bg-primary dark:bg-Mbackgrounds-bg-primary-dark border !border-Mborder-border-primary dark:!border-Mborder-border-primary-dark shadow-lg rounded-md">
              <Dropdown.Item
                onClick={() => setSelectedCurrency("$ USD")}
                className="px-4 py-2 text-sm text-Mtext-text-primary dark:text-Mtext-text-primary-dark cursor-pointer"
              >
                $ USD
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => setSelectedCurrency("€ EUR")}
                className="px-4 py-2 text-sm text-Mtext-text-primary dark:text-Mtext-text-primary-dark cursor-pointer"
              >
                € EUR
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => setSelectedCurrency("£ GBP")}
                className="px-4 py-2 text-sm text-Mtext-text-primary dark:text-Mtext-text-primary-dark cursor-pointer"
              >
                £ GBP
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => setSelectedCurrency("¥ JPY")}
                className="px-4 py-2 text-sm text-Mtext-text-primary dark:text-Mtext-text-primary-dark cursor-pointer"
              >
                ¥ JPY
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <input
          type="text"
          className="bg-transparent outline-none hover:active:focus:outline-none text__16 text-Mtext-text-disable dark:text-Mtext-text-disable-dark"
          placeholder="Enter Amount"
        />
      </div>
    </Fragment>
  );
};

export default SelectCurencyField;
