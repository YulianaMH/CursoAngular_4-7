import { Component } from '@angular/core';
import { Empleado } from './empleado';

@Component({
    selector: 'empleado',
    templateUrl: './empleado.component.html',
})

export class EmpleadoComponent {
    public titulo = 'Componente de empleado';
    public empleado:Empleado;
    public trabajadores:Array<Empleado>;
    public trabajador_externo:boolean;
    public color:string;
    public color_seleccionado:string;

    constructor(){
        this.empleado = new Empleado('Juan',33, 'Ingeniero', true);
        this.trabajadores = [
            new Empleado('Manuel',33, 'Medico', true),
            new Empleado('Yuliana',28, 'Medico', true),
            new Empleado('Cristian',22, 'Abogado', true)
        ];

        this.trabajador_externo = false;
        this.color = "pink";
        this.color_seleccionado = '#CCC';
    }

    ngOnInit(){        
        console.log(this.empleado);
        console.log(this.trabajadores);
    }

    cambiarExterno(valor){
        this.trabajador_externo = valor;
    }

    logColorSeleccionado(){
        console.log(this.color_seleccionado);
    }
}