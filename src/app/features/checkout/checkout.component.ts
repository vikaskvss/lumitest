import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatStepperModule
  ],
  template: `
    <div class="checkout-container">
      <mat-card>
        <mat-card-header>
          <mat-card-title>Checkout</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <mat-stepper [linear]="true" #stepper>
            <!-- Shipping Information -->
            <mat-step [stepControl]="shippingForm">
              <ng-template matStepLabel>Shipping Information</ng-template>
              <form [formGroup]="shippingForm">
                <mat-form-field appearance="outline">
                  <mat-label>Full Name</mat-label>
                  <input matInput formControlName="fullName" required>
                </mat-form-field>

                <mat-form-field appearance="outline">
                  <mat-label>Address</mat-label>
                  <input matInput formControlName="address" required>
                </mat-form-field>

                <mat-form-field appearance="outline">
                  <mat-label>City</mat-label>
                  <input matInput formControlName="city" required>
                </mat-form-field>

                <mat-form-field appearance="outline">
                  <mat-label>State</mat-label>
                  <input matInput formControlName="state" required>
                </mat-form-field>

                <mat-form-field appearance="outline">
                  <mat-label>Zip Code</mat-label>
                  <input matInput formControlName="zipCode" required>
                </mat-form-field>

                <div class="step-actions">
                  <button mat-button matStepperNext>Next</button>
                </div>
              </form>
            </mat-step>

            <!-- Payment Information -->
            <mat-step [stepControl]="paymentForm">
              <ng-template matStepLabel>Payment Information</ng-template>
              <form [formGroup]="paymentForm">
                <mat-form-field appearance="outline">
                  <mat-label>Card Number</mat-label>
                  <input matInput formControlName="cardNumber" required>
                </mat-form-field>

                <mat-form-field appearance="outline">
                  <mat-label>Expiration Date</mat-label>
                  <input matInput formControlName="expirationDate" required>
                </mat-form-field>

                <mat-form-field appearance="outline">
                  <mat-label>CVV</mat-label>
                  <input matInput formControlName="cvv" required>
                </mat-form-field>

                <div class="step-actions">
                  <button mat-button matStepperPrevious>Back</button>
                  <button mat-button matStepperNext>Next</button>
                </div>
              </form>
            </mat-step>

            <!-- Review Order -->
            <mat-step>
              <ng-template matStepLabel>Review Order</ng-template>
              <div class="order-summary">
                <h3>Order Summary</h3>
                <p>Total: $299.97</p>
              </div>
              <div class="step-actions">
                <button mat-button matStepperPrevious>Back</button>
                <button mat-raised-button color="primary" (click)="placeOrder()">
                  Place Order
                </button>
              </div>
            </mat-step>
          </mat-stepper>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .checkout-container {
      padding: 20px;
      max-width: 800px;
      margin: 0 auto;
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    .step-actions {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
    }
    .order-summary {
      padding: 20px;
      background-color: #f5f5f5;
      border-radius: 4px;
      margin: 20px 0;
    }
  `]
})
export class CheckoutComponent implements OnInit {
  shippingForm: FormGroup;
  paymentForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.shippingForm = this.fb.group({
      fullName: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', Validators.required]
    });

    this.paymentForm = this.fb.group({
      cardNumber: ['', Validators.required],
      expirationDate: ['', Validators.required],
      cvv: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  placeOrder(): void {
    if (this.shippingForm.valid && this.paymentForm.valid) {
      // In a real application, you would send the order to your backend
      console.log('Order placed successfully!');
    }
  }
} 