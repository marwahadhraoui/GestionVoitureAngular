import { Marque } from "./marque.model";
import { Modele } from "./modele.model";


export class Voiture{
    idVoiture : number;
    typeVoiture : String;
    prixVoiture : number;
    dateCreation : Date;
    marque : Marque;
    modele :Modele
}