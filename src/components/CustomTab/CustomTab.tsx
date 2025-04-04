import { useState } from "react";
import { customData, customDataType } from "./CustomTabData";

const CustomTab = () => {
  const [content, setContent] = useState<customDataType>(customData[0]);
  const [activeTab, setActiveTab] = useState<number>(0);
  const showContent = (index: number) => {
    setContent(customData[index]);
    setActiveTab(index);
  };
  return (
    <div>
      <h1 style={{ fontSize: "40px", marginBottom: "15px" }}>Custom Tab</h1>
      <div
        style={{ marginBottom: "10px", display: "flex", flexDirection: "row" }}
      >
        {customData.map((item, i) => {
          return (
            <div key={i} style={{ margin: "1px" }}>
              <button
                style={{
                  cursor: "pointer",
                  backgroundColor: activeTab === i ? "lightblue" : "gray",
                  padding: "20px",
                }}
                onClick={() => showContent(i)}
              >
                {item.label}
              </button>
            </div>
          );
        })}
      </div>
      {content && <p style={{ marginTop: "20px" }}>{content.content}</p>}
    </div>
  );
};

export default CustomTab;
