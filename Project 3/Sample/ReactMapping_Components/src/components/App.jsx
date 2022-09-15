import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map((emoji_Col) => (
          <Entry
            key={emoji_Col.id}
            emoji={emoji_Col.emoji}
            name={emoji_Col.name}
            description={emoji_Col.description}
          />
        ))}
      </dl>
    </div>
  );
}

export default App;
