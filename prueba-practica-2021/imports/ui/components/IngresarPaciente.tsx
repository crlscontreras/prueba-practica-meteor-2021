import React, { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { PatientsCollection } from "/imports/api/PatientsCollection";
import { RegionsCollection } from "/imports/api/RegionsCollection";
import { useTracker } from "meteor/react-meteor-data";
import { validateRut, formatRut } from "rutlib";

type FormData = {
  nombres: string;
  paterno: string;
  materno: string;
  rut: string;
  region: string;
  comuna: string;
};

export const IngresarPaciente = () => {
  const [currentRegion, setCurrentRegion] = useState("nada");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const [isSafeToReset, setIsSafeToReset] = useState(false);

  useEffect(() => {
    if (!isSafeToReset) {
      return;
    } else {
      console.log("reset");
      reset(); // asynchronously reset the form values
      setIsSafeToReset(false);
    }
  }, [isSafeToReset]);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log(data);
    try {
      await PatientsCollection.insert({
        nombres: data.nombres,
        paterno: data.paterno,
        materno: data.materno,
        rut: formatRut(data.rut),
        region: data.region,
        comuna: data.comuna,
      });
      setIsSafeToReset(true);
    } catch (e) {
      // hacer algo con error
    }
  };

  const regions = useTracker(() => RegionsCollection.find({}).fetch());

  //console.log(currentRegion);
  const showComunas = { region: { $eq: currentRegion } };

  const regionesComunasFiltrado = useTracker(() =>
    RegionsCollection.find(showComunas).fetch()
  );

  return (
    <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-300">
      <form action="" className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="" className="text-sm font-bold text-gray-600 block">
            Nombres
          </label>
          <input
            {...register("nombres", {
              required: true,
              pattern: /^[A-Za-z]+$/i,
            })}
            name="nombres"
            type="text"
            className="w-full p-2 border border-gray-300 rounded mt-1"
          ></input>
          {errors.nombres?.type === "required" && (
            <span>Este campo es obligatorio</span>
          )}
          {errors.nombres?.type === "pattern" && (
            <span>Ingrese solo letras</span>
          )}
        </div>
        <div>
          <label htmlFor="" className="text-sm font-bold text-gray-600 block">
            Apellido Paterno
          </label>
          <input
            {...register("paterno", {
              required: true,
              pattern: /^[A-Za-z]+$/i,
            })}
            name="paterno"
            type="text"
            className="w-full p-2 border border-gray-300 rounded mt-1"
          ></input>
          {errors.paterno?.type === "required" && (
            <span>Este campo es obligatorio</span>
          )}
          {errors.paterno?.type === "pattern" && (
            <span>Ingrese solo letras</span>
          )}
        </div>
        <div>
          <label htmlFor="" className="text-sm font-bold text-gray-600 block">
            Apellido Materno
          </label>
          <input
            {...register("materno", {
              required: true,
              pattern: /^[A-Za-z]+$/i,
            })}
            name="materno"
            type="text"
            className="w-full p-2 border border-gray-300 rounded mt-1"
          ></input>
          {errors.materno?.type === "required" && (
            <span>Este campo es obligatorio</span>
          )}
          {errors.materno?.type === "pattern" && (
            <span>Ingrese solo letras</span>
          )}
        </div>
        <div>
          <label htmlFor="" className="text-sm font-bold text-gray-600 block">
            RUT (Ej: 19.864.395-5)
          </label>
          <input
            {...register("rut", {
              required: true,
              validate: (rut) => validateRut(rut),
            })}
            name="rut"
            type="text"
            className="w-full p-2 border border-gray-300 rounded mt-1"
          ></input>
          {errors.rut?.type === "required" && (
            <span>Este campo es obligatorio</span>
          )}
          {errors.rut?.type === "validate" && (
            <span>Ingrese un rut valido</span>
          )}
        </div>
        <div>
          <label htmlFor="" className="text-sm font-bold text-gray-600 block">
            Region
          </label>
          <select
            {...register("region", { required: true })}
            name="region"
            id=""
            className="w-full p-2 border border-gray-300 rounded mt-1"
            onChange={(e) => setCurrentRegion(e.target.value)}
          >
            <option key={"id"} value="">
              Seleccionar Region
            </option>
            {regions.map((regions) => (
              <option key={regions.region} value={regions.region}>
                {regions.region}
              </option>
            ))}
          </select>
          {errors.region?.type === "required" && (
            <span>Seleccione una region</span>
          )}
        </div>
        <div>
          <label htmlFor="" className="text-sm font-bold text-gray-600 block">
            Comuna
          </label>
          <select
            {...register("comuna", { required: true })}
            name="comuna"
            id=""
            className="w-full p-2 border border-gray-300 rounded mt-1"
          >
            <option key={"id"} value="">
              Seleccionar Comuna
            </option>
            {regionesComunasFiltrado.map((regionesComunas) =>
              regionesComunas.comunas.map((comuna) => (
                <option key={comuna} value={comuna}>
                  {comuna}
                </option>
              ))
            )}
          </select>
          {errors.comuna?.type === "required" && (
            <span>Seleccione una comuna</span>
          )}
        </div>
        <div>
          <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm">
            Ingresar
          </button>
        </div>
      </form>
    </div>
  );
};
