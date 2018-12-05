import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent{
 //data...
 public first : number = 123;
 public second : number = 123;
 public operand : string;
 public result : number;

  constructor() { }
//functions...
 process(){
 	switch (this.operand) {
 		case "+":
 			this.result = this.first + this.second;
 			break;
 		
 		default:
 		this.result = this.first - this.second;		
 			break;
 	}
 }	

}
