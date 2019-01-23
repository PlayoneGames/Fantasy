import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { ValidatorsModule } from '../validators/validators.module';

import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';

import { RegisterPage } from '../pages/register/register';
import { UserPage } from '../pages/user/user';
import { LoginPage } from '../pages/login/login';
import { LobbyPage } from '../pages/lobby/lobby';
import { TeamPreviewPage } from '../pages/teampreview/teampreview';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { RestApiService } from '../services/rest-api.service';

@NgModule({
  declarations: [
    MyApp,
    LobbyPage,
    RegisterPage,
    UserPage,
    LoginPage,
    TeamPreviewPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ValidatorsModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RegisterPage,
    UserPage,
    LobbyPage,
    LoginPage,
    TeamPreviewPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    NativeGeocoder,
    RestApiService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
