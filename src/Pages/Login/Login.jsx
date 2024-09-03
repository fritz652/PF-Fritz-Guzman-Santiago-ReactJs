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

  return (
    <Box sx={{ padding: "20px"}}>
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems:"center",
          flexDirection: "column",
          marginTop:"10vh"
        }}
      >
        <Grid item xs={12} sm={8} md={6} lg={4} xl={3}>
          <TextField label="email" fullWidth sx={{minWidth:"20vw"}}/>
        </Grid>
        <Grid item xs={12} sm={8} md={6} lg={4} xl={3}>
          <FormControl variant="outlined" fullWidth sx={{minWidth:"20vw"}}>
            <InputLabel htmlFor="outlined-adornment-password" >
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
          <Button variant="contained" fullWidth sx={{minWidth:"20vw", height:"50px"}}>
            Ingresar
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
