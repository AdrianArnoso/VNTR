import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormModifyCatalogoserviciosComponent } from './form-modify-catalogoservicios.component';

describe('FormModifyCatalogoserviciosComponent', () => {
  let component: FormModifyCatalogoserviciosComponent;
  let fixture: ComponentFixture<FormModifyCatalogoserviciosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormModifyCatalogoserviciosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormModifyCatalogoserviciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
