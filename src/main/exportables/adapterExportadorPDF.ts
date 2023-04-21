import { estrategiaDeExportacion } from "../estrategiaDeExportacion";
import { Exportable } from "../exportable";


//recibe un exportable y devuelve un string
//agregarle un metodo exportar pdf

export interface adapterExportadorPDF {
    exportarAPDF(exportable: Exportable): string 

}