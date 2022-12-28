import { Component, EventEmitter, OnInit,Output} from '@angular/core';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {

  constructor() { }

  @Output ()num1= new EventEmitter<string> ;
  @Output ()num2=new EventEmitter<string>;
  @Output ()resultado=new EventEmitter<number>;
  res!:number;

  
  suma(numero1:string, numero2:string){
    this.num1.emit(numero1);
    this.num2.emit(numero2);
    this.res=Number(numero1)+Number(numero2);
    this.resultado.emit(this.res);
    
  }

  resta(numero1:string, numero2:string){
    this.num1.emit(numero1);
    this.num2.emit(numero2);
    this.res=Number(numero1)-Number(numero2);
    this.resultado.emit(this.res);
    
  }
 
  multiplicacion(numero1:string, numero2:string){
    this.num1.emit(numero1);
    this.num2.emit(numero2);
    this.res=Number(numero1)*Number(numero2);
    this.resultado.emit(this.res);
    
  }

  division(numero1:string, numero2:string){
    this.num1.emit(numero1);
    this.num2.emit(numero2);
    this.res=Number(numero1)/Number(numero2);
    this.resultado.emit(this.res);
      }

  ngOnInit(): void {
  }

  
}
