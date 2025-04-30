import React, { Fragment, useState } from "react";
import useHostname from "../Provider/HostnameProvider";
import { useDarkModeContext } from "@/pages/context/DarkModeContext";
import { ReactSVG } from "react-svg";
import { Form } from "react-bootstrap";

const PasswordSecurity = () => {
  const originalUrl = useHostname();
  const { darkMode } = useDarkModeContext();

  const [tooglePassword, settooglePassword] = useState(true);
  const [tooglePasswordNew, settooglePasswordNew] = useState(true);
  const [tooglePasswordConfirm, settooglePasswordConfirm] = useState(true);
  return (
    <Fragment>
      <div className="grid grid-cols-1 gap-[32px] text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
        <div className="">
          <h4 className="font-semibold text__20 mb-1">Password & Security</h4>
          <p className="text__16 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
            Manage your password and keep your account secure.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-[24px]">
          <div className="grid grid-cols-1 gap-[16px]">
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label className="font-normal text__14 text-Mtext-text-secondary dark:text-white">
                Current Password
              </Form.Label>
              <div className="relative">
                <Form.Control
                  type={tooglePassword ? "password" : "text"}
                  placeholder="Enter your password"
                  className="placeholder:text-Mtext-text-disable font-medium text__14 bg-[rgba(255,255,255,0.002)] h-[54px] rounded-[20px] px-3 outline-none shadow-none focus:outline-none focus:shadow-none border-Mborder-border-primary focus:border-Mborder-border-primary focus:bg-white dark:focus:bg-[rgba(255,255,255,0.002)] dark:border-Mborder-border-primary-dark dark:text-white text-Mtext-text-primary"
                />
                <img
                  onClick={() => settooglePassword(!tooglePassword)}
                  src="./../../images/eye-slash.svg"
                  className="cursor-pointer absolute top-1/2 -translate-y-1/2 right-4"
                  alt=""
                />
              </div>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label className="font-normal text__14 text-Mtext-text-secondary dark:text-white">
                New Password
              </Form.Label>
              <div className="relative">
                <Form.Control
                  type={tooglePasswordNew ? "password" : "text"}
                  placeholder="Enter your password"
                  className="placeholder:text-Mtext-text-disable font-medium text__14 bg-[rgba(255,255,255,0.002)] h-[54px] rounded-[20px] px-3 outline-none shadow-none focus:outline-none focus:shadow-none border-Mborder-border-primary focus:border-Mborder-border-primary focus:bg-white dark:focus:bg-[rgba(255,255,255,0.002)] dark:border-Mborder-border-primary-dark dark:text-white text-Mtext-text-primary"
                />
                <img
                  onClick={() => settooglePasswordNew(!tooglePasswordNew)}
                  src="./../../images/eye-slash.svg"
                  className="cursor-pointer absolute top-1/2 -translate-y-1/2 right-4"
                  alt=""
                />
              </div>
            </Form.Group>
            <div className="">
              <Form.Label className="font-normal text__14 text-Mtext-text-secondary dark:text-white">
                Password must:
              </Form.Label>

              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2">
                  <ReactSVG
                    src={`${originalUrl}/images/Check 3.svg`}
                    beforeInjection={(svg) => {
                      svg.setAttribute("fill", darkMode ? "white" : "#A3A3A3");
                    }}
                  />
                  <p className="text__12 text-Mtext-text-secondary dark:text-Mtext-text-secondary-dark">Be at least 8 characters long</p>
                </div>
                <div className="flex items-center gap-2">
                  <ReactSVG
                    src={`${originalUrl}/images/Check 3.svg`}
                    beforeInjection={(svg) => {
                      svg.setAttribute("fill", darkMode ? "white" : "#A3A3A3");
                    }}
                  />
                  <p className="text__12 text-Mtext-text-secondary dark:text-Mtext-text-secondary-dark">Include uppercase & lowercase letters</p>
                </div>
                <div className="flex items-center gap-2">
                  <ReactSVG
                    src={`${originalUrl}/images/Check 3.svg`}
                    beforeInjection={(svg) => {
                      svg.setAttribute("fill", darkMode ? "white" : "#A3A3A3");
                    }}
                  />
                  <p className="text__12 text-Mtext-text-secondary dark:text-Mtext-text-secondary-dark">one number or symbol</p>
                </div>
              </div>
            </div>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label className="font-normal text__14 text-Mtext-text-secondary dark:text-white">
                Confirm New Password
              </Form.Label>
              <div className="relative">
                <Form.Control
                  type={tooglePasswordConfirm ? "password" : "text"}
                  placeholder="Enter your password"
                  className="placeholder:text-Mtext-text-disable font-medium text__14 bg-[rgba(255,255,255,0.002)] h-[54px] rounded-[20px] px-3 outline-none shadow-none focus:outline-none focus:shadow-none border-Mborder-border-primary focus:border-Mborder-border-primary focus:bg-white dark:focus:bg-[rgba(255,255,255,0.002)] dark:border-Mborder-border-primary-dark dark:text-white text-Mtext-text-primary"
                />
                <img
                  onClick={() =>
                    settooglePasswordConfirm(!tooglePasswordConfirm)
                  }
                  src="./../../images/eye-slash.svg"
                  className="cursor-pointer absolute top-1/2 -translate-y-1/2 right-4"
                  alt=""
                />
              </div>
            </Form.Group>
          </div>
        </div>

        <div className="flex items-center justify-end">
          <div className="grid grid-cols-2 w-max">
            <div
              onClick={() => setTooglePopup("")}
              className="rounded-full inline-block text-center font-semibold text__18 text-Mtext-text-secondary dark:text-Mtext-text-secondary-dark !py-[15px] !px-4 btnClass w-full cursor-pointer"
            >
              Discard
            </div>
            <div
              onClick={() => setTooglePopup("")}
              className="rounded-full inline-block text-center font-semibold text__18 text-white !py-[15px] !px-4 bg-Mbrand-brand-primary !border-MPrimary btnClass w-full cursor-pointer shadow-[0px_4px_20px_rgba(1,_122,_255,_0.3),_inset_0px_1px_0px_rgba(255,_255,_255,_0.4),_inset_0px_-4px_13px_rgba(0,_0,_0,_0.2)]"
            >
              Save Changes
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PasswordSecurity;
