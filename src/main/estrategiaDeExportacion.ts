import { Exportable } from "./exportable";

export interface estrategiaDeExportacion {


    exportar(exportable:Exportable):string 
    //No lleva cuerpo = no lleva llaves

}