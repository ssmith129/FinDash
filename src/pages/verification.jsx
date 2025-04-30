import React, { Fragment, useState } from "react";
import Link from "next/link";
import LayoutAuth from "@/Components/Layout/LayoutAuth";
import { useDarkModeContext } from "./context/DarkModeContext";
import VerificationInput from "react-verification-input";

const Verification = () => {
  const { darkMode, setDarkMode } = useDarkModeContext();

  const [toogleChecklist, settoogleChecklist] = useState(false);
  return (
    <Fragment>
      <LayoutAuth
        title="FinDash - Verification"
        navbar={false}
        footer={false}
        imgAuth="/images/Group 162708.png"
      >
        <div className="mb-10 text-center">
          <h4 className="font-semibold text__32 dark:text-white mb-2">
            Verification OTP.
          </h4>
          <p className="text__18 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
            We have just sent you 6 digit code via your <br className="hidden lg:block" /> email
            example@gmail.com
          </p>
        </div>

        <div className="mb-6">
          <div className="mb-8 WrapVerification">
            <VerificationInput
              length={6}
              classNames={{
                container: "wrap",
                character: "character",
                characterInactive: "character--inactive",
                characterSelected: "character--selected",
              }}
            />
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/dashboard"
            className="rounded-full inline-block text-center font-medium text__16 text-white !py-[15px] bg-Mbrand-brand-primary !border-MPrimary btnClass w-full cursor-pointer shadow-[0px_4px_20px_rgba(1,_122,_255,_0.3),_inset_0px_1px_0px_rgba(255,_255,_255,_0.4),_inset_0px_-4px_13px_rgba(0,_0,_0,_0.2)]"
          >
            Continue
          </Link>
        </div>
      </LayoutAuth>
    </Fragment>
  );
};

export default Verification;
