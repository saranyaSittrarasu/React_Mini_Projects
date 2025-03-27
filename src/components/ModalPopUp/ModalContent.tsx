import React from "react";

interface ModalContentProps {
  onClose: () => void;
}

const ModalContent: React.FC<ModalContentProps> = ({ onClose }) => {
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1000,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            width: "500px",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            textAlign: "center",
          }}
        >
          Modal Content
          <br />
          <button
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              border: "1px solid black",
              borderRadius: "4px",
              backgroundColor: "#f0f0f0",
              cursor: "pointer",
            }}
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default ModalContent;
