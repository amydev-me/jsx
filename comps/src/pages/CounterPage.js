import Button from '../components/Button';
import Panel from '../components/Panel'; 
import { useReducer } from 'react';
import {produce} from 'immer';

const INCREMENT_COUNT = 'increment';
const DECREMENT_COUNT = 'decrement';
const SET_VAL_TO_ADD = 'change_value_to_add';
const ADD_VAL_TO_COUNT = 'add_val_to_count';

const reducer = (state, action) => {
  switch(action.type) {
    case INCREMENT_COUNT:
      state.count = state.count + 1;
      return;
    case DECREMENT_COUNT:
      state.count = state.count - 1;
      return;
    case SET_VAL_TO_ADD:
      state.valueToAdd = action.payload;
      return;
    case ADD_VAL_TO_COUNT:
      state.count = state.count + state.valueToAdd;
      state.valueToAdd = 0;
      return;
    default :
      return state;
  } 
}

function CounterPage({ initialCount }) {
  const [state, dispatch] = useReducer(produce(reducer), {
    count: initialCount,
    valueToAdd: 0
  });

  const increment = () => {
    dispatch({
      type: INCREMENT_COUNT
    });
  };

  const decrement = () => {
    dispatch({
      type: DECREMENT_COUNT
    });
  };

  const handleChage = (event) => {
    const value = parseInt(event.target.value) || 0;

    dispatch({
      type:SET_VAL_TO_ADD,
      payload: value
    })
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type:ADD_VAL_TO_COUNT
    });
  }

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {state.count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input value={state.valueToAdd || ''}
          onChange={handleChage}
          type="number" className="p-1 m-3 bg-gray-50 border border-gray-300" />
        <Button primary>Add it!</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;