import PocketBase from "pocketbase";

type TypedPocketBase = PocketBase & {
  // extend with custom collection types or helper methods if needed
};

var path = "";
if (import.meta.env.MODE === "development")
  path = "http://localhost:8090"; //localhost = machine de dev
else path = "http://localhost:8091"; //localhost = machine de déploiement
const pb = new PocketBase(path) as TypedPocketBase;
export default pb;
