import React, { useState } from "react";

const RandomColorGenerator: React.FC = () => {
  const [color, setColor] = useState<string>("#000000");
  const [rgbCode, setRgbCode] = useState<string>("RGB(0,0,0)");
  const generateColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215)
      .toString(16)
      .toUpperCase();
    setColor(`#${randomColor}`);
    if (randomColor.length === 6) {
      const redCode = parseInt(randomColor.slice(0, 2), 16);
      const greenCode = parseInt(randomColor.slice(2, 4), 16);
      const blueCode = parseInt(randomColor.slice(4, 6), 16);
      const rgbCode = `RGB(${redCode},${greenCode},${blueCode})`;
      setRgbCode(rgbCode);
    }
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="mb-4">
          <button
            onClick={generateColor}
            className="p-2 bg-blue-500 text-white rounded"
          >
            Generate Random Color
          </button>
        </div>
        <div
          style={{ backgroundColor: color }}
          className="w-[50vw] h-[50vh] flex flex-col items-center justify-center text-2xl text-white"
        >
          <h1>HEX Code: {color}</h1>
          <hr />
          <h1>RGB Code: {rgbCode}</h1>
        </div>
      </div>
    </>
  );
};

export default RandomColorGenerator;
