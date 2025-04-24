import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule
  ],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      price: 99.99,
      image: 'https://via.placeholder.com/200',
      description: 'Product 1 description'
    },
    {
      id: 2,
      name: 'Product 2',
      price: 149.99,
      image: 'https://via.placeholder.com/200',
      description: 'Product 2 description'
    },
    // Add more products as needed
  ];

  constructor() {}

  ngOnInit(): void {}
} 