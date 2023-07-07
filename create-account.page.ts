import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonInput } from '@ionic/angular';


@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.page.html',
  styleUrls: ['./create-account.page.scss'],
})
export class CreateAccountPage implements OnInit {
  @ViewChild('passwordInput', { static: false}) passwordInput!: IonInput
  @ViewChild('usernameInput', { static: false}) usernameInput!: IonInput

  constructor(private router: Router) { }

  ngOnInit() {
  }

  signMeup() {
    this.router.navigate(['/main'])
  }

  focusPassword(event: any) {
    const keyboardEvent = event as  KeyboardEvent;
    if (keyboardEvent.key === 'Enter') {
      this.passwordInput.setFocus();
    }
  }

  focusUsername(event: any) {
    const keyboardEvent = event as  KeyboardEvent;
    if (keyboardEvent.key === 'Enter') {
      this.usernameInput.setFocus();
    }
  }

  SignUpwithGoogle() {
    this.router.navigate(['/gsignup'])
  }

  SignUpwithFacebook() {
    this.router.navigate(['/fbsignup'])
  }
}
