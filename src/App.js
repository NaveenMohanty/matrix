import logo from "./logo.svg";

import "./App.css";
import React, { useState } from "react";
let arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
function App() {
  const [clicked, setClicked] = useState([]);
  const onClickhandle = (idx) => {
    let newArr = clicked;
    newArr.push(idx);
    if (newArr.length > 2) {
      newArr.shift();
    }
    setClicked([...newArr]);
  };

  return (
    <div style={{ margin: "auto" }}>
      {arr.map((m, i) => {
        return (
          <div
            style={{
              display: "flex",
            }}
          >
            {m.map((a, j) => (
              <button
                style={{
                  height: "50px",
                  width: "50px",
                  backgroundColor: clicked.includes(a) ? "red" : "purple",
                }}
                onClick={() => onClickhandle(a)}
              >
                {a}
              </button>
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default App;
