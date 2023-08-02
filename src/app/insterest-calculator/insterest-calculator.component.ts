import { Component, Input } from '@angular/core';
import { Calculation } from './Model/Calculation';

@Component({
  selector: 'app-insterest-calculator',
  templateUrl: './insterest-calculator.component.html',
  styleUrls: ['./insterest-calculator.component.css'],
})
export class InsterestCalculatorComponent {
  @Input() cal:Calculation

  constructor()
  {
    this.cal=new Calculation();
  }
  ngInit() {}
}
