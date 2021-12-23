import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WLANP85Component } from './wlanp85.component';

describe('WLANP85Component', () => {
  let component: WLANP85Component;
  let fixture: ComponentFixture<WLANP85Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WLANP85Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WLANP85Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
