import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { Pizzeria } from './app/pizzeria/pizzeria'; 

bootstrapApplication(Pizzeria, appConfig) 
  .catch((err) => console.error(err));