import { Injectable } from '@angular/core'; //decorador inyectable
//import { Http, Response, Headers } from '@angular/http'; //asi era con angular 4
import { HttpClient, HttpHeaders } from '@angular/common/http'; //asi es con angular 6 y 7
//import 'rxjs/add/operator/map'; // libreria para mapear la respuesta http, asi se usaba en version 4
import { map } from 'rxjs/operators'; // ASi en angular 6
//import { Observable } from 'rxjs/Observable'; // para utilizar el rxjs, asi era en version 4. Con el parche tambien puede funcionar asi
import { Observable } from 'rxjs'; // ASi en angular 6

@Injectable()
export class PeticionesService {
    public url: string;

    constructor(
        private _http: HttpClient // para usar el servicio http y poder hacer peticiones Ajax
    ){
        this.url = "https://jsonplaceholder.typicode.com/posts";// url a la que haremos peticiones
    }

    getPrueba(){
        return 'Hola desde el servicio peticiones.';
    }

    // Para hacer una petición por GET  a esta URL
    getArticulos(){
        // con map, recogemos la respuesta de la peticion. Con res.json convertimos la respuesta a json
        //return this._http.get(this.url).pipe(map(res => res.json())); // asi era en angular 6
        //return this._http.get(this.url).map(res => res.json()); // asi era en angular 4
        return this._http.get(this.url);

    }
}