import type { DigimonAttributes } from "./App";

interface DigiMonProps {
    Digimon: DigimonAttributes[],
    deleteMon: (id:number) => void;
}


function Digimon({Digimon, deleteMon}: DigiMonProps) {


    return(
         <ul>
          {Digimon.map((mon) => (
            <li key={mon.id}>
              <p>
                Your digimon is {mon.name} and it's a {mon.type} type!
              </p>
              <button onClick={() => deleteMon(mon.id)}>Delete Digimon</button>
            </li>
          ))}
        </ul>
    )
}

export default Digimon;