import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormActividadexternalizacionComponent } from './form-actividadexternalizacion.component';

describe('FormActividadexternalizacionComponent', () => {
  let component: FormActividadexternalizacionComponent;
  let fixture: ComponentFixture<FormActividadexternalizacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormActividadexternalizacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormActividadexternalizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
