import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { RegistercardComponent } from './registercard.component';
import { ApiServices } from 'src/app/servicios/api-services';

import { of, throwError } from 'rxjs';

describe('RegistercardComponent', () => {
  let component: RegistercardComponent;
  let fixture: ComponentFixture<RegistercardComponent>;
  let apiServiceSpy: jasmine.SpyObj<ApiServices>;
  let router: Router;
  let alertCtrlSpy: jasmine.SpyObj<AlertController>;

  beforeEach(waitForAsync(() => {
    const apiSpy = jasmine.createSpyObj('ApiServices', ['userRegister']);
    const alertSpy = jasmine.createSpyObj('AlertController', ['create']);

    TestBed.configureTestingModule({
      // si el componente es standalone:
      //declarations: [RegistercardComponent],
      // si es stand alone:
      imports: [IonicModule.forRoot(), RegistercardComponent, RouterTestingModule],
      providers: [
        { provide: ApiServices, useValue: apiSpy },
        { provide: AlertController, useValue: alertSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistercardComponent);
    component = fixture.componentInstance;

    apiServiceSpy = TestBed.inject(ApiServices) as jasmine.SpyObj<ApiServices>;
    alertCtrlSpy = TestBed.inject(AlertController) as jasmine.SpyObj<AlertController>;
    router = TestBed.inject(Router);

    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe resetear usuario y password en ngOnInit', () => {
    component.usuario = 'algo';
    component.password = 'algomegahipercool';

    component.ngOnInit();

    expect(component.usuario).toBe('');
    expect(component.password).toBe('');
  });

  it('validaciones debe mostrar error si la contraseña tiene menos de 10 caracteres', () => {
    const mostrarErrorSpy = spyOn(component, 'mostrarError');
    component.password = 'corta';

    component.validaciones();

    expect(mostrarErrorSpy).toHaveBeenCalledWith(
      'La contraseña debe ser de 10 carácteres como mínimo.'
    );
  });

  it('validaciones debe llamar a registro si la contraseña es válida (>= 10 caracteres)', () => {
    const registroSpy = spyOn(component, 'registro');
    component.password = '1234567890'; // 10 chars

    component.validaciones();

    expect(registroSpy).toHaveBeenCalled();
  });

  it('registro debe llamar a api.userRegister con usuario y password', () => {
    apiServiceSpy.userRegister.and.returnValue(of({ response: true }));
    const navigateSpy = spyOn(router, 'navigate');

    component.usuario = 'usuarioTest';
    component.password = '1234567890';

    component.registro();

    expect(apiServiceSpy.userRegister).toHaveBeenCalledWith(
      'usuarioTest',
      '1234567890'
    );
    expect(navigateSpy).toHaveBeenCalledWith(['pagelogin/']);
  });

  it('registro debe mostrar error si la API falla', () => {
    apiServiceSpy.userRegister.and.returnValue(
      throwError(() => new Error('Error en API'))
    );
    const mostrarErrorSpy = spyOn(component, 'mostrarError');

    component.registro();

    expect(mostrarErrorSpy).toHaveBeenCalledWith('Error al registrar la cuenta');
  });

  it('mostrarError debe crear y presentar un alert', async () => {
    const alertElementSpy = jasmine.createSpyObj('HTMLIonAlertElement', ['present']);

    alertCtrlSpy.create.and.returnValue(Promise.resolve(alertElementSpy));

    const mensaje = 'Mensaje de error';

    await component.mostrarError(mensaje);

    expect(alertCtrlSpy.create).toHaveBeenCalledWith(
      jasmine.objectContaining({
        header: 'Error',
        message: mensaje,
        buttons: ['OK'],
      })
    );
    expect(alertElementSpy.present).toHaveBeenCalled();
  });
});
