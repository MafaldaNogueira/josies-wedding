import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {WeddingDayComponent} from './wedding-day/wedding-day.component';
import {NgModule} from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';
import {HomepageComponent} from './homepage/homepage.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'wedding-day', component: WeddingDayComponent }
];

