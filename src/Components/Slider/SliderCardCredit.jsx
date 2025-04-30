import React, { Fragment } from "react";
import Slider from "react-slick";
import CreditCard from "../Card/CreditCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderCardCredit = () => {
  const settings = {
    dots: true,
    infinite: false,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Fragment>
      <div className="relative">
        <div
          className={
            "w-[50%] h-[113px] opacity-40 blur-[40px] absolute left-1/2 -translate-x-1/2 bottom-[2rem] bg-Mbrand-brand-primary"
          }
        ></div>

        <Slider className="wrapper__creditcard-slider relative z-[1] -mx-3 " {...settings}>
          <div className="items px-3">
            <CreditCard />
          </div>
          <div className="items px-3">
            <CreditCard bgColor="bg-Madditional-additional-orange" />
          </div>
        </Slider>
      </div>
    </Fragment>
  );
};

export default SliderCardCredit;
