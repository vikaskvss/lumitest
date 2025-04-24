import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // In a real application, you would fetch the product data from a service
    // based on the route parameter
    this.product = {
      id: 1,
      name: 'Product 1',
      price: 99.99,
      image: 'https://via.placeholder.com/400',
      description: 'This is a detailed description of Product 1. It includes all the important features and specifications that customers need to know.'
    };
  }
} 