import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const CheckoutFormik = () => {
  const { handleChange, handleSubmit, errors } = useFormik({
    initialValues: { nombre: "", apellido: "", email: "" },
    onSubmit: (data) => {
      console.log("se envio");
      console.log(data);
    },

    validateOnChange: false,
    validationSchema: Yup.object({
      nombre: Yup.string().required().min(3).max(20),
      apellido: Yup.string().required().min(3).max(20),
      email: Yup.string().required().email(),
    }),
  });

  console.log(errors);
  return (
    <div style={{ padding: "50px" }}>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Nombre"
          variant="outlined"
          name="nombre"
          onChange={handleChange}
          error={errors.nombre ? true : false}
        />
        <TextField
          id="outlined-basic"
          label="Apellido"
          variant="outlined"
          name="apellido"
          onChange={handleChange}
          error={errors.apellido ? true : false}
        />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          name="email"
          onChange={handleChange}
          error={errors.email ? true : false}
        />
        <Button variant="contained" type="submit">
          Enviar
        </Button>
        <Button variant={"outlined"} type="button">
          Cancelar
        </Button>
      </form>
    </div>
  );
};

export default CheckoutFormik;
