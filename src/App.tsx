import './App.css'
import { RankDisplay } from './RankDisplay'
import { RandomInt } from './helper'
import { RANKS, RANKS_OR_TYPE } from './data/ranks'
import { useState } from 'react'

export const allRanks =   // OFS = Officer student, OFD = senior officer student, 2.5 is for NCO students, there is also
                          // A rank I would call "NCO-student Corporal" because they get the chevron of corporal with the stripe of an NCO student
  ["OF10","OF9","OF8","OF7","OF6","OF5","OF4","OF3","OF2","OF1-3","OF1-2","OF1-1","OFD","OFS","OR9","OR8","OR7","OR6","OR5","OR4","OR3","OR2.5","OR2"]
                                                 
function rollNewRank(){
  return (RANKS as any)[allRanks[RandomInt(allRanks.length)]] as RANKS_OR_TYPE
}

function App() {
  const [answerValue, setAnswerValue] = useState("")
  const [cardState, setCardState] = useState(rollNewRank())
  const [wasCorrect, setWasCorrect] = useState("") 
  //console.log(currentCard)
  let cardName = cardState.name
  let cardURI = cardState.uri
  return (
    <>
    <div id="displayContainer">
      <RankDisplay name={cardName} uri={cardURI}></RankDisplay>
      <p>{wasCorrect}</p>
    </div>
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
  </form>

  <p>I do not own any of these images.<br/>All images are indexed from a Wikipedia <a href="https://en.wikipedia.org/wiki/Finnish_military_ranks">article</a> on Finnish service ranks.</p>
    </>
  )
}

export default App
