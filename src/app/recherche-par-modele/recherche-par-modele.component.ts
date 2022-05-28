import { Component, OnInit } from '@angular/core';
import { Modele } from '../model/modele.model';
import { Voiture } from '../model/Voiture';

import { VoitureService } from './../services/voiture.service';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-recherche-par-modele',
  templateUrl: './recherche-par-modele.component.html',
  styles: [
  ]
})
export class RechercheParModeleComponent implements OnInit {
 
  voitures! : Voiture[] ;
  modeles! : Modele[];
  IdModele : number;
  constructor(private voitureService: VoitureService,public authService: AuthService) { }

  ngOnInit(): void {
    this.voitureService.listeModeles().subscribe(voits => {this.modeles = voits._embedded.modeles;
    console.log(voits);
    });
    }

  onChange(){
    this.voitureService.rechercherParModele(this.IdModele).
    subscribe(voits =>{this.voitures=voits});
 }

 


supprimerVoiture(p: Voiture) {
  let conf = confirm("Etes-vous sûr ?");
  if (conf)
    this.voitureService.supprimerVoiture(p.idVoiture).subscribe(() => {
      //console.log("voiture supprimé");
      this.voitureService.rechercherParModele(this.IdModele).
      subscribe(voits =>{this.voitures=voits});
    });
}
}
