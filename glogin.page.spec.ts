import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GloginPage } from './glogin.page';

describe('GloginPage', () => {
  let component: GloginPage;
  let fixture: ComponentFixture<GloginPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GloginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
