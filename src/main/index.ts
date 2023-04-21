

//ejemplo colección MAP(es una colección de datos del tipo clave-valor Los elementos se pueden agregar o eliminar de un mapa, y se puede buscar un valor dado una clave específica.)

import { adapterPDF } from "./exportables/adapterPDF";
import { exportarAExcel } from "./exportables/exportarAExcel";
import { Exportador } from "./exportador";
import { ListadoDeAlumnos } from "./listadoDeAlumnos";
import { exportarPDF } from "./exportables/exportarAPDF";

const exportador = new Exportador ();

const listadoDeAlumnos = new ListadoDeAlumnos ();

const rutaAlArchivoExcel = exportador.exportar(listadoDeAlumnos, new exportarAExcel());

const RutaAlPDF1 = exportador.exportar(listadoDeAlumnos, new exportarPDF(new adapterPDF()));




