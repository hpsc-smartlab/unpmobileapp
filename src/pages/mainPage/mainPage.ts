import {Component, Inject} from '@angular/core';

import {NavController, NavParams} from "ionic-angular";
import {Http} from "@angular/http";
import {pannelloDiControllo} from "../pannelloDiControllo/pannelloDiControllo";
import {pianoDiStudi} from "../pianoDiStudi/pianoDiStudi";
import {riepilogo} from "../riepilogoEsami/riepilogo";
import {pagamenti} from "../pagamenti/pagamenti";
import {libretto} from "../libretto/libretto";

import { MY_CONFIG_TOKEN, MY_CONFIG, ApplicationConfig} from "../../app/app-config";

@Component({
  selector:'mainPage',
  templateUrl: 'mainPage.html',
  providers: [{ provide: MY_CONFIG_TOKEN, useValue: MY_CONFIG }],
  styleUrls:['/mainPage.scss']
})
export class MainPage {
  private matricola:String; //Oggetto utilizzato per raccogliere il valore matricola passato dalla view login;
  private password:String; //Oggetto utlizzato per raccogliere il valore password passato dalla view login;
  private items; //Oggetto utilizzato per raccogliare il Json delle Post;
  private url:string; //Oggetto utilizzato per inizializzare l'url del server contenuto in app-config.ts;

  constructor(public navCtrl: NavController,public http: Http,public navParams:NavParams,@Inject(MY_CONFIG_TOKEN) private config: ApplicationConfig) {
    this.matricola = this.navParams.get("mat");
    this.password = this.navParams.get("pass");
    this.url = this.config.serverUrl;
  }


  piano_di_studi(){

    /* Per ogni post c'è bisongo di specificare la matricola e la password.Quindi creiamo un oggetto postParams che contiene questi valori; */
    let postParams={
      matricola:this.matricola,
      password:this.password
    };

    //Effettuiamo la post;
    this.http.post(this.url+"piano",postParams).subscribe(data=>{
      this.items = data.json();
      console.log(this.items);
      if(this.items.isEmpty){
        alert("Errore");
      }
      else{
        alert("Ok");
        this.navCtrl.push(pianoDiStudi,{item:this.items});
      }
    },error2 => {
      console.log(error2)
    });
  }



  pannello(){
    /* Per ogni post c'è bisongo di specificare la matricola e la password.Quindi creiamo un oggetto postParams che contiene questi valori; */
    let postParams={
      matricola:this.matricola,
      password:this.password
    };

    //Effettuiamo la post;
    this.http.post(this.url+"pannello",postParams).subscribe(data=>{
      this.items = data.json();
      //console.log(this.items);
      if(this.items.isEmpty){
        alert("Errore");
      }
      else{
        alert("Ok");
        this.navCtrl.push(pannelloDiControllo,{item:this.items});
      }
    },error2 => {
      console.log(error2)
    });

  }

  riepilogo_esami(){
    /* Per ogni post c'è bisongo di specificare la matricola e la password.Quindi creiamo un oggetto postParams che contiene questi valori; */
    let postParams={
      matricola:this.matricola,
      password:this.password
    };

    //Effettuiamo la post;
    this.http.post(this.url+"riepilogo",postParams).subscribe(data=>{
      this.items = data.json();
      console.log(this.items);
      if(this.items.isEmpty){
        alert("Errore");
      }
      else{
        alert("Ok");
        this.navCtrl.push(riepilogo,{item:this.items});
      }
    },error2 => {
      console.log(error2)
    });
  }

  pagamenti(){
    /* Per ogni post c'è bisongo di specificare la matricola e la password.Quindi creiamo un oggetto postParams che contiene questi valori; */
    let postParams={
      matricola:this.matricola,
      password:this.password
    };

    //Effettuiamo la post;
    this.http.post(this.url+"pagamenti",postParams).subscribe(data=>{
      this.items = data.json();
      console.log(this.items);
      if(this.items.isEmpty){
        alert("Errore");
      }
      else{
        alert("Ok");
        this.navCtrl.push(pagamenti,{item:this.items});
      }
    },error2 => {
      console.log(error2)
    });
  }

  libretto(){
    /* Per ogni post c'è bisongo di specificare la matricola e la password.Quindi creiamo un oggetto postParams che contiene questi valori; */
    let postParams={
      matricola:this.matricola,
      password:this.password
    };

    //Effettuiamo la post;
    this.http.post(this.url+"libretto",postParams).subscribe(data=>{
      this.items = data.json();
      console.log(this.items);
      if(this.items.isEmpty){
        alert("Errore");
      }
      else{
        alert("Ok");
        this.navCtrl.push(libretto,{item:this.items});
      }
    },error2 => {
      console.log(error2)
    });
  }

}
