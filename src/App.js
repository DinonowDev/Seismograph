import "./assets/css/index.css";
import "./App.css";
import { ListLarze } from "./components/index";
import { useState } from "react";
import Lang from "./context/lang.context";

const App = () => {
  const [lang, setLang] = useState("fa");

  const changeLang = (e) => {
    lang === "fa" ? setLang("en") : setLang("fa");
  };

  return (
    <div className="App">
      <Lang.Provider value={lang}>
        <h1 className="title">{lang === "fa" ? "لرزه نگار" : "Seismograph"}</h1>
        <ListLarze />
        <div className="switch">
          <div className="switch__1">
            <input id="switch-1" type="checkbox" onChange={changeLang} />
            <label htmlFor="switch-1"></label>
          </div>
        </div>
      </Lang.Provider>
    </div>
  );
};

export default App;
