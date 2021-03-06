import ElevatorButton from '../ElevatorButton/ElevatorButton'
import './ElevatorRoom.scss'

interface IElevatorProps {
    isUpDisabled?: boolean
    isDownDisabled?: boolean,
    isActive?: boolean,
    callBack: CallableFunction
}

const ElevatorRoom = ({isUpDisabled, isDownDisabled, isActive, callBack}: IElevatorProps) => {
    return <div className="elevator-room__container">
        <div className={`elevator-room__doors elevator-room__doors--${isActive ? 'open' : 'closed'}`}>
            <div className="elevator-room__door" />
            <div className="elevator-room__door" />
        </div>
        <div className="elevator-room__buttons">
            <ElevatorButton direction={true} disabled={isUpDisabled} callBack={callBack}/>
            <ElevatorButton direction={false} disabled={isDownDisabled} callBack={callBack}/>
        </div>
    </div>
}

export default ElevatorRoom