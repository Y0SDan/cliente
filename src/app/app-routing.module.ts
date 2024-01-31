import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { LoginComponent } from './components/login/login.component';
import { ConectaComponent } from './components/conecta/conecta.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"/home",
    pathMatch:"full"
  },
  {
    path:"home",
    component:HomeComponent,
    children:[
      {
        path:"contacto",
        component:ConectaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
