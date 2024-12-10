import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-homepage',
 standalone: true,
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  constructor(private router: Router) {}
  onWeddingDay() {
    this.router.navigate(['/wedding-day']);
  }
}
