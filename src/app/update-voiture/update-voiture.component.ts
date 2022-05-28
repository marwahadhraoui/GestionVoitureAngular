import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Marque } from '../model/marque.model';
import { Modele } from '../model/modele.model';
import { Voiture } from '../model/Voiture';
import { VoitureService } from '../services/voiture.service';

@Component({
  selector: 'app-update-voiture',
  templateUrl: './update-voiture.component.html',
  styles: [
  ]
})
export class UpdateVoitureComponent implements OnInit {
  currentVoiture = new Voiture();
  marques: Marque[];
  updatedMarque: Marque;
  modeles!: Modele[];
  updatedModId!: number;
  updatedMarId!: number;
  updatedModele: Modele;
  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private voitureService: VoitureService) { }

  ngOnInit(): void {

    this.voitureService.listeMarques().
      subscribe(voits => {
        this.marques = voits._embedded.marques;
        console.log(voits);
      });
    this.voitureService.consulterVoiture(this.activatedRoute.snapshot.params['id']).
      subscribe(voits => {
        this.currentVoiture = voits;
        this.updatedMarId = this.currentVoiture.marque.idMar;
        this.updatedModId = this.currentVoiture.modele.idMod;
      });

    this.voitureService.listeModeles().
      subscribe(voits => {
        this.modeles = voits._embedded.modeles;
        console.log(voits);
      });
    


  }

  updateVoiture() {
    this.currentVoiture.marque = this.marques.
      find(mar => mar.idMar == this.updatedMarId)!;


    this.currentVoiture.modele = this.modeles.
      find(mod => mod.idMod == this.updatedModId)!;
    this.voitureService.updateVoiture(this.currentVoiture).subscribe(voits => {
      this.router.navigate(['voitures']);
    }
    );
  }

}
