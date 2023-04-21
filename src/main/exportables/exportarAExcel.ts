import { estrategiaDeExportacion } from "../estrategiaDeExportacion";
import { Exportable } from "../exportable";


export class exportarAExcel implements estrategiaDeExportacion {

    exportar(exportable: Exportable): string {
        //Acá deberíamos acoplarnos con la biblioteca de terceros (o sea, todo lo de apache)

        return "";
    }
}


   