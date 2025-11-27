import React, { useState } from "react";

function CitySearch({ setCity }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    setCity(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
        <input
            placeholder = "Enter city name"
            value={input}
            onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Search</button>
    </form>
  );
}

export default CitySearch;