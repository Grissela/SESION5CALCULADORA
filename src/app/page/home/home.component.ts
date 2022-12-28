import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  num1!:string;
  num2!:string;
  resultado!:number;

  ngOnInit(): void {
  }

  

}
