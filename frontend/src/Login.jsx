import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import { useState } from "react";

export default function Login() {
  const [form, setForm] = useState();

  function clickRegister() {}

  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        maxWidth="sm"
        sx={{ paddingTop: "180px" }}
        className="Container"
      >
        <React.Fragment>
          <CssBaseline />
          <Paper variant="elevation" elevation={6}>
            ,
            <Container
              sx={{
                bgcolor: "",
                height: "500px",
                width: "550px",
                paddingRight: "12px",
              }}
            >
              <TextField
                id="filled-basic"
                label="Username"
                variant="outlined"
                type="username"
                onClick={(e) => setForm({ ...form, username: e.target.value })}
                sx={{ width: "350px", marginTop: "80px", marginLeft: "35px" }}
              />{" "}
              <br />
              <TextField
                id="filled-basic"
                label="Email"
                variant="outlined"
                type="email"
                onClick={(e) => setForm({ ...form, email: e.target.value })}
                sx={{ width: "350px", marginTop: "40px", marginLeft: "35px" }}
              />{" "}
              <br />
              <TextField
                id="filled-basic"
                label="Password"
                variant="outlined"
                type="password"
                sx={{ width: "350px", marginTop: "40px", marginLeft: "35px" }}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />{" "}
              <br />
              <Button
                variant="contained"
                sx={{ marginTop: "25px", marginLeft: "35px" }}
                onClick={() => {
                  clickRegister();
                }}
              >
                REGISTER
              </Button>
            </Container>
          </Paper>
        </React.Fragment>
        ;
      </Container>
    </React.Fragment>
  );
}
