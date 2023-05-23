type RankProps = {
  name: string
  uri: string
}

export function RankDisplay(props: RankProps){
  
  // Correct answer is displayed to end user (img[aria-content])
  // Too fucking bad
  return <>
  <img aria-content={props.name} src={props.uri}></img>
  
  </>
}