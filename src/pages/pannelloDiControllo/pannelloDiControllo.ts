import { Component } from "@angular/core";
import { NavController,NavParams } from "ionic-angular";

@Component({
  selector: 'pannello',
  templateUrl: 'pannelloDiControllo.html',
  styleUrls:['/pannelloDiControllo.scss']
})
export class pannelloDiControllo{

  private params;
  private diz;
  private dizf;
  private arrayOfKeys;

  constructor(public navController:NavController,public navParams:NavParams){
    this.params = navParams.get("item"); //Il valore passato da una pagina all'altra è una stringa;
    this.diz = JSON.parse(this.params) //In questo modo lo convertiamo a dizionario;
    this.dizf = this.diz["pannello_di_controllo"] //Dato che diz è un dizionario di dizionario preleviamo il dizionario interno e lo mettiamo in dizf;


    this.arrayOfKeys = Object.keys(this.dizf) //Creiamo un array di chiavi dell'oggetto(dizionario) in modo da poterci iterare su;
    console.log(this.dizf)

  }


}

