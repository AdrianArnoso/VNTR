import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerSistemaComponent } from './ver-sistema.component';

describe('VerSistemaComponent', () => {
  let component: VerSistemaComponent;
  let fixture: ComponentFixture<VerSistemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerSistemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerSistemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
