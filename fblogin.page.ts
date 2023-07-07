import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fblogin',
  templateUrl: './fblogin.page.html',
  styleUrls: ['./fblogin.page.scss'],
})
export class FbloginPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  Continue() {
    this.router.navigate(['/main']);
  }

  Continue1() {
    this.router.navigate(['/login'])
  }
}
