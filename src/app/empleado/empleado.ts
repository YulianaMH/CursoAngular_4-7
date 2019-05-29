//Esta clase es el modelo
export class Empleado {
    constructor(
        public nombre:string,
        public edad:number,
        public cargo:string,
        public contrato:boolean
    ){}
}