import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {

  constructor() { }


  num1!:string;
  num2!:string;
  resultado!:number;

  suma(numero1:string, numero2:string){
    this.num1=numero1;
    this.num2=numero2;
    this.resultado=Number(this.num1)+Number(this.num2);
  }

  resta(numero1:string, numero2:string){
    this.num1=numero1;
    this.num2=numero2;
    this.resultado=Number(this.num1)-Number(this.num2);
  }
 
  multiplicacion(numero1:string, numero2:string){
    this.num1=numero1;
    this.num2=numero2;
    this.resultado=Number(this.num1)*Number(this.num2);
  }

  division(numero1:string, numero2:string){
    this.num1=numero1;
    this.num2=numero2;
    this.resultado=Number(this.num1)/Number(this.num2);
  }

  

  ngOnInit(): void {
  }

  
}
