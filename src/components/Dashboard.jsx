import { Container } from "@material-ui/core";
import firebase from "../firebase";
import React, { useEffect, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { useHistory } from "react-router-dom";

const columns = [
  {
    field: "name",
    headerName: "Nombre(s)",
    width: 250,
  },
  {
    field: "lastName",
    headerName: "Apellidos",
    width: 250,
  },
  {
    field: "gender",
    headerName: "Sexo",
    width: 120,
  },

  {
    field: "created",
    headerName: "Fecha de cuestionario",
    width: 250,
  },
  {
    field: "finalResult",
    headerName: "Resultado",
    width: 150,
  },
  {
    field: "rfResult",
    headerName: "RF",
    width: 100,
  },
];

const Dashboard = () => {
  const [surveys, setSurveys] = useState([]);
  const history = useHistory();

  const fetchData = () => {
    firebase
      .collection("surveys")
      .get()
      .then((data) => {
        data.forEach((item) => {
          setSurveys((arr) => [...arr, item.data()]);
        });
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container
      maxWidth="lg"
      style={{
        padding: 30,
      }}
    >
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={surveys}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 25, 100]}
          onRowDoubleClick={(event) => {
            console.log(event.id);
            history.push(`/showDetail/${event.id}`);
          }}
        />
      </div>
    </Container>
  );
};

export default Dashboard;
