import { Component, OnInit } from '@angular/core';
import { Voiture } from '../model/Voiture';
import { AuthService } from '../services/auth.service';
import { VoitureService } from '../services/voiture.service'
@Component({
  selector: 'app-voitures',
  templateUrl: './voitures.component.html'
})

export class VoituresComponent implements OnInit {
  searchText: String;
  voitures: Voiture[];
  constructor(private voitureService: VoitureService, public authService: AuthService) {
    //this.voitures = voitureService.listeVoitures();
  }
  ngOnInit(): void {
    this.chargerVoitures();
  }
  chargerVoitures() {
    this.voitureService.listeVoiture().subscribe(voits => {
      console.log(voits);
      this.voitures = voits;
    });
  }
  supprimerVoiture(p: Voiture) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.voitureService.supprimerVoiture(p.idVoiture).subscribe(() => {
        console.log("voiture supprimé");
        this.chargerVoitures();
      });
  }
}
