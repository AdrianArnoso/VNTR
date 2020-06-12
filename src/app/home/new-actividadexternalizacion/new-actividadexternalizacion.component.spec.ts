import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewActividadexternalizacionComponent } from './new-actividadexternalizacion.component';

describe('NewActividadexternalizacionComponent', () => {
  let component: NewActividadexternalizacionComponent;
  let fixture: ComponentFixture<NewActividadexternalizacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewActividadexternalizacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewActividadexternalizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
