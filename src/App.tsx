import './App.css'
import { RankDisplay } from './RankDisplay'
import { RandomInt } from './helper'
import { RANKS, RANKS_TYPE } from './data/ranks'
import { useState } from 'react'

const allRanks =   // OFS = Officer student, OFD = senior officer student, 2.5 is for NCO students, there is also
                          // A rank I would call "NCO-student Corporal" because they get the chevron of corporal with the stripe of an NCO student
  ["OF9","OF8","OF7","OF6","OF5","OF4","OF3","OF2","OF1-3","OF1-2","OF1-1","OFD","OFS","OR9","OR8","OR7","OR6","OR5","OR4","OR3","OR2.5","OR2"]
                                                 
function rollNewRank(){
  // I wrote this yesternight, and I have no fucking clue about what it does
  let index = RandomInt(allRanks.length)
  index = index === 0 ? 0 : index-1
  return RANKS.get(allRanks[index]) as RANKS_TYPE
}

function App() {
  const [answerValue, setAnswerValue] = useState("")
  const [cardState, setCardState] = useState(rollNewRank())
  const [wasCorrect, setWasCorrect] = useState("") 
  let cardName = cardState.name
  let cardURI = cardState.uri
  return (
    <>
    <div id="displayContainer">
      <RankDisplay name={cardName} uri={cardURI}></RankDisplay>
      <p>{wasCorrect}</p>
    </div>
    <br/>
    <form>
    <input type="text" value={answerValue} onChange={
      (e) => {
        setAnswerValue(e.target.value)
        setWasCorrect("")
      }
    }
    onKeyDown={
      (e) => {
        if(e.key === "Enter"){
          e.preventDefault()
          if(answerValue.toLowerCase() === cardName.toLowerCase()){
            setCardState(rollNewRank())
            setAnswerValue("")
            setWasCorrect("Correct")
          }
        }
      }
    }></input>
    <button type="button" onClick={
      () => {
        setCardState(rollNewRank())
        setWasCorrect("")
      }
    }>New rank</button>
  </form>

    </>
  )
}

export default App
