//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import { setState } from "expect/build/jestMatchersObject";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [lionsScore, setLionsScore] = useState(20);
  const [tigersScore, setTigersScore] = useState(17);
  const [quarter, setQuarter] = useState(1);
  const [time, setTime] = useState(910);
  function touchDown(scoreSetter, teamScore){
    scoreSetter(teamScore+7);
  }
  function fieldGoal(scoreSetter, teamScore){
    scoreSetter(teamScore+3);
  }
  React.useEffect(() => {
    let id = setInterval(() => {
      setTime(time - 1);
    }, 1000);
    if(time<=2700) setQuarter(2);
    if(time<=1800) setQuarter(3);
    if(time<=900) setQuarter(4);
    
    return ()=> clearInterval(id);
  });

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{lionsScore}</div>
          </div>
          <div className="timer">{time>=600 ? Math.floor(time/60) : (`0`+Math.floor(time/60))}:{time%60>=10 ? time%60: (`0`+time%60)}</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{tigersScore}</div>
          </div>
        </div>
        <BottomRow quarter={quarter}/>
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick = {
            e=>touchDown(setLionsScore, lionsScore)
          }>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick = {
            e=>fieldGoal(setLionsScore, lionsScore)
          }>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick = {
            e=>touchDown(setTigersScore, tigersScore)
          }>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick = {
            e=>fieldGoal(setTigersScore, tigersScore)
          }>Away Field Goal</button>
        </div>
        <button className = 'quarterButton' onClick = {e => setQuarter(quarter+1)}>
          Next quarter
        </button>
      </section>
    </div>
  );
}

export default App;
