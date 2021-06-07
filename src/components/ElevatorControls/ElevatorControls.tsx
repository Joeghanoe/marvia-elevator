import './ElevatorControls.scss'

interface IElevatorControls {
    activeFloor: number,
    floors: number,
    sequence: string,
    callBack?: CallableFunction
}

const ElevatorControls = ({activeFloor, floors, sequence, callBack}: IElevatorControls) => {
    return <div className="elevator-controls__container">
        <span className="elevator-controls__floor elevator-controls__heading">Floor {activeFloor}</span>
        <div className="elevator-controls__buttons">
            {new Array(floors).fill('').map((buttons: object, index: number) => {
                return <button 
                    className="elevator-controls__button" 
                    key={`button-${index}`}
                    onClick={e => {
                        e.preventDefault()
                        
                        // Calls back the floor number corresponding to the button
                        callBack && callBack(index)
                    }}
                >{index}</button>
            })}
        </div>
        <div className="elevator-controls__sequence">
            <span className="elevator-controls__heading">Sequence</span>
            <span>{sequence}</span>
        </div>
    </div>
}

export default ElevatorControls