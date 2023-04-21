import { Exportable } from "./exportable";

export class ListadoDeAlumnos implements /*para implementar interface, es como un extends*/ Exportable{


    getDatos(): Map<number, string[]> {
        const alumnos = new Map<number, string[]>();

        alumnos.set(0, ["Nombre", "Apellido"]);
        alumnos.set(1, ["Ezequiel", "Escobar"]);

        return alumnos;
    }


}