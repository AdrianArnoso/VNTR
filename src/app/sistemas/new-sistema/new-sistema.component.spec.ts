import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSistemaComponent } from './new-sistema.component';

describe('NewSistemaComponent', () => {
  let component: NewSistemaComponent;
  let fixture: ComponentFixture<NewSistemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSistemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSistemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
