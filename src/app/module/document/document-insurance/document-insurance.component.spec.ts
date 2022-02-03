import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentInsuranceComponent } from './document-insurance.component';

describe('DocumentInsuranceComponent', () => {
  let component: DocumentInsuranceComponent;
  let fixture: ComponentFixture<DocumentInsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentInsuranceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
