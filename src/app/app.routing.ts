import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// Importar componentes
import { EmpleadoComponent } from './empleado/empleado.component';
import { FrutaComponent } from './fruta/fruta.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CochesComponent } from './coches/coches.component';
import { PlantillasComponent } from './plantillas/plantillas.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent}, // (pagina Home) Esta ruta con espacio '' significa que es la ruta por defecto cuando no pongan nada más en la url
    {path: 'empleado', component: EmpleadoComponent}, // ruta de Empleado
    {path: 'fruta', component: FrutaComponent},
    {path: 'home', component: HomeComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: 'contacto/:page', component: ContactoComponent},
    {path: 'coches', component: CochesComponent},
    {path: 'plantillas', component: PlantillasComponent},
    {path: '**', component: HomeComponent} // (pagina cuando se produce error) Esta ruta con dos ** siginifica que es loq ue se mostrará cuando algo salga mal
];

export const appRoutingProviders: any[] = []; // Es necesario para gargar elprovider de la ruta

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes); // aqui toma todas las rutas que indicamos
