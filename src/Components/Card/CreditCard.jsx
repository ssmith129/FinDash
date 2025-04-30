import React, { Fragment } from "react";
import useHostname from "../Provider/HostnameProvider";

const CreditCard = ({
  bgColor = "bg-Mbrand-brand-primary",
  type = "small",
}) => {
  const originalUrl = useHostname();
  return (
    <Fragment>
      <div
        className={
          "w-full rounded-2xl text-white relative z-[1] " +
          bgColor +
          " " +
          (type == "small" ? "h-[185px] p-6" : "h-[280px] p-[32px]")
        }
      >
        <img
          src={originalUrl + "/images/Patern (1).png"}
          className="absolute w-full h-full left-0 top-0 object-cover"
          alt=""
        />
        <div className="relative w-full h-full flex flex-wrap z-[1]">
          <div className="w-full flex items-start justify-between gap-3">
            <div className="">
              <p
                className={
                  "font-medium text-[#E6EFEB] " +
                  (type == "small" ? "text__14" : "text__18")
                }
              >
                Current Balance
              </p>
              <h5
                className={
                  "font-semibold " + (type == "small" ? "text__24" : "text__32 mt-2")
                }
              >
                $14,200.00
              </h5>
            </div>
            <img src={originalUrl + "/images/VISA logo.svg"} className={type == "small" ? "" : "w-[56px]"} alt="" />
          </div>
          <div className="w-full self-end flex items-center justify-between">
            <h5
              className={
                " text-[#E6EFEB] " +
                (type == "small" ? "font-semibold text__14" : "font-medium text__18")
              }
            >
              5294 2436 4780 9568
            </h5>
            <p className={type == "small" ? "text__12" : "text__16"}>12/26</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CreditCard;
