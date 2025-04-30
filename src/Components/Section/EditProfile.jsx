import React, { Fragment, useState } from "react";
import useHostname from "../Provider/HostnameProvider";
import { useDarkModeContext } from "@/pages/context/DarkModeContext";
import { ReactSVG } from "react-svg";
import { Form } from "react-bootstrap";

const EditProfile = () => {
  const originalUrl = useHostname();
  const { darkMode } = useDarkModeContext();

  const [profileImage, setProfileImage] = useState(
    originalUrl + "/images/img.png"
  );

  // Fungsi untuk menangani perubahan file
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        // Mengubah state profileImage menjadi data URL dari file yang dipilih
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <Fragment>
      <div className="grid grid-cols-1 gap-[32px]">
        <div className="w-[120px] h-[120px] relative rounded-full">
          <img
            src={profileImage}
            className="w-full h-full object-cover rounded-full border !border-Mborder-border-primary dark:!border-Mborder-border-primary-dark"
            alt=""
          />

          <label
            htmlFor="profile-image-input"
            className="w-[36px] h-[36px] rounded-full flex items-center justify-center bg-Mbackgrounds-bg-primary dark:bg-Mbackgrounds-bg-primary-dark border !border-Mborder-border-secondary dark:!border-Mborder-border-secondary-dark absolute right-0 bottom-0 cursor-pointer"
          >
            <ReactSVG
              src={`${originalUrl}/images/PencilSimpleLine.svg`}
              beforeInjection={(svg) => {
                svg.setAttribute("fill", darkMode ? "white" : "#1A1A1A");
              }}
            />
          </label>
          <input
            type="file"
            id="profile-image-input"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
        </div>
        <div className="grid grid-cols-1 gap-[24px] text-Mtext-text-primary dark:text-Mtext-text-primary-dark">
          <div className="grid grid-cols-1 gap-[16px]">
            <h5 className="font-semibold text__16">Personal Info</h5>
            <div className="grid grid-cols-1 ss:grid-cols-2 gap-4 ss:gap-3">
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label className="font-normal text__14 text-Mtext-text-secondary dark:text-white">
                  First Name{" "}
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your name"
                  className="placeholder:text-Mtext-text-disable font-medium text__14 bg-[rgba(255,255,255,0.002)] h-[54px] rounded-[20px] px-3 outline-none shadow-none focus:outline-none focus:shadow-none border-Mborder-border-primary focus:border-Mborder-border-primary focus:bg-white dark:focus:bg-[rgba(255,255,255,0.002)] dark:border-Mborder-border-primary-dark dark:text-white text-Mtext-text-primary"
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label className="font-normal text__14 text-Mtext-text-secondary dark:text-white">
                  Last Name
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your name"
                  className="placeholder:text-Mtext-text-disable font-medium text__14 bg-[rgba(255,255,255,0.002)] h-[54px] rounded-[20px] px-3 outline-none shadow-none focus:outline-none focus:shadow-none border-Mborder-border-primary focus:border-Mborder-border-primary focus:bg-white dark:focus:bg-[rgba(255,255,255,0.002)] dark:border-Mborder-border-primary-dark dark:text-white text-Mtext-text-primary"
                />
              </Form.Group>
            </div>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label className="font-normal text__14 text-Mtext-text-secondary dark:text-white">
                Email Address
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your Email Address"
                className="placeholder:text-Mtext-text-disable font-medium text__14 bg-[rgba(255,255,255,0.002)] h-[54px] rounded-[20px] px-3 outline-none shadow-none focus:outline-none focus:shadow-none border-Mborder-border-primary focus:border-Mborder-border-primary focus:bg-white dark:focus:bg-[rgba(255,255,255,0.002)] dark:border-Mborder-border-primary-dark dark:text-white text-Mtext-text-primary"
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label className="font-normal text__14 text-Mtext-text-secondary dark:text-white">
                Phone Number
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your Phone Number"
                className="placeholder:text-Mtext-text-disable font-medium text__14 bg-[rgba(255,255,255,0.002)] h-[54px] rounded-[20px] px-3 outline-none shadow-none focus:outline-none focus:shadow-none border-Mborder-border-primary focus:border-Mborder-border-primary focus:bg-white dark:focus:bg-[rgba(255,255,255,0.002)] dark:border-Mborder-border-primary-dark dark:text-white text-Mtext-text-primary"
              />
            </Form.Group>
          </div>
          <div className="grid grid-cols-1 gap-[16px]">
            <h5 className="font-semibold text__16">Personal Address</h5>
            <div className="grid grid-cols-1 ss:grid-cols-2 gap-4 ss:gap-3">
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label className="font-normal text__14 text-Mtext-text-secondary dark:text-white">
                  Country
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your Country"
                  className="placeholder:text-Mtext-text-disable font-medium text__14 bg-[rgba(255,255,255,0.002)] h-[54px] rounded-[20px] px-3 outline-none shadow-none focus:outline-none focus:shadow-none border-Mborder-border-primary focus:border-Mborder-border-primary focus:bg-white dark:focus:bg-[rgba(255,255,255,0.002)] dark:border-Mborder-border-primary-dark dark:text-white text-Mtext-text-primary"
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label className="font-normal text__14 text-Mtext-text-secondary dark:text-white">
                  City
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your City"
                  className="placeholder:text-Mtext-text-disable font-medium text__14 bg-[rgba(255,255,255,0.002)] h-[54px] rounded-[20px] px-3 outline-none shadow-none focus:outline-none focus:shadow-none border-Mborder-border-primary focus:border-Mborder-border-primary focus:bg-white dark:focus:bg-[rgba(255,255,255,0.002)] dark:border-Mborder-border-primary-dark dark:text-white text-Mtext-text-primary"
                />
              </Form.Group>
            </div>
            <div className="grid grid-cols-1 ss:grid-cols-2 gap-4 ss:gap-3">
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label className="font-normal text__14 text-Mtext-text-secondary dark:text-white">
                  Address
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your Address"
                  className="placeholder:text-Mtext-text-disable font-medium text__14 bg-[rgba(255,255,255,0.002)] h-[54px] rounded-[20px] px-3 outline-none shadow-none focus:outline-none focus:shadow-none border-Mborder-border-primary focus:border-Mborder-border-primary focus:bg-white dark:focus:bg-[rgba(255,255,255,0.002)] dark:border-Mborder-border-primary-dark dark:text-white text-Mtext-text-primary"
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label className="font-normal text__14 text-Mtext-text-secondary dark:text-white">
                  Zip Code
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your Zip Code"
                  className="placeholder:text-Mtext-text-disable font-medium text__14 bg-[rgba(255,255,255,0.002)] h-[54px] rounded-[20px] px-3 outline-none shadow-none focus:outline-none focus:shadow-none border-Mborder-border-primary focus:border-Mborder-border-primary focus:bg-white dark:focus:bg-[rgba(255,255,255,0.002)] dark:border-Mborder-border-primary-dark dark:text-white text-Mtext-text-primary"
                />
              </Form.Group>
            </div>
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

export default EditProfile;
