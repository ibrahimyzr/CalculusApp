import React from "react";
import { InlineWidget } from "react-calendly";
import manzara from "../assets/manzara.jpg";

const Rezervation = () => {
  return (
    <div
      style={{
        background: `url(${manzara})`,
      }}
    >
      <div className="text-center mt-1">
        <InlineWidget url="https://calendly.com/matematik-space/2hr?background_color=E1DEDF" />
      </div>
    </div>
  );
};

export default Rezervation;
