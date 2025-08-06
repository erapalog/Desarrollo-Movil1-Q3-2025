import { createContext } from "react";

export const saludoContext=createContext({
    nombre:'' as string,
    modificarNombre: (nombre:string)=>{}
})