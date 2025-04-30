import React, { Fragment } from "react";
import Head from "next/head";
import { Container } from "react-bootstrap";
import LogoSvg from "../svg/Svg";
import { useDarkModeContext } from "@/pages/context/DarkModeContext";
import useHostname from "../Provider/HostnameProvider";

const LayoutAuth = ({
  children,
  title = "FinDash",
  description = "FinDash Desc",
  imgAuth = "/images/Card Container.png",
}) => {
  const originalUrl = useHostname();
  const { darkMode, setDarkMode } = useDarkModeContext();
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="w-full overflow-hidden bg-white dark:bg-Mbackgrounds-bg-primary-dark">
        <div className="w-full overflow-hidden min-h-screen relative grid grid-cols-1 md:grid-cols-2 grid-rows-1">
          <div className="relative h-full bg-Mbrand-brand-primary p-6 hidden md:!block">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute left-0 top-0 w-full h-full object-cover pointer-events-none"
            >
              <source
                src={originalUrl + "/videos/Onboarding (1).mp4"}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="relative h-full">
            <Container className="h-full w-full flex items-center justify-center relative">
              <div className="w-full pt-[80px] md:pt-[8rem] pb-[3rem] md:px-6 xl:px-[8rem]">
                <div className="md:!p-0 xs:p-4 md:!rounded-none rounded-[16px] md:!bg-transparent bg-white dark:!bg-MGrayscale_900">
                  {children}
                </div>
              </div>
            </Container>
          </div>
        </div>
      </div>

      <script
        src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js"
        crossorigin
      ></script>

      <script
        src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
        crossorigin
      ></script>

      <script
        src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossorigin
      ></script>
    </Fragment>
  );
};

export default LayoutAuth;
