import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Smartphone X',
      description: 'Latest smartphone with advanced features',
      price: 699.99,
      imageUrl: '../../../assets/06-removebg-preview.png',
      category: 'Electronics',
      stock: 50,
      rating: 4.5,
      reviews: [
        {
          id: 1,
          userId: 1,
          userName: 'John Doe',
          rating: 5,
          comment: 'Great product!',
          date: new Date('2024-01-15')
        }
      ]
    },
    {
      id: 2,
      name: 'Laptop Pro',
      description: 'High-performance laptop for professionals',
      price: 1299.99,
      imageUrl: '../../../assets/06-removebg-preview.png',
      category: 'Electronics',
      stock: 30,
      rating: 4.8,
      reviews: []
    },
    {
      id: 3,
      name: 'Wireless Headphones',
      description: 'Noise-cancelling wireless headphones',
      price: 199.99,
      imageUrl: '../../../assets/06-removebg-preview.png',
      category: 'Audio',
      stock: 100,
      rating: 4.2,
      reviews: []
    }
  ];

  constructor() { }

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProductById(id: number): Observable<Product | undefined> {
    return of(this.products.find(product => product.id === id));
  }

  getProductsByCategory(category: string): Observable<Product[]> {
    return of(this.products.filter(product => product.category === category));
  }
} 