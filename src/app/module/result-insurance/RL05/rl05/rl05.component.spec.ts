import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rl05Component } from './rl05.component';

describe('Rl05Component', () => {
  let component: Rl05Component;
  let fixture: ComponentFixture<Rl05Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Rl05Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Rl05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
