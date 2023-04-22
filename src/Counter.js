import React, { useReducer } from "react";

// Reducer 함수 정의
// state 는 아래 useReducer에서 초기값으로 지정한 0 이 됩니다.
//action은 아래 dispatch에서 넘겨주는 객체 값이 됩니다.
function reducer(state, action) {
    switch (action.type) {
    case 'INCREMENT':
    return state + 1;
    case 'DECREMENT':
    return state - 1;
    default:
    return state;
    }
   }
   

function Counter() {
    const[number, dispatch] = useReducer(reducer,0);
//   const [number, setNumber] = useState(0);

  const onIncrease = () => {
    // setNumber((prevNumber) => prevNumber + 1);
    dispatch({ type: 'INCREMENT' }); // { type: 'INCREMENT' } 이 action 값 입니다.
  };
  const onDecrease = () => {
    // setNumber((prevNumber) => prevNumber - 1);
    dispatch({type : 'DECREMENT'});
  };
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}
export default Counter;
