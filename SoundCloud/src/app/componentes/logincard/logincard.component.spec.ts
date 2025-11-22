import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule, AlertController, AnimationController } from '@ionic/angular';
import { LogincardComponent } from './logincard.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthServices } from 'src/app/servicios/auth-services';
import { SharedServices } from 'src/app/servicios/shared.services';
import { ApiServices } from 'src/app/servicios/api-services';
import { FormsModule } from '@angular/forms';

describe('LogincardComponent', () => {
  let component: LogincardComponent;
  let fixture: ComponentFixture<LogincardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LogincardComponent],   
      imports: [
        IonicModule.forRoot(),
        HttpClientTestingModule,
        FormsModule,
        RouterTestingModule,        
      ],
      providers: [
        AuthServices,
        SharedServices,
        ApiServices
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LogincardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
