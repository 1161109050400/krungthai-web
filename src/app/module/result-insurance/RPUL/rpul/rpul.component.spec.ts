import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RpulComponent } from './rpul.component';

describe('RpulComponent', () => {
  let component: RpulComponent;
  let fixture: ComponentFixture<RpulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RpulComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RpulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
