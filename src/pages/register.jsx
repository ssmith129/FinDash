import React, { Fragment, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import Link from "next/link";
import LayoutAuth from "@/Components/Layout/LayoutAuth";
import useHostname from "@/Components/Provider/HostnameProvider";

const Register = () => {
  const originalUrl = useHostname();
  const [tooglePassword, settooglePassword] = useState(true);
  const [tooglePasswordConfirm, settooglePasswordConfirm] = useState(true);
  const [toogleChecklist, settoogleChecklist] = useState(false);
  return (
    <Fragment>
      <LayoutAuth title="FinDash - Register" navbar={false} footer={false}>
        <div className="mb-10">
          <h4 className="font-semibold text__32 dark:text-white">Register</h4>
        </div>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="font-normal text__14 text-Mtext-text-secondary dark:text-white">
            Name
          </Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your Name"
            className="placeholder:text-Mtext-text-disable font-medium text__14 bg-[rgba(255,255,255,0.002)] h-[54px] rounded-[20px] px-3 outline-none shadow-none focus:outline-none focus:shadow-none border-Mborder-border-primary focus:border-Mborder-border-primary focus:bg-white dark:focus:bg-[rgba(255,255,255,0.002)] dark:border-Mborder-border-primary-dark dark:text-white text-Mtext-text-primary"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="font-normal text__14 text-Mtext-text-secondary dark:text-white">
            Email Address
          </Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email address"
            className="placeholder:text-Mtext-text-disable font-medium text__14 bg-[rgba(255,255,255,0.002)] h-[54px] rounded-[20px] px-3 outline-none shadow-none focus:outline-none focus:shadow-none border-Mborder-border-primary focus:border-Mborder-border-primary focus:bg-white dark:focus:bg-[rgba(255,255,255,0.002)] dark:border-Mborder-border-primary-dark dark:text-white text-Mtext-text-primary"
          />
        </Form.Group>
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
            href="/verification"
            className="rounded-full inline-block text-center font-medium text__16 text-white !py-[15px] bg-Mbrand-brand-primary !border-MPrimary btnClass w-full cursor-pointer shadow-[0px_4px_20px_rgba(1,_122,_255,_0.3),_inset_0px_1px_0px_rgba(255,_255,_255,_0.4),_inset_0px_-4px_13px_rgba(0,_0,_0,_0.2)]"
          >
            Register
          </Link>

          <div className="my-3 relative">
            <div className="absolute h-[1px] left-0 w-full top-1/2 -translate-y-1/2 bg-Mborder-border-primary dark:bg-Mborder-border-primary-dark"></div>
            <div className="px-4 py-2 bg-white dark:!bg-Mbackgrounds-bg-primary-dark dark:text-MGrayscale_400 inline-block text__14 text-Mtext-text-tertiary relative z-[2]">
              Or Log In with
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <a
              href="#!"
              className="relative inline-block px-3 py-[14px] w-full text-center rounded-full border border-solid border-Mborder-border-primary dark:!border-Mborder-border-primary-dark"
            >
              <div className="flex items-center justify-center gap-3">
                <img
                  src={originalUrl + "/images/Google.svg"}
                  className=""
                  alt=""
                />
                <div className="relative z-2 font-semibold text__18 dark:text-white">
                  Google
                </div>
              </div>
            </a>
            <a
              href="#!"
              className="relative inline-block px-3 py-[14px] w-full text-center rounded-full border border-solid border-Mborder-border-primary dark:!border-Mborder-border-primary-dark"
            >
              <div className="flex items-center justify-center gap-3">
                <img
                  src={originalUrl + "/images/Apple.svg"}
                  className=""
                  alt=""
                />
                <div className="relative z-2 font-semibold text__18 dark:text-white">
                  Apple
                </div>
              </div>
            </a>
          </div>

          <div className="text-center mt-4">
            <p className="text__14 font-medium text-Mtext-text-tertiary">
              Already have an account?{" "}
              <Link
                class="text-Mbrand-brand-primary text__16 font-semibold"
                href="/"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </LayoutAuth>
    </Fragment>
  );
};

export default Register;
