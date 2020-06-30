import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyCatalogoserviciosComponent } from './modify-catalogoservicios.component';

describe('ModifyCatalogoserviciosComponent', () => {
  let component: ModifyCatalogoserviciosComponent;
  let fixture: ComponentFixture<ModifyCatalogoserviciosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyCatalogoserviciosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyCatalogoserviciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
