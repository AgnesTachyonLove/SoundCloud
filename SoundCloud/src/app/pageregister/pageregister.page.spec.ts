import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageregisterPage } from './pageregister.page';

describe('PageregisterPage', () => {
  let component: PageregisterPage;
  let fixture: ComponentFixture<PageregisterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PageregisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
