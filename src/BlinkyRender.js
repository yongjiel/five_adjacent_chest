import React, { useState, useLayoutEffect, useEffect } from "react";

const BlinkyRender = () => {
  const [value, setValue] = useState(0);

  useLayoutEffect(() => {
    if (value === 0) {
      setValue(10 + Math.random() * 200);
    }
  }, [value]);

  console.log("render", value);

  return <div onClick={() => setValue(0)}>value: {value}</div>;
};

// Must export!
export default BlinkyRender;
