import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifySistemasComponent } from './modify-sistemas.component';

describe('ModifySistemasComponent', () => {
  let component: ModifySistemasComponent;
  let fixture: ComponentFixture<ModifySistemasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifySistemasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifySistemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
