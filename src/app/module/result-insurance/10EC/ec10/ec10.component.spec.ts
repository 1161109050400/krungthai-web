import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ec10Component } from './ec10.component';

describe('Ec10Component', () => {
  let component: Ec10Component;
  let fixture: ComponentFixture<Ec10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ec10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ec10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
