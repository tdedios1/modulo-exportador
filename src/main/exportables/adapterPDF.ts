import { Exportable } from "../exportable";
import { adapterExportadorPDF } from "./adapterExportadorPDF";




export class adapterPDF implements adapterExportadorPDF


{
    exportarAPDF(exportable: Exportable): string {
      return "";
    }


    
}
    