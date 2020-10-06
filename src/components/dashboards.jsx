import React, { useState, useLayoutEffect, Fragment } from "react";
import NavBar from "./NavBar";
import { Pie } from "react-chartjs-2";
import { getDashboard } from "./Api";

export default function Dashboards() {
  const [dashBoards, setDashBoards] = useState();

  useLayoutEffect(() => {
    getDashboard().then((data) => {
      setDashBoards(data);
    });
  }, [dashBoards]);

  /*

  */
  return (
    <div>
      <NavBar></NavBar>
      <div class="d-flex flex-row bd-highlight mb-3">
        {!!dashBoards ? <GraficosDeTorta data={dashBoards} /> : "cargando"}
      </div>
    </div>
  );
}

function GraficosDeTorta({ data }) {
  return (
    <Fragment>
      <GraficoDeTorta
        elementos={["Mujeres", "Hombres"]}
        cantidades={[data.dashboardSexoDTO.mujer, data.dashboardSexoDTO.hombre]}
        class="w-25 p-3"
      ></GraficoDeTorta>

      <GraficoDeTorta
        elementos={["Total", "Parcial"]}
        cantidades={[
          data.dashboardNivelCegueraDTO.total,
          data.dashboardNivelCegueraDTO.parcial,
        ]}
        class="w-25 p-3"
      ></GraficoDeTorta>
    </Fragment>
  );
}

function GraficoDeTorta({ elementos, cantidades, ...props }) {
  const [data] = useState({
    labels: elementos,
    datasets: [
      {
        data: cantidades,
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#36AAAA",
          "#AAA2EB",
          "#FF8884",
          "#333384",
          "#123456",
          "#AB4235",
          "#161616",
          "#442461",
        ],
      },
    ],
  });

  return (
    <div {...props}>
      <Pie data={data} />
    </div>
  );
}
