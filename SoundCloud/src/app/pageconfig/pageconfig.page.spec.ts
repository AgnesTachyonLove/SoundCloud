import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageconfigPage } from './pageconfig.page';

describe('PageconfigPage', () => {
  let component: PageconfigPage;
  let fixture: ComponentFixture<PageconfigPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PageconfigPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
