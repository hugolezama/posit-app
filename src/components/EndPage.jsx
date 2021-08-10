import {
  Button,
  Container,
  Divider,
  Paper,
  Typography,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

import React from "react";

const EndPage = () => {
  const history = useHistory();
  return (
    <Container
      maxWidth="md"
      style={{
        padding: 30,
      }}
    >
      <Paper
        elevation={3}
        style={{
          padding: 20,
          margin: 10,
        }}
      >
        <Typography variant="h4" gutterBottom align="center">
          Gracias por completar el cuestionario
        </Typography>
        <br></br>
        <Divider variant="middle" />
        <br></br>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            localStorage.removeItem("surveyId");
            history.push("/");
          }}
        >
          Finalizar
        </Button>
      </Paper>
    </Container>
  );
};

export default EndPage;
