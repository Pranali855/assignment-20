import { useState } from "react";
import "./App.css";
import EmojiButton from "./EmojiButton/EmojiButton";
import ColorButton from "./ColorButton/ColorButton";

function Home() {
  const [emoji, setEmoji] = useState("😊");
  const [bgColor, setBgcolor] = useState("#eee5ea");

  return (
    <div className="page-container">
      <div
        className="emoji-card"
        style={{
          backgroundImage:
            "radial-gradient(circle 600px at 50% 50%, rgba(59,130,246,0.3), transparent)",
        }}
      >
        <h3 className="emoji-card-title">Playing with Emoji Editor</h3>
        <p className="emoji-card-description">This is the emoji editor using useState.</p>
        <div className="emoji-display" style={{ backgroundColor: bgColor }}>
          {emoji}
        </div>
        <div className="emoji-buttons">
          <EmojiButton emoji="😇" setEmoji={setEmoji} />
          <EmojiButton emoji="🥰" setEmoji={setEmoji} />
          <EmojiButton emoji="🤗" setEmoji={setEmoji} />
          <EmojiButton emoji="😴" setEmoji={setEmoji} />
          <EmojiButton emoji="😀" setEmoji={setEmoji} />
          <EmojiButton emoji="🥳" setEmoji={setEmoji} />
          <EmojiButton emoji="😎" setEmoji={setEmoji} />
          <EmojiButton emoji="☺️" setEmoji={setEmoji} />
        </div>
        <div className="color-buttons">
          <ColorButton bgColor="#5aace6ff" setBgcolor={setBgcolor} />
          <ColorButton bgColor="#7270e0ff" setBgcolor={setBgcolor} />
          <ColorButton bgColor="#a071ccff" setBgcolor={setBgcolor} />
          <ColorButton bgColor="#e65adaff" setBgcolor={setBgcolor} />
          <ColorButton bgColor="#60314bff" setBgcolor={setBgcolor} />
          <ColorButton bgColor="#e7e09eff" setBgcolor={setBgcolor} />
          <ColorButton bgColor="#d18267ff" setBgcolor={setBgcolor} />
          <ColorButton bgColor="#96efb7bc" setBgcolor={setBgcolor} />
        </div>
      </div>
    </div>
  );
}

export default Home;
