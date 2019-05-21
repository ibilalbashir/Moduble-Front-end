import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ContainerComponent } from './container/container.component';
import { FeaturedComponent } from './container/featured/featured.component';
import { FeaturesCardComponent } from './container/features-card/features-card.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [ContainerComponent, FeaturedComponent, FeaturesCardComponent]
})
export class HomeModule { }
