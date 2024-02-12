import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ConectaComponent } from './components/conecta/conecta.component';
import { HomeComponent } from './components/home/home.component';
import { AdministradorComponent } from './components/administrador/administrador.component';  
import { ContactosComponent } from './components/contactos/contactos.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { FaqComponent } from './components/faq/faq.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"/conecta",
    pathMatch:"full"
  },
  {
    path:"home",
    component:HomeComponent,
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path: 'conecta',
    component: ConectaComponent
  },
  {
    path: 'administrador',
    component: AdministradorComponent
  },
  {
    path: 'contactos',
    component: ContactosComponent
  },
  {
    path: 'galeria',
    component: GaleriaComponent
  },
  {
    path: 'acerca-de',
    component: AcercaDeComponent
  },
  {
    path: 'faq',
    component: FaqComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
