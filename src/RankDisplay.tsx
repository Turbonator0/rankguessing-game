type RankProps = {
  uri: string
}

export function RankDisplay(props: RankProps){
  let plate; 
  if(props.uri.includes("2.5"))
    plate = <></>
  else{
    plate = <img src={
      props.uri.split(".")[0]+"-plate.svg"
      }></img>
  }
  return <>
  <img src={props.uri}></img>
  {plate}
  </>
}