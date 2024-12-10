import { Routes} from '@angular/router';
import {WeddingDayComponent} from './wedding-day/wedding-day.component';
import {HomepageComponent} from './homepage/homepage.component';
import {WhereToStayComponent} from './where-to-stay/where-to-stay.component';
import {ConfirmComponent} from './confirm/confirm.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'wedding-day', component: WeddingDayComponent },
  { path: 'where-to-stay', component: WhereToStayComponent },
  { path: 'to-confirm', component: ConfirmComponent }
];

