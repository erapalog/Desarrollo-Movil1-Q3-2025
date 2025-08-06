import { createContext } from "react";
import { Asignatura } from "../Modelos/Asignaturas";

export const tareaContext= createContext({
    listaTareas: [] as Asignatura[],
    agregarListaTarea: (tarea:Asignatura)=>{}
})