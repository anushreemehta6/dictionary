import { useState } from "react";
import axios from "axios";
import "./Page.css";

function Page() {
  let [words, setword] = useState("");
  let [x, setx] = useState(null);

  async function getWord() {
    try {
      const respons = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${words}`
      );
      setx(respons.data);
    } catch (error) {
      alert("word not found try again later!!");
    }
  }

  return (
    <div className="main">
      <p className="heading"> Dictionary </p>
      <div className="main-2">
        <input
          className="input"
          type="text"
          placeholder="Enter word "
          onChange={(e) => setword(e.target.value)}
          value={words}
          defaultValue=""
        />
        <button onClick={getWord}>Search</button>
      </div>
      {x && (
        <div className="word-info">
          <h2> word - {x.word}</h2>
          <br/>
          <p> phonetic - {x.phonetic}</p>
          <br />
          {/* <p> part of speech - {x.meanings[0]}</p>    */}
          <br />
          {/* <p> meaning - {x.meanings.definitions.definition}</p> */}
        </div>
      )}
    </div>
  );
}

export default Page;
