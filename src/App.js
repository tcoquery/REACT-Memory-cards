import React, {useState} from "react";
import Score from "./components/score";
import HighScore from "./components/highScore";
import Card from "./components/card";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

 

  return (
    

    <div>
      <Score score={score}/>
      <HighScore highScore={highScore}/>
      <Card/>
    </div>
  );
}

export default App;
