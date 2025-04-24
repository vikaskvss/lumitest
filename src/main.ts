import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { appConfig } from './app/app.config';
import { CSP_NONCE } from '@angular/core';

// Bootstrap the application with the nonce
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch()),
    ...appConfig.providers,
    { provide: CSP_NONCE, useValue: 'lumi12' }
  ]
}).catch(err => {
  console.error('Error bootstrapping application:', err);
  // Add more detailed error logging
  if (err.message) {
    console.error('Error message:', err.message);
  }
  if (err.stack) {
    console.error('Error stack:', err.stack);
  }
});
