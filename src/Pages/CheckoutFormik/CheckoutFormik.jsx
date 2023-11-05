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
      nombre: Yup.string()
        .required("El campo es obligatorio")
        .min(3, "Debe tener almenos 3 caracteres")
        .max(20, "No debe tener mas de 20 caracteres"),
      apellido: Yup.string()
        .required("El campo es obligatorio")
        .min(3, "Debe tener almenos 3 caracteres")
        .max(20, "No debe tener mas de 20 caracteres"),
      email: Yup.string()
        .required("El campo es obligatorio")
        .email("Email no valido, asegurate de contener el simbolo @"),
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
          helperText={errors.nombre}
        />
        <TextField
          id="outlined-basic"
          label="Apellido"
          variant="outlined"
          name="apellido"
          onChange={handleChange}
          error={errors.apellido ? true : false}
          helperText={errors.apellido}
        />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          name="email"
          onChange={handleChange}
          error={errors.email ? true : false}
          helperText={errors.email}
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
