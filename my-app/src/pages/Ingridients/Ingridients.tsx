import React, { useEffect, useState } from "react";

interface IngridientsState {
  error: string;
}

export default function Ingridients() {
  const [ingridient, setIngridient] = useState("");

  useEffect(() => {
    fetch(`https://dummyjson.com/posts?ingridient=${ingridient}`)
      .then((res) => res.json())
      .then(console.log);
  }, [ingridient]);

  return (
    <div className="App">
      <div className="ingridients-container">
        <form className="form" action="/recipe">
          <p> Please Enter Ingridient!</p>
          <input
            type="text"
            placeholder="ingridient"
            required
            value={ingridient}
            onChange={(e) => setIngridient(e.target.value)}
          />
          <a href="/recipe">
            <button className="submit">Give Me Recipe!</button>
          </a>
        </form>
      </div>
    </div>
  );
}
