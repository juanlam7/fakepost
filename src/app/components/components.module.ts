import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';




@NgModule({
  declarations: [
    ListComponent,
    ItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ListComponent,
    ItemComponent
  ]
})
export class ComponentsModule { }
