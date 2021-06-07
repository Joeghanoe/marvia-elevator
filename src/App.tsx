import './App.scss';
import Elevator from './components/Elevator/Elevator';

const App = () => {
    return (
        <div className="app__container">
            <Elevator />
        </div>
    );
}

// ElevatorContainer
//     ElevatorState    
//         ElevatorOrder
//         ElevatorPosition

//     ElevatorShaft
//         Elevator
//             Callback => Up/Down
//             IsOpen: boolean

//     ElevatorControls
//         Callback floor number


// let elevator = [0, 3, 4, 5]

// let elevatorInput = 2
// let input = 'down'

// 0 - 2 = 2           [0]                    [0] 
// 3 - 2 = 1           [1, 0]                 [0, 1, 2, 3]
// 4 - 2 = 2           [1, 2, 0]               
// 5 - 2 = 3           [1, 2, 3, 0]    

// let elevatorOrder = [1, 2, 3, 0];
// let order = elevator[elevatorOrder[0]];
// elevatorOrder.shift();

export default App;
