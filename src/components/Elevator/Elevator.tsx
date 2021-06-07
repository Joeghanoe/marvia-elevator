import { useState } from "react"
import ElevatorControls from "../ElevatorControls/ElevatorControls"
import ElevatorShaft from "../ElevatorShaft/ElevatorShaft"

import './Elevator.scss'

const Elevator = () => {
    const [elevatorState, setElevatorState] = useState({
        floors: 6,
        activeFloor: 0,
        sequence: [4, 4, 2, 3],
        direction: undefined,
    })

    return <div className="elevator__container">
        <ElevatorShaft 
            callBack={(direction: boolean, index: number) => console.log(direction, index)} 
            activeFloor={elevatorState.activeFloor}
            floors={elevatorState.floors} 
        />
        <ElevatorControls 
            activeFloor={elevatorState.activeFloor}
            floors={elevatorState.floors} 
            direction={elevatorState.direction}
            sequence={elevatorState.sequence.toString().replaceAll(",", " - ")}
            callBack={(index: number) => console.log(index)}
        />
    </div>
}

export default Elevator