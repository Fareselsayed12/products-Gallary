import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';
import { provideToastr } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { NgxSpinnerModule } from "ngx-spinner"

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
      provideHttpClient(withFetch()),
       provideToastr(), provideAnimations(),
       importProvidersFrom(NgxSpinnerModule), 
    provideRouter(routes , withHashLocation()), provideClientHydration(withEventReplay())]
};
