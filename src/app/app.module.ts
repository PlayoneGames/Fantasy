import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { ValidatorsModule } from '../validators/validators.module';

import { MyApp } from './app.component';

import { RegisterPage } from '../pages/register/register';
import { UserPage } from '../pages/user/user';
import { LoginPage } from '../pages/login/login';
import { LobbyPage } from '../pages/lobby/lobby';
import { TeamPreviewPage } from '../pages/teampreview/teampreview';

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
    ValidatorsModule
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
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
