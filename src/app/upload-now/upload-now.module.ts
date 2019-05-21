import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadNowRoutingModule } from './upload-now-routing.module';
import { UploadScreenComponent } from './upload-screen/upload-screen.component';

import { VerticalTimelineModule } from 'angular-vertical-timeline';
@NgModule({
  imports: [
    CommonModule,
    UploadNowRoutingModule,
    VerticalTimelineModule
  ],
  declarations: [UploadScreenComponent]
})
export class UploadNowModule { }
