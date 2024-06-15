import { ApplicationConfig } from '@angular/core';
import { routes } from './app.routes';
import { RouterModule } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [RouterModule.forRoot(routes)],
};