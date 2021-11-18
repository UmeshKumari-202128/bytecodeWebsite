import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="title">EVENTS GALLERY</div>
      <div className="subtitle">
        SOME OF THE MOMENTS WE <br />
        CAPTURE....
      </div>
      <div className="gallery">
        <div className="portion1">
          <img id="event1" src={require("./images/cod.jpg").default} />
          <img id="event2" src={require("./images/learn.jpg").default} />
          <img id="event3" src={require("./images/code.jpg").default} />
          <img id="event4" src={require("./images/com.jpg").default} />
        </div>
        <div className="portion2">
          <img id="event5" src={require("./images/learn.jpg").default} />
          <img id="event6" src={require("./images/code.jpg").default} />
          <img id="event7" src={require("./images/cod.jpg").default} />
          <img id="event8" src={require("./images/com.jpg").default} />
        </div>
      </div>
    </div>
  );
}

export default App;
