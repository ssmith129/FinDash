import React, { Fragment, useState } from "react";
import Currency from "./Currency";

const InputCurency = ({
  title = "You Send",
  value = "1000",
  selectCurrencyData = {
    country: "United States",
    currency: "USD",
    flag: "https://flagcdn.com/168x126/us.png",
  },
}) => {
  const [inputValue, setinputValue] = useState(value);
  const [selectCurrency, setselectCurrency] = useState(selectCurrencyData);
  return (
    <Fragment>
      <div className="">
        <p className="text__12 text-Mtext-text-secondary dark:text-Mtext-text-secondary-dark mb-2">
          {title}
        </p>
        <div className="flex items-center gap-2 border !border-Mborder-border-primary dark:!border-Mborder-border-primary-dark rounded-xl py-[2px] px-[12px] h-[56px]">
          <input
            type="text"
            className="w-full bg-transparent outline-none hover:active:focus:outline-none font-medium text__20 text-Mtext-text-primary dark:text-Mtext-text-primary-dark"
            value={inputValue}
            onChange={(e) => setinputValue(e.target.value)}
          />
          <Currency
            selectCurrency={selectCurrency}
            setselectCurrency={setselectCurrency}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default InputCurency;
