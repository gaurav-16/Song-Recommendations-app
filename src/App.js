import React, { useState } from "react";
import "./styles.css";
var color = "#4bccef";
const database = {
  "Hollywood Playlist": [
    { name: "Despacito", musician: "Luis Fonsi" },
    { name: "Thunder", musician: "The Imagine Dragon" },
    { name: "Good Life", musician: "Kehlani,G-Eazy" },
    { name: "Danza Kudoro", musician: "Don Omar,Lucenzo" },
    { name: "Don't let me down", musician: "The Chainsmokers" }
  ],

  "Bollywood Playlist": [
    {
      name: "Give me Some Sunshine",
      musician: "Sharman Joshi and Suraj Jagan"
    },
    {
      name: "Woh Din",
      musician: "Arijit Singh"
    },
    {
      name: "Mitwa ",
      musician: "Shankar-Ehsaan-Loy"
    },
    {
      name: "Mitti Di Kushboo ",
      musician: "Ayushmaan Khurrana"
    },
    {
      name: "Phir se ud chala",
      musician: "Mohit Chauhan"
    }
  ],
  "Marathi Playlist": [
    {
      name: "Dhaga dhaga",
      musician: "Harshawardan Wavre"
    },
    {
      name: "Morya morya",
      musician: "Ajay Atul"
    },
    {
      name: "Sar Sukhachi Sharavani",
      musician: "Abhijeet Sawant"
    }
  ]
};

export default function App() {
  const [currentPlaylist, setPlaylist] = useState(Object.keys(database)[0]);
  function playlistClickHandler(playlist) {
    setPlaylist(playlist);
  }
  function getClass(playlist) {
    if (playlist === currentPlaylist) {
      return "active";
    } else {
      return "";
    }
  }
  return (
    <div
      style={{ backgroundColor: color, padding: "1.5rem 1rem", margin: "2rem" }}
    >
      <h1>My Playlist</h1>
      <p style={{ fontSize: "larger" }}>Here is my recommended playlist.</p>
      <div>
        {Object.keys(database).map((playlist) => (
          <button
            key={playlist}
            onClick={() => playlistClickHandler(playlist)}
            style={{
              cursor: "pointer",
              padding: "0.5rem  1rem",
              margin: "1rem 0.5rem",
              borderColor: "black"
            }}
            className={getClass(playlist)}
          >
            {playlist}
          </button>
        ))}
      </div>
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {database[currentPlaylist].map((music) => (
            <li
              key={music.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid black",
                width: "75%",
                margin: "1rem 0rem",
                borderRadius: "1rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {music.name} </div>
              <div style={{ fontSize: "medium", color: "darkviolet" }}>
                {" "}
                {music.musician}{" "}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
