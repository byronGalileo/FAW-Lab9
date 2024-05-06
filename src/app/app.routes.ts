import { Routes } from '@angular/router';
import {FormularioComponent} from '../app/components/formulario/formulario.component';
import {TableComponent} from '../app/components/table/table.component';


export const routes: Routes = [
    { path: 'formulario', title:"formulario", component: FormularioComponent},
    { path: 'tabla', title:"tabla", component: TableComponent},
];
