import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageloginPage } from './pagelogin.page';

describe('PageloginPage', () => {
  let component: PageloginPage;
  let fixture: ComponentFixture<PageloginPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PageloginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
