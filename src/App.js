import "./styles.css";
import { useState } from "react";
var gameDB = {
  Selling: [
    { name: "Minecraft", ratings: "9/10" },
    { name: "GTA V", ratings: "8/10" },
    { name: "Tetris", ratings: "9/10" },
    { name: "Wii Sports", ratings: "8.8/10" },
    { name: "Pubg", ratings: "7/10" }
  ],
  Free: [
    { name: "CSGO", ratings: "8.5/10" },
    { name: "Dota 2", ratings: "9/10" },
    { name: "Apex Legends", ratings: "9/10" },
    { name: "Warframe", ratings: "7.5/10" },
    { name: "Fortnite", ratings: "8/10" }
  ],
  RPG: [
    { name: "The Witcher", ratings: "9.5/10" },
    { name: "GTA V:Role Play", ratings: "9/10" },
    { name: "Dark Souls", ratings: "8/10" },
    { name: "Cyberpunk 2077", ratings: "7.5/10" },
    { name: "Path of Exile", ratings: "8/10" }
  ]
};
var arrDB = Object.keys(gameDB);
export default function App() {
  var [inputCategory, setInputCategory] = useState("Free");
  function userClick(event) {
    setInputCategory(event);
  }
  return (
    <div className="App">
      <h1 style={{ color: "var(--primary-color)" }}>🎮 Game Ratings</h1>
      <h2
        style={{
          fontSize: "1.7rem",
          fontWeight: "bold",
          color: "var(--primary-color)"
        }}
      >
        Checkout some of the best rated games. Select a category to get started
      </h2>
      <div>
        {arrDB.map((category) => (
          <button
            onClick={function () {
              return userClick(category);
            }}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="displayDiv">
        <ul>
          {gameDB[inputCategory].map((item) => (
            <li className="list">
              <div className="gameName">{item.name}</div>
              <div className="gameRatings">{item.ratings}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
