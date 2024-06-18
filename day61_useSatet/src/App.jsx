import React from "react";
import { useState } from "react";

// useState, useEffect, useContext, [useParams, useNavigate, useLocation] , [useSelector, useDispatch]

export const App = () => {
  // let counter = 0;
  // const [counter, setCounter] = useState(0)

  const [counter, setCounter] = useState(0);


  const increase = () => {
    // counter++;
    setCounter(counter+1)
    console.log(counter);
  };

  const decrease = () => {
    // counter--;
    setCounter(counter-1)
    console.log(counter);
  };
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
    </div>
  );
};
