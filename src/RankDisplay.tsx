type RankProps = {
  uri: string
}

export function RankDisplay(props: RankProps){
  console.log(props)
  let plate;
  if(props.uri.includes("2.5"))
    plate = <></>
  else{
    plate = <img src={
      props.uri.split(".")[0]+"-plate.svg"
      }></img>
  }
  // Correct answer is displayed to end user (img[aria-content])
  // Too fucking bad
  return <>
  <img src={props.uri}></img>
  {plate}
  </>
}