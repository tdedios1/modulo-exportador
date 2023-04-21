import { estrategiaDeExportacion } from "../estrategiaDeExportacion";
import { Exportable } from "../exportable";
import { adapterExportadorPDF } from "./adapterExportadorPDF";


export class exportarPDF implements estrategiaDeExportacion {
    
    constructor (private adapter: adapterExportadorPDF){
        
    }


    exportar(exportable: Exportable): string {
        //Acá dice que la biblioteca puede cambiar en cualquier momento. El metodo no puede depender de la bibilioteca
        return "";
    }


    exportarPDF(exportable:Exportable):string{
        return this.adapter.exportarAPDF(exportable);
    }
}

