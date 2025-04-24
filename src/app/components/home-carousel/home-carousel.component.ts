import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-carousel',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.css']
})
export class HomeCarouselComponent implements OnInit {
  currentSlide = 0;
  slides = [
    {
      image: '../../../assets/tejalweb.jpg',
      title: 'Welcome to Our Store',
      description: 'Discover amazing products at great prices',
      buttonText: 'Shop Now',
      link: '/products'
    },
    {
      image: '../../../assets/new.jpg',
      title: 'New Arrivals',
      description: 'Check out our latest products',
      buttonText: 'View New Products',
      link: '/products'
    },
    {
      image: 'https://via.placeholder.com/1920x500',
      title: 'Special Offers',
      description: 'Limited time deals and discounts',
      buttonText: 'View Offers',
      link: '/products'
    }
  ];

  ngOnInit() {
    this.startAutoSlide();
  }

  startAutoSlide() {
    setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }
} 