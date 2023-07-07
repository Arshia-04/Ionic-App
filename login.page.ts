import { Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { IonInput } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  showPopup: boolean = false;
  @ViewChild('passwordInput', { static: false}) passwordInput!: IonInput
  constructor(private router: Router) { }
  

  ngOnInit() {
  }

  logMeIn() {
    this.router.navigate(['/main'])
  }

  focusPassword(event: any) {
    const keyboardEvent = event as  KeyboardEvent;
    if (keyboardEvent.key === 'Enter') {
      this.passwordInput.setFocus();
    }
  }

  signInWithGoogle() {
    this.router.navigate(['/glogin']);
  }

  signInWithFacebook() {
    this.router.navigate(['/fblogin']);
    
  }  

}