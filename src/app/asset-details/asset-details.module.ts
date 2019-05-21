
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagInputModule } from 'ngx-chips';
import { AssetDetailsRoutingModule } from './asset-details-routing.module';
import { DetailsPageComponent } from './details-page/details-page.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AssetDetailsRoutingModule,
    TagInputModule,
    FormsModule,
    ReactiveFormsModule

  ],
  declarations: [DetailsPageComponent]
})
export class AssetDetailsModule { }
