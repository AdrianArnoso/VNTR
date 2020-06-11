import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCatalogoserviciosComponent } from './form-catalogoservicios.component';

describe('FormCatalogoserviciosComponent', () => {
  let component: FormCatalogoserviciosComponent;
  let fixture: ComponentFixture<FormCatalogoserviciosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCatalogoserviciosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCatalogoserviciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
