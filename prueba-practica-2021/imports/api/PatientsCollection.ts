import { Mongo } from "meteor/mongo";

export interface Patient {
  _id?: string;
  nombres: string;
  paterno: string;
  materno: string;
  rut: string;
  region: string;
  comuna: string;
}

export const PatientsCollection = new Mongo.Collection<Patient>("patients");
