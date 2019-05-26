import { ConfirmtionDialogComponent } from './../confirmtion-dialog/confirmtion-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-upload-screen',
  templateUrl: './upload-screen.component.html',
  styleUrls: ['./upload-screen.component.css']
})
export class UploadScreenComponent implements OnInit {

  order: string;

  url;
  constructor(public dialog: MatDialog, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log(params); // {order: "popular"}
      this.url = params.url;
      this.order = params.order;

      console.log('order is', params); // popular
    });
  }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userId')
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(ConfirmtionDialogComponent, {
      width: '800px',

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

}
