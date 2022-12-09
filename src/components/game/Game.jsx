import styles from './Game.module.css'
import GameOption from '../gameOption/GameOption'
import { useState } from 'react'


function Game () {
  const [gameState, setGameState] = useState(Array(8).fill(0))

  return (
    <div className={styles.game}>
      {
        gameState.map((value, pos) =>
          <GameOption
            key={'game-option-pos-${pos}'}
            status={value}
          />
        )
      }
      <GameOption /> <GameOption /> <GameOption />
      <GameOption /> <GameOption /> <GameOption />
      <GameOption /> <GameOption /> <GameOption />
    </div>
  )
}

export default Game

