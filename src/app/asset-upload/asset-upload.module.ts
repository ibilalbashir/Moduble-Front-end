import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetUploadRoutingModule } from './asset-upload-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { UploadScreenComponent } from './upload-screen/upload-screen.component';
import { ConfirmtionDialogComponent } from './confirmtion-dialog/confirmtion-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    AssetUploadRoutingModule,
    MatDialogModule
  ],
  declarations: [UploadScreenComponent, ConfirmtionDialogComponent],
  entryComponents: [ConfirmtionDialogComponent]
})
export class AssetUploadModule { }
