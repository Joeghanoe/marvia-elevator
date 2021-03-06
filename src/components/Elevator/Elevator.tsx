import { useEffect, useState } from "react"
import ElevatorControls from "../ElevatorControls/ElevatorControls"
import ElevatorShaft from "../ElevatorShaft/ElevatorShaft"

import './Elevator.scss'

const Elevator = () => {
    const [elevatorState, setElevatorState] = useState({
        floors: 6,
        activeFloor: 0,
        isMoving: false,
        direction: 2,
    })
    const [elevatorSequence, setElevatorSequence] = useState<number[]>([])

    useEffect(() => {
        let timeout = setTimeout(() => {
            let elevatorDelay;

            if(elevatorSequence.length){
                // Run the elevator
                elevatorDelay = setTimeout(() => {
                    setElevatorState({...elevatorState, activeFloor: elevatorSequence[0], isMoving: false})

                    // If there is a sequence left slice it and rerun the useEffect
                    setElevatorSequence([...elevatorSequence.slice(1)])
                }, (elevatorState.activeFloor - (elevatorSequence[0] ?? 1)) * 1000)

                setElevatorState({...elevatorState, isMoving: true})
            } else {
                
                // Clear all states and reset elevator except for floor
                setElevatorState({...elevatorState, direction: 2})
                clearTimeout(elevatorDelay);
            }

        }, 2500)

        return () => clearTimeout(timeout)
    }, [elevatorSequence])

    const CallElevatorOrder = (index: number) => {
        if(index === elevatorState.activeFloor) return;
      
        callElevatorFloor(elevatorState.direction, index);
    }

    const callElevatorFloor = (direction: number, index: number) => {

        // Set direction of elevator
        setElevatorState({...elevatorState, direction: direction ? 1 : 0})
        if(elevatorSequence.includes(index)) return;

        // Copy array and append new index
        let newElevatorSequence = [...elevatorSequence, index];
        
        // Map the elevator and compare the difference to the current floor to determine the best route
        let elevatorArray = newElevatorSequence.map(sequence => {
            return {floor: sequence, order: direction === 0 ? elevatorState.activeFloor - sequence : sequence - elevatorState.activeFloor}
        })

        // Sort the array of objects based on the "order" value
        elevatorArray.sort((a, b) => a.order - b.order)
        
        // Get final values for array of sequence
        let finalOrder = elevatorArray.map(order => order.floor);

        setElevatorSequence(finalOrder)
    }

    return <div className="elevator__container">
        <ElevatorShaft 
            callBack={callElevatorFloor} 
            isMoving={elevatorState.isMoving}
            activeFloor={elevatorState.activeFloor}
            floors={elevatorState.floors} 
        />
        <ElevatorControls 
            activeFloor={elevatorState.activeFloor}
            floors={elevatorState.floors} 
            direction={elevatorState.direction}
            sequence={!elevatorSequence.length ? 'Statisch' : elevatorSequence.toString().replaceAll(",", " - ")}
            callBack={CallElevatorOrder}
        />
    </div>
}

export default Elevator