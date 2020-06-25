import { BrowserModule} from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './security/login/login.component';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ConfigService } from 'src/Common/config.service';
import { GlobalModel } from 'src/Common/global.model';
import { HttpInterceptorService } from 'src/Common/http-interceptor.service';
import { DoctorHomeComponent } from './doctor/doctor-home/doctor-home.component';
import { ForgotPasswordComponent } from './security/forgot-password/forgot-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PatientInvitationComponent } from './patient/patient-invitation/patient-invitation.component';
import { DoctorRoomComponent } from './doctor/doctor-room/doctor-room.component';
import { PatientRoomComponent } from './patient/patient-room/patient-room.component';
import { PatientRegistrationComponent } from './patient/patient-registation/patient-registration.component';
import { YesNoPipe } from 'src/Common/yes-no.pipe';
import { PatientReportSummaryComponent } from './patient/patient-report-summary/patient-report-summary.component';
import { SafePipe } from 'src/Common/safe.pipe';
import { PatientWaitingRoomComponent } from './patient/patient-waiting-room/patient-waiting-room.component';

const initializerConfigFn = (config: ConfigService) => {
  return () => {
    var ret: any = config.loadAppConfig();
    return ret;
  };
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    DoctorHomeComponent,
    PatientInvitationComponent,
    DoctorHomeComponent,
    DoctorRoomComponent,
    PatientInvitationComponent,
    PatientRegistrationComponent,
    PatientRoomComponent,
    PatientReportSummaryComponent,
    PatientWaitingRoomComponent,
    YesNoPipe ,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: '/' + (window.location.pathname.split('/')[1] || '')
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initializerConfigFn,
      multi: true,
      deps: [ConfigService],
    },
    GlobalModel,
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
