import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './modulos/login/login.component';
import { UsuariosComponent } from './modulos/usuarios/usuarios.component';
import { PrincipalComponent } from './modulos/principal.component';
import { AdministracionComponent } from './modulos/administracion/administracion.component';
import { RegistroComponent } from './modulos/registro/registro.component';
import { MantenimientoComponent } from './modulos/mantenimiento/mantenimiento.component';
import { InventarioComponent } from './modulos/inventario/inventario.component';
import { ManualDeHerramientasComponent } from './modulos/manual.de.herramientas/manual.de.herramientas.component';
import { DashboardComponent } from './modulos/dashboard/dashboard.component';

 const routes: Routes = [{

  path: "",component: PrincipalComponent,
  children: [
    {path: "dashboard", component: DashboardComponent},
    {path: "", redirectTo: "/dashboard", pathMatch: "full"},
    {path: "usuarios", component: UsuariosComponent},
    {path: "Administracion", component: AdministracionComponent},
    {path: "Registro", component: RegistroComponent},
    {path: "Mantenimiento", component: MantenimientoComponent},
    {path: "Inventarios", component: InventarioComponent},
    {path: "Manual de herramientas", component: ManualDeHerramientasComponent},

  ]
 },
 { path: "Login", component: LoginComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
