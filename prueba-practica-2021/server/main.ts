import { Meteor } from "meteor/meteor";
import { PatientsCollection } from "/imports/api/PatientsCollection";
import { RegionsCollection } from "/imports/api/RegionsCollection";

function insertPatient(
  nombres: string,
  paterno: string,
  materno: string,
  rut: string,
  region: string,
  comuna: string
) {
  PatientsCollection.insert({ nombres, paterno, materno, rut, region, comuna });
}

function insertRegion(region: string, comunas: string[]) {
  RegionsCollection.insert({ region, comunas });
}

Meteor.startup(() => {
  const regions = require("./lib/regions");

  // If the Patients Collection is empty, add some data.
  if (PatientsCollection.find().count() === 0) {
    //ingresar un paciente de prueba
    insertPatient(
      "Carlos Alejandro",
      "Contreras",
      "Rojas",
      "198643955",
      "Coquimbo",
      "La Serena"
    );
  }
  //instertar regiones
  if (RegionsCollection.find().count() === 0) {
    // itterate through each object in json
    regions.forEach(function (region: any) {
      // insert into db
      insertRegion(region.region, region.comunas);
    });
  }
});
