import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { SignupPage } from './signup-page';

@NgModule({
  declarations: [
    SignupPage,
  ],
  imports: [
    //IonicModule.forChild(SignupPage),
  ],
  exports: [
    SignupPage
  ]
})
export class SignupPageModule {}
