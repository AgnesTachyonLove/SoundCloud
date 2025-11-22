import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MusicplayerComponent } from './musicplayer.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('MusicplayerComponent', () => {
  let component: MusicplayerComponent;
  let fixture: ComponentFixture<MusicplayerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), MusicplayerComponent, HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(MusicplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
