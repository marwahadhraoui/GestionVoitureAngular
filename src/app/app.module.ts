import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VoituresComponent } from './voitures/voitures.component';
import { AddVoitureComponent } from './add-voiture/add-voiture.component';
import {FormsModule} from '@angular/forms';
import { UpdateVoitureComponent } from './update-voiture/update-voiture.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { RechercheParMarqueComponent } from './recherche-par-marque/recherche-par-marque.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RechercheParModeleComponent } from './recherche-par-modele/recherche-par-modele.component';
import { RechercheParTypeComponent } from './recherche-par-type/recherche-par-type.component';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';

@NgModule({
  declarations: [
    AppComponent,
    VoituresComponent,
    AddVoitureComponent,
    UpdateVoitureComponent,
    LoginComponent,
    ForbiddenComponent,
    RechercheParMarqueComponent,
    RechercheParModeleComponent,
    RechercheParTypeComponent,
    UsersComponent,
    AddUserComponent,
    UpdateUserComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
