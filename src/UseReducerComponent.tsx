import { useReducer } from "react";

const initialState = {
    counter: 100,
}

type ACTIONTYPES =
| { type: "increment"; payload:number }
| { type: "decrement"; payload:number };

const counterReducer = (state: typeof initialState, action: ACTIONTYPES) => {
    switch(action.type) {
        case "increment":
            return {
                ...state,
                counter: state.counter + action.payload
            }
        case "decrement":
            return {
                ...state,
                counter: state.counter - action.payload
            }
        default:
            throw new Error("Bad Action")
    }
}

const UseReducerComponent = () => {
    const [state, dispatch] = useReducer(counterReducer, initialState);

    return (
        <>
            <div>{state.counter}</div>
            <div>
                <button onClick={() => dispatch({
                    type: "increment",
                    payload: 10
                })}>
                    increment
                </button>
            </div>
            <div>
                <button onClick={() => dispatch({
                    type: "decrement",
                    payload: 5
                })
                }>
                    decrement
                </button>
            </div>
        </>
    )
}

export default UseReducerComponent