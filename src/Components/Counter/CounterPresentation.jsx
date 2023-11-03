const CounterPresentation = ({ sumar, contador, restar, onAdd }) => {
  return (
    <div>
      <button onClick={sumar}>sumar</button>
      <button>{contador}</button>
      <button onClick={restar}>restar</button>
      <button onClick={() => onAdd(contador)}>Agregar al carrito</button>
    </div>
  );
};

export default CounterPresentation;
