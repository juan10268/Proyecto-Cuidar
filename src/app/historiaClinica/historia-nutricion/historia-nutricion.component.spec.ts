import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriaNutricionComponent } from './historia-nutricion.component';

describe('HistoriaNutricionComponent', () => {
  let component: HistoriaNutricionComponent;
  let fixture: ComponentFixture<HistoriaNutricionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriaNutricionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriaNutricionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
