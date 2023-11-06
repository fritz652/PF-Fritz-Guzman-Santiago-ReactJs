import { Button } from "@mui/material";

const CounterPresentation = ({ sumar, contador, restar, onAdd }) => {
  return (
    <div
      style={{
        display: "grid",
        gap: "20px",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: "500px",
      }}
    >
      <Button variant="contained" onClick={sumar}>
        +
      </Button>
      <Button variant="outlined">{contador}</Button>
      <Button variant="contained" onClick={restar}>
        -
      </Button>
      <Button variant="text" onClick={() => onAdd(contador)}>
        Agregar
      </Button>
    </div>
  );
};

export default CounterPresentation;
