import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pwlnp85Component } from './pwlnp85.component';

describe('Pwlnp85Component', () => {
  let component: Pwlnp85Component;
  let fixture: ComponentFixture<Pwlnp85Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pwlnp85Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pwlnp85Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
