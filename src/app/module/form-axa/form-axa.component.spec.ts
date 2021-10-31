import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAxaComponent } from './form-axa.component';

describe('FormAxaComponent', () => {
  let component: FormAxaComponent;
  let fixture: ComponentFixture<FormAxaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAxaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAxaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
