import Link from "next/link";
import React, { Fragment } from "react";
import useHostname from "../Provider/HostnameProvider";

const UpgradePlan = () => {
  const originalUrl = useHostname();
  return (
    <Fragment>
      <div className="rounded-xl p-4 bg-Mbackgrounds-bg-invert dark:bg-Mneutral-800 text-white relative overflow-hidden">
        <img src={originalUrl + "/images/"} alt="" />
        <div className="relative z-[1]">
          <h5 className="font-semibold text__24 mb-1">Upgrade Plan</h5>
          <p className="text__14 opacity-60 mb-[40px]">
            Get your pro feature by Subscribe FinPro and easy to manage your
            financial{" "}
          </p>

          <Link
            href={"/dashboard/pricing-plan"}
            className="rounded-full inline-block text-center font-semibold text__14 text-white py-[10px] px-[12px] bg-Mbrand-brand-primary !border-MPrimary btnClass cursor-pointer shadow-[0px_4px_20px_rgba(1,_122,_255,_0.3),_inset_0px_1px_0px_rgba(255,_255,_255,_0.4),_inset_0px_-4px_13px_rgba(0,_0,_0,_0.2)]"
          >
            Upgrade
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default UpgradePlan;
