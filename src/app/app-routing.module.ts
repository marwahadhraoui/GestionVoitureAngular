import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VoituresComponent } from './voitures/voitures.component';
import { AddVoitureComponent } from './add-voiture/add-voiture.component';
import { UpdateVoitureComponent } from './update-voiture/update-voiture.component';
import { LoginComponent } from './login/login.component';
import { VoitureGuard } from './voiture.guard';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { RechercheParMarqueComponent } from './recherche-par-marque/recherche-par-marque.component';
import { RechercheParModeleComponent } from './recherche-par-modele/recherche-par-modele.component';
import { RechercheParTypeComponent } from './recherche-par-type/recherche-par-type.component';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';



const routes: Routes = [
  { path: "voitures", component: VoituresComponent },
  { path: "add-voiture", component: AddVoitureComponent, canActivate: [VoitureGuard] },
  { path: "", redirectTo: "voitures", pathMatch: "full" },
  { path: 'login', component: LoginComponent },
  { path: 'forbidden', component: ForbiddenComponent },
  { path: "updateVoiture/:id", component: UpdateVoitureComponent, canActivate: [VoitureGuard] },
  { path: "rechercheParMarque", component: RechercheParMarqueComponent },
  { path: "rechercheParModele", component: RechercheParModeleComponent },
  { path: "rechercheParType", component: RechercheParTypeComponent },
  { path: "users", component: UsersComponent },
  { path: "add-user", component: AddUserComponent },
  { path: "updateUser/:id", component: UpdateUserComponent }






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
