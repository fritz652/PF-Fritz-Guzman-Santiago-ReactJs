import { useState } from "react";

const Checkout = () => {
  const [userInfo, setUserInfo] = useState({
    nombre: "",
    apellido: "",
    email: "",
  });

  const capturarDatos = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const enviarFormulario = (e) => {
    e.preventDefault();
    if (userInfo.nombre.length >= 5) console.log(e);
  };

  return (
    <div>
      <form onSubmit={enviarFormulario}>
        <input
          type="text"
          name="nombre"
          onChange={capturarDatos}
          placeholder="Nombre"
        />
        <input
          type="text"
          name="apellido"
          onChange={capturarDatos}
          placeholder="Apellido"
        />
        <input
          type="text"
          name="email"
          onChange={capturarDatos}
          placeholder="Email"
        />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Checkout;
