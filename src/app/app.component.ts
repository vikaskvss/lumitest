import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    MatIconModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private meta: Meta) {}

  ngOnInit() {
    // Setup CSP and apply nonce to elements
    this.setupCSP();
    
    // Add base styles with nonce
    const styleElement = document.createElement('style');
    styleElement.setAttribute('nonce', 'lumi12');
    styleElement.textContent = `
      body {
        margin: 0;
        padding: 0;
        font-family: Roboto, "Helvetica Neue", sans-serif;
        min-height: 100vh;
        background-color: #ffffff;
      }
      html {
        height: 100%;
      }
    `;
    document.head.appendChild(styleElement);

    // Set up mutation observer to handle dynamically added elements
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node instanceof HTMLStyleElement || node instanceof HTMLElement) {
              if (!node.hasAttribute('nonce')) {
                node.setAttribute('nonce', 'lumi12');
              }
            }
            if (node instanceof HTMLLinkElement && node.rel === 'stylesheet') {
              if (!node.hasAttribute('nonce')) {
                node.setAttribute('nonce', 'lumi12');
              }
            }
          });
        }
      });
    });

    observer.observe(document.head, { 
      childList: true, 
      subtree: true,
      attributes: true,
      attributeFilter: ['style', 'rel']
    });
    observer.observe(document.body, { 
      childList: true, 
      subtree: true,
      attributes: true,
      attributeFilter: ['style', 'rel']
    });
  }

  private setupCSP() {
    // Store nonce in window object
    (window as any).cspNonce = "lumi12";
    
    // Add CSP meta tag with nonce
    this.meta.addTag({ 
      name: 'Content-Security-Policy',
      content: `
        default-src 'self';
        script-src 'self' 'nonce-lumi12' https:;
        style-src 'self' 'nonce-lumi12' https:;
        img-src 'self' data: https:;
        font-src 'self' https:;
        connect-src 'self' https:;
        frame-src 'self' https:;
        child-src 'self' blob:;
        form-action 'self' https:;
        manifest-src 'self';
        media-src 'self' https:;
        base-uri 'self';
        object-src 'none';
      `.replace(/\s+/g, ' ').trim()
    });
    
    // Add nonce to existing script and style tags
    document.querySelectorAll('script, style').forEach(element => {
      if (!element.hasAttribute('nonce')) {
        element.setAttribute('nonce', "lumi12");
      }
    });
  }
}
