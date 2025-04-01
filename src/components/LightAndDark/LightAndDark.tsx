import { useLayoutEffect, useState } from "react";

const LightAndDark = () => {
  const [theme, setTheme] = useState(localStorage.getItem("color") || "white");
  useLayoutEffect(() => {
    document.body.style.backgroundColor = theme;
    document.body.style.color = theme === "white" ? "black" : "white";
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "white" ? "black" : "white";
    setTheme(newTheme);
    localStorage.setItem("color", newTheme);
  };
  return (
    <div>
      <h1 style={{ fontSize: "30px", marginBottom: "20px" }}>Light And Dark</h1>
      <button
        style={{
          padding: "20px",
          width: "200px",
          backgroundColor: "lightblue",
        }}
        onClick={() => toggleTheme()}
      >
        Change Color
      </button>
    </div>
  );
};

export default LightAndDark;
