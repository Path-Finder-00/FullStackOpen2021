import React, { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)
const StatisticLine = ({ text, feedback }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{feedback}</td>
    </tr>
  )
}
  const Statistics = ({ good, neutral, bad }) => {
    if (good === 0 && neutral === 0 && bad === 0) {
      return (
        <div>
          No feedback given
        </div>
      )
    }
    return (
      <table>
        <tbody>
        <StatisticLine text='good' feedback={good} />
        <StatisticLine text='neutral' feedback={neutral} />
        <StatisticLine text='bad' feedback={bad} />
        <StatisticLine text='all' feedback={good + neutral + bad} /> 
        <StatisticLine text='average' feedback={(good - bad) / (good + neutral + bad)} />
        <StatisticLine text='positive' feedback={good / (good + neutral + bad) * 100 + ' %'} />  
        </tbody>
      </table>
    )
  }

const App = () => {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
    <h1>give feedback</h1>
    <Button handleClick={handleGood} text='good' />
    <Button handleClick={handleNeutral} text='neutral' />
    <Button handleClick={handleBad} text='bad' />
    <h1>statistics</h1>
    <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}
export default App;