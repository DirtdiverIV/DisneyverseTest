import { Component,Input } from '@angular/core';
import { Character } from 'src/app/model/Character.model';

@Component({
  selector: 'app-maincard',
  templateUrl: './maincard.component.html',
  styleUrls: ['./maincard.component.scss']
})
export class MaincardComponent {
  @Input() character!:Character;
  texto:string;
  isFront:boolean;
  constructor(){
    this.texto = "";
    this.isFront = true;
  }
  greet(){
    const cardElement = document.getElementById("card");
    // if(cardElement && this.isFront){
    //   cardElement.style.transform = "rotateY(180deg)";
    //   this.isFront = !this.isFront;
    // }else if(cardElement && !this.isFront){
    //   cardElement.style.transform = "rotateY(360deg)"; 
    //   this.isFront = !this.isFront;
    // }
    
    // this.texto ="hola"
    // alert("popup en saludar de componente maincard")
  }
export class MaincardComponent{
   constructor() { }
   maincardturn1(){
    containeridlower
    if () {
      const containeridsuperior = document.getElementById('maincard_bloq');
    } else {
      const containeridlower = document.getElementById('maincard_bloq_turn');
    }
  }

  idlower(){
    containeridlower
  }
    
  


}
