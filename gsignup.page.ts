import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gsignup',
  templateUrl: './gsignup.page.html',
  styleUrls: ['./gsignup.page.scss'],
})
export class GsignupPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gSinUp() {
    this.router.navigate(['/main'])
  }

}
