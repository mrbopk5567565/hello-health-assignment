import React, { useState, MouseEvent } from "react";
import { Button } from 'components'
import './styles.scss'

const Assignment1: React.FC = () => {
  const [count, setCount] = useState<number>(0)

  const handleCount = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setCount(count + 1)
  }

  const handleResetCount = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setCount(0)
  }

  return (
    <div className="containerAssg1">
      <div className="containerAssg1--result">Result: {count}</div>
      <div className="containerAssg1--button">
        <Button className="custom" onClick={(e) => handleCount(e)}>+1</Button>
        <Button className="custom" onClick={(e) => handleResetCount(e)}>Reset</Button>
      </div>
    </div>
  )
}

export default Assignment1;