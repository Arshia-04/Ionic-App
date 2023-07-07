import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fbsignup',
  templateUrl: './fbsignup.page.html',
  styleUrls: ['./fbsignup.page.scss'],
})
export class FbsignupPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  FbSignUp() {
    this.router.navigate(['/main'])
  }

  FbSignUp1() {
    this.router.navigate(['/create-account'])
  }
}
