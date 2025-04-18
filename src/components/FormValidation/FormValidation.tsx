import { useState, useRef, useEffect } from "react";
import Tooltip from "../Tooltip";
type inputData = {
  userName: string;
  password: string;
  email: string;
};
const FormValidation = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [inputValue, setInputValue] = useState<inputData>({
    userName: "",
    password: "",
    email: "",
  });
  const [error, setError] = useState({ userName: "", password: "", email: "" });
  const userNameRef = useRef<HTMLInputElement | null>(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
  //   useEffect(() => {
  //     userNameRef.current?.focus();
  //   }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let isValid = true;
    let errors = { userName: "", password: "", email: "" };

    if (inputValue.userName.trim().length <= 2) {
      errors.userName = "User name should be greater than 2 characters";
      isValid = false;
    }

    if (inputValue.password.trim().length <= 5) {
      errors.password = "Password should be greater than 5 characters";
      isValid = false;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(inputValue.email.trim())) {
      errors.email = "Email is not valid";
      isValid = false;
    }

    setError(errors);

    if (isValid) {
      setInputValue({ userName: "", password: "", email: "" });
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    }
  };
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1 style={{ fontSize: "30px", marginBottom: "20px" }}>
        Simple Form Validation
      </h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "10px",
            width: "300px",
          }}
        >
          <label
            htmlFor="userName"
            style={{ fontWeight: "bold", marginBottom: "5px" }}
          >
            Name
          </label>
          <input
            autoFocus
            //ref={userNameRef}
            id="userName"
            type="text"
            name="userName"
            placeholder="Enter your name"
            value={inputValue.userName}
            onChange={(e) => handleChange(e)}
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
          <span style={{ color: "red" }}>{error.userName}</span>

          <label
            htmlFor="password"
            style={{ fontWeight: "bold", marginBottom: "5px" }}
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Enter password"
            onChange={(e) => handleChange(e)}
            value={inputValue.password}
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
          <span style={{ color: "red" }}>{error.password}</span>

          <label
            htmlFor="email"
            style={{ fontWeight: "bold", marginBottom: "5px" }}
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email id"
            onChange={(e) => handleChange(e)}
            value={inputValue.email}
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
          <span style={{ color: "red" }}>{error.email}</span>

          <div
            style={{ position: "relative", display: "inline-block" }}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <button
              type="submit"
              style={{
                padding: "10px 20px",
                backgroundColor: "#007BFF",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Submit
            </button>
            {showTooltip && (
              <Tooltip tooltipContent="Click to submit the form" />
            )}
            {showSuccessMessage && <h1>Form submitted successfully</h1>}
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormValidation;
