import { Component } from '@angular/core';
import { Coche } from './coche';
import { PeticionesService } from '../services/peticiones.service';

@Component({
    selector: 'coches',
    templateUrl: './coches.component.html',
    providers: [PeticionesService]
})
export class CochesComponent{
    public coche:Coche;
    public coches:Array<Coche>;
    public articulos;

    constructor(
        private _peticionesService: PeticionesService
    ){
        this.coche = new Coche("", "", "");
        this.coches = [
            new Coche("Seat Panda", "120", "Blanco"),
            new Coche("Renault Clio", "110", "Azul")
        ];
    }

    ngOnInit(){
        //el metodo subscribe es para manejar el error o el resultado exitoso
        this._peticionesService.getArticulos().subscribe(
            result => {
                // para manejar el caso exitoso
                this.articulos = result;
                if(!this.articulos){
                    console.log("Error en el servidor");
                }
            },
            error => {
                // para manejar el error
                var errorMessage = <any>error;
                console.log(errorMessage);
            }
        );
    }

    onSubmit(){
        this.coches.push(this.coche);
        this.coche = new Coche("", "", "");
    }
    
}