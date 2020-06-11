import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCatalogoserviciosComponent } from './new-catalogoservicios.component';

describe('NewCatalogoserviciosComponent', () => {
  let component: NewCatalogoserviciosComponent;
  let fixture: ComponentFixture<NewCatalogoserviciosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCatalogoserviciosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCatalogoserviciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
