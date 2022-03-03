import React, { useState } from 'react'
import Statistics from './Statistics'
import Button from './Button'


const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = () => {
    setGood(good + 1);
  }

  const handleClickNeutral = () => {
    setNeutral(neutral + 1);
  }

  const handleClickBad = () => {
    setBad(bad + 1);
  }

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button handleClick={handleClickGood} label='good' />
        <Button handleClick={handleClickNeutral} label='neutral' />
        <Button handleClick={handleClickBad} label='bad' />
      </div>
      <h1>statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App