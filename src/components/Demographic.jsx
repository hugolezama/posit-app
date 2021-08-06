import DateFnsUtils from "@date-io/date-fns";
import {
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Demographic = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState(null);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("name :", name);
    console.log("lastName :", lastName);
    console.log("email :", email);
    console.log("gender :", gender);
    console.log("dob :", dob);

    history.push("/survey");
  };
  return (
    <Container
      maxWidth="md"
      style={{
        padding: 30,
      }}
    >
      <form onSubmit={handleSubmit} autoComplete="off">
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                label="Nombre(s): "
                id="name"
                required
                autoComplete="off"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Appelidos: "
                id="lastNames"
                autoComplete="off"
                fullWidth
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                label="Correo electrónico: "
                id="email"
                fullWidth
                autoComplete="off"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl style={{ minWidth: 120 }}>
                <InputLabel id="gender-label">Sexo: </InputLabel>
                <Select
                  labelId="gender-label"
                  id="gender"
                  required
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <MenuItem value={"M"}>Mujer</MenuItem>
                  <MenuItem value={"H"}>Hombre</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <KeyboardDatePicker
                disableToolbar
                required
                margin="normal"
                format="dd/MM/yyyy"
                value={dob}
                onChange={(date) => setDob(date)}
              />
            </Grid>

            <Grid item xs={12} md={12}>
              <Button variant="contained" color="primary" type="submit">
                Iniciar Cuestionario
              </Button>
            </Grid>
          </Grid>
        </MuiPickersUtilsProvider>
      </form>
    </Container>
  );
};

export default Demographic;
