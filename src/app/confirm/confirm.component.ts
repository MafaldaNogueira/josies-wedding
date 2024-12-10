import {Component} from '@angular/core';
import emailjs from '@emailjs/browser';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-confirm',
  standalone: true,
  templateUrl: './confirm.component.html',
  imports: [
    FormsModule,
    NgIf
  ],
  styleUrl: './confirm.component.css'
})
export class ConfirmComponent {
  serviceID = 'service_7tgz8hf';
  templateID = 'template_wqy6k9b';
  userID = 'CkeME49tOadursO06';

  isTakingKids: boolean = false;
  oneKid: boolean = false;
  twoKids: boolean = false;
  threeKids: boolean = false;

  mealKidOne: string = '';
  mealKidTwo: string = '';
  mealKidThree: string = '';

  sendEmail(): void {
    const form = document.querySelector('form') as HTMLFormElement;

    emailjs.sendForm(this.serviceID, this.templateID, form, this.userID)
      .then(() => {
        alert('Email sent successfully!');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert('Failed to send email. Please try again.');
      });
  }

  onOptionChange(option: string) {
    option === 'yes' ? this.isTakingKids = true : this.isTakingKids = false;
  }

  onKidsNumber(option: string) {
    this.oneKid = false;
    this.twoKids = false;
    this.threeKids = false;
    if (option === '1') {
      this.oneKid = true;
    } else if (option === '2') {
      this.twoKids = true;
    } else if (option === '3') {
      this.threeKids = true;
    }
  }

  kidsMeal(option: string) {
    option === 'regular' ? this.mealKidOne = 'regular' : this.mealKidOne = 'Infantil'
  }
}
