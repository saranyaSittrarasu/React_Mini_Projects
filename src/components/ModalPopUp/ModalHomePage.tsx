import { useState } from "react";
import ModalContent from "./ModalContent";

const ModalHomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const onClose = () => {
    setShowModal(false);
  };
  return (
    <div>
      <button
        onClick={() => setShowModal(true)}
        style={{
          backgroundColor: "#4CAF50",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
          transition: "background-color 0.3s ease",
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#45a049")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#4CAF50")}
      >
        Open Modal Pop-Up
      </button>

      {showModal && <ModalContent onClose={onClose} />}
    </div>
  );
};

export default ModalHomePage;
