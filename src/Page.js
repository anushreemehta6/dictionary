import { useState } from "react";
import axios from "axios";
import "./Page.css";

function Page() {
  let [word, setword] = useState("");
  let [data, setdata] = useState(null);

  async function getWord() {
    try {
      const response = await axios.get(
        // `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      setdata(response.data[0]);
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
          value={word}
          defaultValue=""
        />
        <button onClick={getWord}>Search</button>
      </div>
      {data && (
        <div className="word-info">
          <h2>Word: <font className="ans">{data.word} </font></h2>
          <p>Phonetic: {data.phonetic}</p>
          {data.meanings.map((meaning, index) => (
            <div key={index}>
              <p>Part of Speech:  <font className="ans">{meaning.partOfSpeech}</font></p>
              {meaning.definitions.map((definition, defIndex) => (
                <p key={defIndex}>Definition: <font className="ans"> {definition.definition} </font></p>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Page;
