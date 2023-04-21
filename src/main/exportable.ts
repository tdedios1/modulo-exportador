export interface  Exportable { //Las interfaces solo llevan la firma de los métodos
//Esto se hace para no romper la firma que está en "Exportador"

    getDatos(): Map<number, string[]>; //el método GET DATOS devuelve un map de números y string

}