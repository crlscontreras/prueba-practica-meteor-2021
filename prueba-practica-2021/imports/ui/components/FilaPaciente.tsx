import React from "react";
import { PatientsCollection } from "/imports/api/PatientsCollection";

export const FilaPaciente = ({ patient }: { patient: any }) => {
  const onDeleteClick = (_id: string) => {
    PatientsCollection.remove(_id);
  };

  return (
    <tr>
      <td className="px-2 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex items-center">
          <div className="ml-3">
            <p className="text-gray-900 whitespace-no-wrap">
              {patient.nombres + " " + patient.paterno + " " + patient.materno}
            </p>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{patient.rut}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{patient.region}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{patient.comuna}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
          <button
            onClick={() => onDeleteClick(patient._id)}
            type="button"
            className="py-1 px-3 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-sm font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
          >
            Eliminar
          </button>
        </span>
      </td>
    </tr>
  );
};
