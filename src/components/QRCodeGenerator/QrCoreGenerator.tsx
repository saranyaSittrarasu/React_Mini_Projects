import { useState } from "react";
import QRCode from "react-qr-code";

const QrCoreGenerator = () => {
  const [inputVlaue, setInputValue] = useState("");
  const [qrCode, setQrCode] = useState("");
  const [showQrCode, setShowQrCode] = useState(false);
  const generateQrCode = () => {
    if (inputVlaue.trim()) {
      setShowQrCode(true);
      setQrCode(inputVlaue);
      setInputValue("");
    } else {
      alert("Please enter some text to generate QR code");
    }
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <h1 style={{ textAlign: "center", fontSize: "30px" }}>
        QR Code Generator
      </h1>
      <br />
      <div>
        <input
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            marginRight: "10px",
            width: "300px",
          }}
          type="text"
          value={inputVlaue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter text to generate QR code"
        />
        <button
          style={{
            background: "lightblue",
            padding: "10px",
            borderRadius: "5px",
            width: "200px",
          }}
          onClick={() => generateQrCode()}
        >
          Generate QR Code
        </button>
      </div>
      <br />
      {showQrCode && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <QRCode value={qrCode} size={400} bgColor="#fff" />
        </div>
      )}
    </div>
  );
};

export default QrCoreGenerator;
