import React, { useState, useEffect, useRef } from "react";

const DebounceAndThrottle = () => {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [throttledQuery, setThrottledQuery] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedQuery(query);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [query]);

  const lastThrottleTime = useRef(0);
  useEffect(() => {
    const now = Date.now();
    if (now - lastThrottleTime.current > 2000) {
      setThrottledQuery(query);
      lastThrottleTime.current = now;
    }
  }, [query]);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <input
        type="text"
        placeholder="Debounced + Throttled Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          border: "1px solid #ccc",
          borderRadius: "4px",
          padding: "8px",
          width: "300px",
          marginBottom: "10px",
        }}
      />
      <div>
        <span>
          <strong>Throttled:</strong> {throttledQuery}
        </span>
        <br />
        <span>
          <strong> Debounced:</strong> {debouncedQuery}
        </span>
      </div>
    </div>
  );
};

export default DebounceAndThrottle;
