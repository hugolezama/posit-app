import {
  Button,
  Container,
  Divider,
  Paper,
  Typography,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

import React from "react";

const Home = () => {
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
        <Typography variant="h3" gutterBottom align="center">
          CUESTIONARIO DE TAMIZAJE DE PROBLEMAS EN ADOLESCENTES (POSIT)
        </Typography>
        <br></br>
        <Divider variant="middle" />
        <br></br>
        <Typography variant="h6" gutterBottom>
          El propósito de estas preguntas es ayudarnos a conocer la forma en que
          mejor podemos ayudarte. Por esto, trata de contestar las preguntas con
          franqueza. Este no es un examen; no hay preguntas correctas o
          incorrectas, pero por favor, trabaja con cuidado. Todas las respuestas
          son confidenciales. Contesta todas las preguntas. Si alguna de ellas
          no se aplica exactamente a ti, escoge la respuesta que más se acerque
          a la verdad en tu caso. Es posible que encuentres la misma pregunta o
          preguntas semejantes más de una vez. Contéstalas cada vez que
          aparezcan en el cuestionario. Por favor, pon una “x” sobre tu
          respuesta y no marques fuera de los recuadros. Si no comprendes alguna
          palabra, pide ayuda a la persona encargada. ¡GRACIAS!
        </Typography>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              history.push("/survey");
            }}
          >
            Iniciar Cuestionario
          </Button>
        </div>
      </Paper>
    </Container>
  );
};

export default Home;
