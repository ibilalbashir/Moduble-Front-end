import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleRoutingModule } from './example-routing.module';
import { ExampleContainerComponent } from './example-container/example-container.component';

@NgModule({
  imports: [
    CommonModule,
    ExampleRoutingModule
  ],
  declarations: [ExampleContainerComponent]
})
export class ExampleModule { }
