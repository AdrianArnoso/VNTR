import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormModifySistemasComponent } from './form-modify-sistemas.component';

describe('FormModifySistemasComponent', () => {
  let component: FormModifySistemasComponent;
  let fixture: ComponentFixture<FormModifySistemasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormModifySistemasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormModifySistemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
