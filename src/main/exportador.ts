import { estrategiaDeExportacion } from "./estrategiaDeExportacion";
import { Exportable } from "./exportable";

//Cohesión: Una alta cohesión significa que los elementos dentro de un módulo están altamente relacionados y trabajan juntos de manera efectiva, mientras que una baja cohesión significa que los elementos dentro de un módulo están poco relacionados y no trabajan juntos de manera efectiva.

//La interfaz arregla el problema de tener que modificar el map todo el tiempo por si se agrega un nuevo "dato"
export class Exportador {


    public exportar(exportable:Exportable, estrategia:estrategiaDeExportacion): string{
        return estrategia.exportar(exportable); 
    }

}