import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriaPsicologiaComponent } from './historia-psicologia.component';

describe('HistoriaPsicologiaComponent', () => {
  let component: HistoriaPsicologiaComponent;
  let fixture: ComponentFixture<HistoriaPsicologiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriaPsicologiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriaPsicologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
