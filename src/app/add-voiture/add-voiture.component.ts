import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Voiture } from '../model/Voiture';
import { VoitureService } from '../services/voiture.service'
import { Marque } from '../model/marque.model';
import { Modele } from '../model/modele.model';

@Component({
  selector: 'app-add-voiture',
  templateUrl: './add-voiture.component.html',

})
export class AddVoitureComponent implements OnInit {
  newVoiture = new Voiture();
  message: string;
  modeles!: Modele[];
  newIdMod!: number;
  newModele! : Modele;
  constructor(private voitureService: VoitureService, private router: Router) { }
  marques: Marque[];
  newIdMar: number;
  newMarque: Marque;
  ngOnInit(): void {
    this.voitureService.listeMarques().
    subscribe(mar => {this.marques = mar._embedded.marques;
    console.log(mar);
    });

    this.voitureService.listeModeles().
    subscribe(mod => {this.modeles = mod._embedded.modeles;
    console.log(mod);
    });
    }


    addVoiture(){
      this.newVoiture.modele = this.modeles.find(mod => mod.idMod == this.newIdMod)!;
      this.newVoiture.marque = this.marques.find(mar => mar.idMar == this.newIdMar)!;

      this.voitureService.ajouterVoiture(this.newVoiture)
      .subscribe(voits => {
      console.log(voits);
      this.router.navigate(['voitures']);
      });
      }

}
