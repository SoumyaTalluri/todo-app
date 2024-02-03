import {useSelector,useDispatch} from 'react-redux';

function Counter(){
    const dispatch= useDispatch();
    const counter= useSelector(state=>state.counter);
    const show= useSelector(state=>state.showCounter);
    const incrementHandler=()=>{
        dispatch({type:'increment'})
    }
    const decrementHandler=()=>{
        dispatch({type:'decrement'})
    }
    const handleToggleCounter=()=>{
        dispatch({type:'toggle'})
    }
    return(
        <div>
          <h1>Counter</h1>
          <p>{counter}</p>
          <button onClick={incrementHandler}>Increment</button>
          <button onClick={decrementHandler}>Decrement</button>
          <button onClick={handleToggleCounter} >Toggle Counter</button>
        </div>
    )
}
export default Counter;