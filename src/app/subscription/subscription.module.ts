import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscriptionRoutingModule } from './subscription-routing.module';
import { SubScreenComponent } from './sub-screen/sub-screen.component';

@NgModule({
  imports: [
    CommonModule,
    SubscriptionRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [SubScreenComponent]
})
export class SubscriptionModule { }
