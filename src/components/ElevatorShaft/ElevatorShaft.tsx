import React, { useState } from 'react'

import ElevatorRoom from '../ElevatorRoom/ElevatorRoom'

import './ElevatorShaft.scss'

interface IElevatorShaft {
    activeFloor: number,
    floors: number,
    isMoving: boolean,
    callBack: CallableFunction
}

const ElevatorShaft = ({activeFloor, floors, isMoving, callBack}: IElevatorShaft) => {
    const [shaft, setShaft] = useState<object[]>(new Array(floors).fill(''))

    return <div className="elevator-shaft__container" style={{height: 125 * floors}}>
        <div className="elevator-shaft__content">
            {shaft.map((elevator: object, index: number) => {
                return <React.Fragment key={`elevator-${index}`}>
                    <ElevatorRoom 
                        isDownDisabled={shaft.length === index + 1} 
                        isUpDisabled={index === 0}
                        isActive={!isMoving && ((shaft.length - 1) - activeFloor === index)}
                        callBack={(direction: boolean) => callBack && callBack(direction, (shaft.length - 1) - index)} 
                    />
                </React.Fragment>
            })}
        </div>
        <div className="elevator-shaft__floor"/>
    </div>
}

export default ElevatorShaft