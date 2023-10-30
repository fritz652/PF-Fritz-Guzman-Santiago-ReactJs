/* import { useState } from "react";
//import { Login } from "@mui/icons-material";

const Login = () => {
  const [nombre, setNombre] = useState("Pepe");
  9;
  const changeNombre = () => {
    if (nombre === "Pepe") {
      setNombre("Papu");
    } else {
      setNombre("Pepe");
    }
  };

  return (
    <div>
      <h2>{nombre}</h2>
      <button onClick={changeNombre}>Cambiar nombre</button>
    </div>
  );
};

export default Login;
 */

import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  /* const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  }; */

  return (
    <Box sx={{ padding: "20px" }}>
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Grid item xs={12} sm={8} md={6} lg={4} xl={3}>
          <TextField label="email" fullWidth />
        </Grid>
        <Grid item xs={12} sm={8} md={6} lg={4} xl={3}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={8} md={6} lg={4} xl={3}>
          <Button variant="contained" fullWidth>
            Ingresar
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
