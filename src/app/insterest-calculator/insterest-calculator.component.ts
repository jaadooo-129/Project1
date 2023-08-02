import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-insterest-calculator',
  templateUrl: './insterest-calculator.component.html',
  styleUrls: ['./insterest-calculator.component.css'],
})
export class InsterestCalculatorComponent {
  @Input() amt: number;
  @Input() rate: number;
  @Input() time: number;

  constructor() {
    this.amt = 0;
    this.rate = 0;
    this.time = 0;
  }
  ngInit() {}
}
