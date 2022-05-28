import { Component, OnInit } from '@angular/core';
import { Voiture } from '../model/Voiture';
import { AuthService } from '../services/auth.service';
import { VoitureService } from './../services/voiture.service';

@Component({
  selector: 'app-recherche-par-type',
  templateUrl: './recherche-par-type.component.html',
  styles: [
  ]
})
export class RechercheParTypeComponent implements OnInit {
  typeVoiture: string;

  voitures: Voiture[];
  allVoitures!: Voiture[];
  constructor(private voitureService: VoitureService, public authService: AuthService) { }

  ngOnInit(): void {
    this.voitureService.listeVoiture().subscribe(voits => {
      console.log(voits);
      this.allVoitures = voits;
    });

  }

  rechercherVoits() {
    this.voitureService.rechercherParType(this.typeVoiture).
      subscribe(voits => {
        this.voitures = voits;
        console.log(voits)
      });
  }

  onKeyUp(filterText: string) {
    this.voitures = this.allVoitures.filter(item =>
      item.typeVoiture.toLowerCase().includes(filterText));
  }





  supprimerVoiture(p: Voiture) {
    let conf = confirm("Etes-vous sûr ?");
    let v = String(p.typeVoiture);

    if (conf) {

      this.voitureService.supprimerVoiture(p.idVoiture).subscribe(() => {
        //console.log("voiture supprimé");
        this.voitureService.rechercherParType(v).
          subscribe(voits => { this.voitures = voits });
      });



    }
  }

}
