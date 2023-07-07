import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GsignupPage } from './gsignup.page';

describe('GsignupPage', () => {
  let component: GsignupPage;
  let fixture: ComponentFixture<GsignupPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GsignupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
