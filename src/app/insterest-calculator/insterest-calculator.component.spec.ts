import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsterestCalculatorComponent } from './insterest-calculator.component';

describe('InsterestCalculatorComponent', () => {
  let component: InsterestCalculatorComponent;
  let fixture: ComponentFixture<InsterestCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsterestCalculatorComponent]
    });
    fixture = TestBed.createComponent(InsterestCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
