import { Component, OnInit } from '@angular/core';
import { Voiture } from '../model/Voiture';
import { VoitureService } from './../services/voiture.service';
import { Marque } from '../model/marque.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-recherche-par-marque',
  templateUrl: './recherche-par-marque.component.html',
  styles: [
  ]
})
export class RechercheParMarqueComponent implements OnInit {

  voitures! : Voiture[]; 
  marques! : Marque[];
  IdMarque! : number;

  constructor(private voitureService : VoitureService,public authService: AuthService) { 
    // this.voitures = voitureService.listeVoitures();
   }

   ngOnInit(): void {
    this.voitureService.listeMarques().
    subscribe(voits => {this.marques = voits._embedded.marques;
    console.log(voits);
    });
   
    }
    onChange() {
      this.voitureService.rechercherParMarque(this.IdMarque).
      subscribe(voits =>{this.voitures=voits});
      }

      supprimerVoiture(p: Voiture) {
        let conf = confirm("Etes-vous sûr ?");
        if (conf)
          this.voitureService.supprimerVoiture(p.idVoiture).subscribe(() => {
            //console.log("voiture supprimé");
            this.voitureService.rechercherParMarque(this.IdMarque).
            subscribe(voits =>{this.voitures=voits});
          });
      }

}