import { Injectable } from '@angular/core'; //decorador inyectable

@Injectable()
export class RopaService{
    public nombre_prenda ='Pantalones';
    public coleccion_ropa = ['Short', 'Falda'];

    prueba(nombre_prenda){
        return nombre_prenda;
    }

    addRopa(nombre_prenda){
        this.coleccion_ropa.push(nombre_prenda);        
        return this.getRopa();
    }

    getRopa(){
        return this.coleccion_ropa;
    }

    deleteRopa(index){
        this.coleccion_ropa.splice(index, 1); // a partir del index quiero borra solo 1 componente
        return this.coleccion_ropa;
    }
}