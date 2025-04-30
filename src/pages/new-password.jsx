import React, { Fragment, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import Link from "next/link";
import LayoutAuth from "@/Components/Layout/LayoutAuth";
import { useDarkModeContext } from "./context/DarkModeContext";

const NewPassword = () => {
  const { darkMode, setDarkMode } = useDarkModeContext();

  const [tooglePassword, settooglePassword] = useState(true);
  const [tooglePasswordConfirm, settooglePasswordConfirm] = useState(true);
  return (
    <Fragment>
      <LayoutAuth
        title="FinDash - Register"
        navbar={false}
        footer={false}
        imgAuth="/images/Group 162708.png"
      >
        <div className="mb-10 text-center">
          <h4 className="font-semibold text__32 dark:text-white mb-2">
            Create New Password
          </h4>
          <p className="text__18 text-Mtext-text-tertiary dark:text-Mtext-text-tertiary-dark">
            Enter your new password
          </p>
        </div>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="font-normal text__14 text-Mtext-text-secondary dark:text-white">
            Password
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
        <Form.Group className="mb-6" controlId="exampleForm.ControlInput1">
          <Form.Label className="font-normal text__14 text-Mtext-text-secondary dark:text-white">
            Confirm Password
          </Form.Label>
          <div className="relative">
            <Form.Control
              type={tooglePasswordConfirm ? "password" : "text"}
              placeholder="Enter your password"
              className="placeholder:text-Mtext-text-disable font-medium text__14 bg-[rgba(255,255,255,0.002)] h-[54px] rounded-[20px] px-3 outline-none shadow-none focus:outline-none focus:shadow-none border-Mborder-border-primary focus:border-Mborder-border-primary focus:bg-white dark:focus:bg-[rgba(255,255,255,0.002)] dark:border-Mborder-border-primary-dark dark:text-white text-Mtext-text-primary"
            />
            <img
              onClick={() => settooglePasswordConfirm(!tooglePasswordConfirm)}
              src="./../../images/eye-slash.svg"
              className="cursor-pointer absolute top-1/2 -translate-y-1/2 right-4"
              alt=""
            />
          </div>
        </Form.Group>

        <div className="text-center">
          <Link
            href="/dashboard"
            className="rounded-full inline-block text-center font-medium text__16 text-white !py-[15px] bg-Mbrand-brand-primary !border-MPrimary btnClass w-full cursor-pointer shadow-[0px_4px_20px_rgba(1,_122,_255,_0.3),_inset_0px_1px_0px_rgba(255,_255,_255,_0.4),_inset_0px_-4px_13px_rgba(0,_0,_0,_0.2)]"

          >
            Submit
          </Link>
        </div>
      </LayoutAuth>
    </Fragment>
  );
};

export default NewPassword;
