import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement } from "../../redux/CounterSlicer";
import { increment } from "../../redux/CounterSlicer";
import { Reset } from "../../redux/CounterSlicer";

function Home() {
  const value = useSelector((state) => state.counterData.value);
  const dispatch = useDispatch();

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <button onClick={() => dispatch(decrement())}>-</button>
      <h2 style={{ margin: "20px" }}>{value}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <br></br>
      <button onClick={() => dispatch(Reset())}>Reset</button>
    </div>
  );
}

export default Home;
