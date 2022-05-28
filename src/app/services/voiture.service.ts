import { Injectable, Type } from '@angular/core';
import { Marque } from '../model/marque.model';

import { Voiture } from '../model/Voiture';
import { Observable, of } from 'rxjs';
import { Modele } from '../model/modele.model';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiURL, apiURLMar, apiURLMod } from '../config';

import { ModeleWrapper } from '../model/ModeleWrapped.model';
import { MarqueWrapper } from '../model/MarqueWrapped.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class VoitureService {
 
  voitures: Voiture[];
  voituresRecherche: Voiture[];
  voiture = new Voiture();

  marque = new Marque();

  marques: Marque[];
  modeles: Modele[];




  constructor(private http: HttpClient) {
 
  }


  listeVoiture(): Observable<Voiture[]> {
    return this.http.get<Voiture[]>(apiURL);
  }

  
    listeMarques():Observable<MarqueWrapper>{
      return this.http.get<MarqueWrapper>(apiURLMar);
      }

  consulterMarque(id: number): Marque {
    this.marque = this.marques.find(mar => mar.idMar == id);
    return this.marque;
  }

  ajouterVoiture(voits: Voiture): Observable<Voiture> {
    return this.http.post<Voiture>(apiURL, voits, httpOptions);
  }


  supprimerVoiture(id: number) {
    const url = `${apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  consulterVoiture(id: number): Observable<Voiture> {
    const url = `${apiURL}/${id}`;
    return this.http.get<Voiture>(url);
  }
  updateVoiture(voits: Voiture): Observable<Voiture> {
    return this.http.put<Voiture>(apiURL, voits, httpOptions);
  }
  trierVoitures() {
    this.voitures = this.voitures.sort((n1, n2) => {
      if (n1.idVoiture > n2.idVoiture) {
        return 1;
      }
      if (n1.idVoiture < n2.idVoiture) {
        return -1;
      }
      return 0;
    });
  }

  

  rechercherParMarque(idMar: number):Observable< Voiture[]> {
    const url = `${apiURL}/voituresMar/${idMar}`;
    return this.http.get<Voiture[]>(url);
    }


    rechercherParModele(idMod: number):Observable< Voiture[]> {
      const url = `${apiURL}/voituresMod/${idMod}`;
      return this.http.get<Voiture[]>(url);
      }
    
      rechercherParType(type: string):Observable< Voiture[]> {
        const url = `${apiURL}/voitsByType/${type}`;
        return this.http.get<Voiture[]>(url);
        }
        
  

    listeModeles():Observable<ModeleWrapper>{
      return this.http.get<ModeleWrapper>(apiURLMod);
      }
  consulterModele(id: number): Modele {
    return this.modeles.find(mod => mod.idMod == id)!;
  }

}
