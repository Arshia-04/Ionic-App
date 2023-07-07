import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FbsignupPage } from './fbsignup.page';

describe('FbsignupPage', () => {
  let component: FbsignupPage;
  let fixture: ComponentFixture<FbsignupPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FbsignupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
