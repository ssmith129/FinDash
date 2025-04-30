import React, { Fragment } from "react";

const BackdropFixed = ({ status = false, onAction }) => {
  return (
    <Fragment>
      <div
      onClick={onAction}
        className={
          "fixed w-full h-full left-0 top-0 transition-all duration-300 z-[90] bg-Mneutral-900 " +
          (status ? "opacity-[0.12]" : "opacity-0 pointer-events-none")
        }
      ></div>
    </Fragment>
  );
};

export default BackdropFixed;
