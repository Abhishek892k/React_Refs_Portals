import { useState } from "react";
import { useRef } from "react";

export default function Player() {

 const[playerName, setPlayerName] = useState(null);

 const inPlayerName = useRef();


 function handleClick(){
  setPlayerName(inPlayerName.current.value);
  inPlayerName.current.value='';
 }

  return (
    <section id="player">
      <h2>Welcome {playerName ??  'unknown entity'}</h2>
      <p>
        <input type="text" ref={inPlayerName}/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
