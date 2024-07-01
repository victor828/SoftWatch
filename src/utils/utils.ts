import centralData from "../data/central.json";

export function login(usuario: string, password: string) {
  const data = centralData.find((u) => {
    if (u.nombre == usuario && u.contraseña === password) {
      console.log("funciono");
      return true;
    } else {
      console.log("no funciono");
      return false;
    }
  });
  return data;
}
