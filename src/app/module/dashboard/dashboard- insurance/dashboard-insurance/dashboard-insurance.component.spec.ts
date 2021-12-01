import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardInsuranceComponent } from './dashboard-insurance.component';

describe('DashboardInsuranceComponent', () => {
  let component: DashboardInsuranceComponent;
  let fixture: ComponentFixture<DashboardInsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardInsuranceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
