import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { AddItem } from './add-item';

@NgModule({
  declarations: [
    AddItem,
  ],
  imports: [
  //  IonicModule.forChild(AddItem),
  ],
  exports: [
    AddItem
  ]
})
export class AddItemModule {}
