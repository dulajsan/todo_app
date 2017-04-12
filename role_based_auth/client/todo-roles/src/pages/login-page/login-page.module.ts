import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { LoginPage } from './login-page';

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    //IonicModule.forChild(LoginPage),
  ],
  exports: [
    LoginPage
  ]
})
export class LoginPageModule {}
