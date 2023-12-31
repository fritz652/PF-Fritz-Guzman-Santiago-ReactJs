import { useState, useEffect } from "react";
import CounterPresentation from "./CounterPresentation";

const CounterContainer = ({ stock, onAdd, initial = 1 }) => {
  const [contador, setContador] = useState(initial);

  /* const stock = 5; */

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    } else {
      alert("cantidad Maxima");
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  useEffect(() => {
    // peticion a un servidor
    console.log("Se realizo una peticion");
  }, []);
  return (
    <CounterPresentation
      sumar={sumar}
      restar={restar}
      contador={contador}
      onAdd={onAdd}
    />
  );
};

export default CounterContainer;
