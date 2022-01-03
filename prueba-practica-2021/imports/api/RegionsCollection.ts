import { Mongo } from "meteor/mongo";

export interface Region {
  _id?: string;
  region: string;
  comunas: string[];
}

export const RegionsCollection = new Mongo.Collection<Region>("regions");
