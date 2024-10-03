import { useState } from 'react';
import "./App.css";

const StatisticsLine =({text, value})=> {
  return (
    <tr>
    <td>{text}</td>
     <td>{value}</td>
     </tr>
  )
}

const Statistics =({good, neutral, bad, total, calculateAverage, calculePositive}) => {
  return (
    <div>
    <table>
      <tbody>
      <StatisticsLine text="Good" value={good}/>
      <StatisticsLine text="Neutral" value={neutral}/>
      <StatisticsLine text="Bad" value={bad}/>
      <StatisticsLine text="All" value={total}/>
      <StatisticsLine text="Average" value={calculateAverage()}/>
      <StatisticsLine text="Positive" value={calculePositive()} />
      </tbody>
    </table>
    </div>
  )
}


const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const handleGoodClick =()=> {
    setGood(good +1)
    setTotal(total +1)
  };

  const handleNeutralClick =()=> {
    setNeutral(neutral +1)
    setTotal(total + 1)
    
  };

  const handleBadClick =()=> {
    setBad(bad +1)
    setTotal(total + 1)
  };

  const calculateAverage =()=>  {
    const score = good * 1 + neutral * 0 + bad * -1;
    return total === 0 ? 0 : (score/ total).toFixed(17);
  };

  const calculePositive=()=> {
    return total === 0 ? 0: ((good / total)*100).toFixed(15)
  };

  return (
    <div>
      <h1>Give FeedBack</h1>
      <Button 
      onClick={handleGoodClick}
      text="Good"
      />
      <Button 
      onClick={handleNeutralClick}
      text="Neutral"
      />
      <Button 
      onClick={handleBadClick}
      text="Bad"
      />
       <h1>Statistics</h1>
       {total > 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          calculateAverage={calculateAverage}
          calculePositive={calculePositive}
        />
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  )
}

export default App
