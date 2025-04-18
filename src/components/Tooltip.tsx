import React from "react";

const Tooltip = ({ tooltipContent }: { tooltipContent: string }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: "-30px",
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: "black",
        color: "white",
        padding: "5px 10px",
        borderRadius: "5px",
        fontSize: "12px",
        whiteSpace: "nowrap",
      }}
    >
      {tooltipContent}
    </div>
  );
};

export default Tooltip;
