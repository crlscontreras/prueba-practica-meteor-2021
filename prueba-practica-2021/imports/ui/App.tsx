import React from "react";
import { IngresarPaciente } from "./components/IngresarPaciente";
import { TablaPaciente } from "./components/TablaPaciente";

export const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center">
      <div className="max-w-md w-full mx-auto">
        <div className="mt-6 text-center font-medium text-xl">
          Ingresar Paciente
        </div>
      </div>
      <IngresarPaciente />
      <div className="max-w-md w-full mx-auto">
        <div className="mt-6 text-center font-medium text-xl">
          Tabla de Pacientes
        </div>
      </div>
      <TablaPaciente />
    </div>
  );
};
