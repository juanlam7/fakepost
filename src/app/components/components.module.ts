import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { ReviewComponent } from './review/review.component';
import { FilterPipe } from '../pipes/filter.pipe';


@NgModule({
  declarations: [
    ListComponent,
    ItemComponent,
    ReviewComponent,
    FilterPipe
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
