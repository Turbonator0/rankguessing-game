type RankProps = {
  name: string
  uri: string
}

export function RankDisplay(props: RankProps){
  let plate; 
  if(props.uri.includes("2.5"))
    plate = <></>
  else{
    plate = <img alt={props.name+" kauluslaatta"} src={
      props.uri.split(".")[0]+"-plate.svg"
      }></img>
  }
  return <>
  <img alt={props.name} src={props.uri}></img>
  {plate}
  </>
}