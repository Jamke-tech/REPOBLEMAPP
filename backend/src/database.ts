import mongoose from "mongoose";
import { isJSDocAugmentsTag } from "typescript";

export async function startConnection() {
  //Accedim a la BBDD que tenim ( en dev estarà en local )
  //Canviar el .connect (mongo o 127.0.0.1)!
  const db = await mongoose.connect("mongodb://mongo:27017/REPOBLEMAPP", {
    useNewUrlParser: true,
    useFindAndModify: false,
  });

  console.log("Connection with DATABASE (REPOBLEMAPP) established");
}
