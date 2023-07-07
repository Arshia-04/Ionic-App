import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-glogin',
  templateUrl: './glogin.page.html',
  styleUrls: ['./glogin.page.scss'],
})
export class GloginPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  Login() {
    this.router.navigate(['/main'])
  }

}
