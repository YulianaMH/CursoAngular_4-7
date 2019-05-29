import { Component } from '@angular/core';
import { RopaService } from '../services/ropa.service'; //importo el servicio

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    providers: [RopaService] //mediante inyeccion de dependencias, creo nstancias de todos los objetos del servicio
})

export class HomeComponent {
    public titulo = 'Página Principal';
    public listado_ropa:Array<string>;
    public prenda_a_guardar:string;
    public fecha;
    public nombre = "JUAN lopez MarTinez";

    constructor(        
        private _ropaService: RopaService //instancia de RopaService
    ){
        this.fecha = new Date(2019, 5, 22);
    }

    ngOnInit(){
        this.listado_ropa = this._ropaService.getRopa();
        console.log(this.listado_ropa);
    }

    guardarPrenda(){
        this._ropaService.addRopa(this.prenda_a_guardar);
        this.prenda_a_guardar = null;
    }

    
    eliminarPrenda(index){
        this._ropaService.deleteRopa(index);
    }
}
