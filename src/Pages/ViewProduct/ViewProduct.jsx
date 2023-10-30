//Hoocks
import { useState } from "react";

const ViewProduct = () => {
  const [counter, setCounter] = useState(0);

  const sumar = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <h4>{counter}</h4>
      <button onClick={sumar}>Sumar</button>
    </div>
  );
};

export default ViewProduct;
