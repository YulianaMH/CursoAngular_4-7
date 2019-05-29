import { Component } from '@angular/core'

@Component({
    selector: 'fruta',
    templateUrl: './fruta.component.html',
    //styleUrls: ['./app.component.css']
    /*template: `
        <h2>{{ nombre_component }}</h2>
        <h2>{{ listado_frutas }}</h2>
    `*/
})

export class FrutaComponent {
    //title: 'Componente de Fruta'
    public nombre_component;
    public listado_frutas;
    public trabajos:Array<string>;
    public nombre:string = 'Yuliana';
    public edad:number = 20;

    constructor(){
        this.nombre_component = 'Componente de fruta';
        this.listado_frutas = 'pera, manzana y mango';
        this.trabajos = ['Profesor','Medico','Ingeniero'];   
    }

    ngOnInit(){
        this.cambiarNombre();
        this.cambiarEdad(28);
        console.log(this.nombre + ' ' + this.edad);

        // variables y alcance
        var uno  = 1;
        var dos = 2;
        if(uno === 1) {
            let uno = 11;
            var dos = 22;
            console.log("Dentro del if: " + uno +" - " + dos);
        }
        console.log("Fuera del if: " + uno +" - " + dos);
    }

    cambiarNombre(){
        this.nombre = 'Yuliana Murillo';
    }

    cambiarEdad(edad){
        this.edad = edad;        
    }
}