import React from "react";
import "./information.css";

const information = () => {
  return (
    <div>
      <h1>Información</h1>
      <div className="viewDetail">
        <p>
          Resultados rápidos Test RT-PCR y Anticuerpos Realizando el estudio
          hasta las 13hs, el resultado será notificado a las 22hs del mismo día.
          En caso de hacerlo luego de ese horario, se comunicará el resultado a
          las 22hs del día siguiente.
        </p>
        <p>
          Test Rápido (Antígenos) El resultado del estudio se notificará dentro
          de las 4hs de realizado el estudio.
        </p>
        <p>Turnos en el día. Consultar por urgencias. </p>
        <p>
          Realizamos a domicilio los Test COVID-19 RT-PCR, Antígenos y
          Anticuerpos, a domicilio en C.A.B.A. y G.B.A. Se coordina con el
          paciente el horario en el cual el enfermero se acercará al domicilio a
          efectuar el análisis/testeo. Se informarán al paciente los datos del
          enfermero asignado.
        </p>
      </div>
    </div>
  );
};

export default information;
