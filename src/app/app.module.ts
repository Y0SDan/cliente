import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ConectaComponent } from './components/conecta/conecta.component';
import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule} from '@angular/forms';
import { AdministradorComponent } from '../app/components/administrador/administrador.component';
import { ContactosComponent } from './components/contactos/contactos.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { FaqComponent } from './components/faq/faq.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ConectaComponent,
    HomeComponent,
    NavigationComponent,
    FooterComponent,
    AdministradorComponent,
    ContactosComponent,
    GaleriaComponent,
    AcercaDeComponent,
    FaqComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
