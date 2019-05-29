import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'; //para recoger parametros, hacer redirecciones

@Component({
    selector: 'contacto',
    templateUrl: './contacto.component.html',
})

export class ContactoComponent {
    public titulo = 'Página de contacto de la web';
    public parametro;

    // LAs inyecto para poder usarlas (Router, ActivatedRoute)
    constructor(
        private _route: ActivatedRoute,
        private _router: Router
    ){}

    //recoger los parametros de la url
    ngOnInit(){
        this._route.params.forEach((params: Params) => {
            this.parametro = params['page'];
        });       
    }

    redirigir(){
        //el router navigate, es un metodo que nos permite redirigir
        this._router.navigate(['/contacto','contacto.com']); //el segundo parametro es el parametro de la url
    }

    redirigirHome(){
        this._router.navigate(['/home']);
    }
    
}