import {Pipe, PipeTransform} from '@angular/core'; //es necesario estos exports para las pipes

@Pipe({ name: 'conversor' }) // Nombre del pipe
export class ConversorPipe implements PipeTransform{
    //este metodo transform, lo deben de tener todas la spipes
    transform(value, por){ //transform(value:string, por:string)
        let value_one = parseInt(value);
        let value_two = parseInt(por);

        let result = "La multiplicación: " + value_one + " x " + value_two + " = " + (value_one * value_two);

        return result;
    }
}