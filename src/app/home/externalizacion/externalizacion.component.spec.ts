import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalizacionComponent } from './externalizacion.component';

describe('ExternalizacionComponent', () => {
  let component: ExternalizacionComponent;
  let fixture: ComponentFixture<ExternalizacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternalizacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
