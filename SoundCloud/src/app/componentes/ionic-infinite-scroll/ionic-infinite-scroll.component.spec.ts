import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonicInfiniteScrollComponent } from './ionic-infinite-scroll.component';

describe('IonicInfiniteScrollComponent', () => {
  let component: IonicInfiniteScrollComponent;
  let fixture: ComponentFixture<IonicInfiniteScrollComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IonicInfiniteScrollComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonicInfiniteScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
