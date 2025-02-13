import React from "react";
import { InlineWidget } from "react-calendly";

const Rezervation = () => {
  return (
    <div>
      <div className="App text-center mb-5">
        <InlineWidget url="https://calendly.com/matematik-space/2hr?background_color=E1DEDF" />
      </div>
    </div>
  );
};

export default Rezervation;
