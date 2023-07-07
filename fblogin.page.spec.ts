import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FbloginPage } from './fblogin.page';

describe('FbloginPage', () => {
  let component: FbloginPage;
  let fixture: ComponentFixture<FbloginPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FbloginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
