const CounterPresentation = ({ sumar, contador, restar }) => {
  return (
    <div>
      <button onClick={sumar}>sumar</button>
      <button>{contador}</button>
      <button onClick={restar}>restar</button>
    </div>
  );
};

export default CounterPresentation;
