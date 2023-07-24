import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatedPaymentComponent } from './validatedPayment.component';

describe('HeaderComponent', () => {
  let component: ValidatedPaymentComponent;
  let fixture: ComponentFixture<ValidatedPaymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValidatedPaymentComponent]
    });
    fixture = TestBed.createComponent(ValidatedPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});