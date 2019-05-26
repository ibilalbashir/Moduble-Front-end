import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { UploadService } from './../../../Shared/services/upload.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  images = [];
  items: any = [];
  cardColor = 'black';
  componentColor = 'red';
  cardIcon = "#E6E6E6";
  componentIcon = "red";
  type = "component";
  finalObj = {};
  url;
  constructor(private formBuilder: FormBuilder, private uploadService: UploadService, private _router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      title: ['', Validators.required],
      tags: ['', Validators.required],
      description: ['', Validators.required],
      file: ['', Validators.required]
    });
  }
  get f() { return this.registerForm.controls; }
  onTagEdited(event) {
    console.log(event)
  }

  cardSelected() {
    this.cardColor = 'red';
    this.componentColor = 'black';
    this.cardIcon = 'red';
    this.componentIcon = "#E6E6E6";
    this.type = "card"
  }
  componentSelected() {
    this.cardColor = 'black';
    this.componentColor = 'red';
    this.cardIcon = '#E6E6E6';
    this.componentIcon = "red"
    this.type = "component";
  }

  onFileChange(event: any) {
    if (event.target.files) {
      for (const iterator of event.target.files) {
        this.images.push(iterator);
      }
    }
  }

  onSubmit() {


    this.uploadService.uploadFn("attachments", this.images[0]).subscribe(res => {
      console.log('file uploaded ', res);
      let fileName = res.result.files.file[0].name;
      fileName = fileName.replace(/ /g, "%20");
      this.url = environment.url + '/attachments/attachments/download/' + fileName;
      console.log('url is ', this.url);
      this.submitted = true;
      this.finalObj = this.registerForm.value;
      this.finalObj['type'] = this.type;
      this.finalObj['uploadedBy'] = localStorage.getItem('userId');
      this.finalObj['fileUrl'] = this.url;
      console.log('finalObj is ', this.finalObj)

      this.uploadService.createUploadRecordFn(this.finalObj).subscribe(resp => {
        console.log('record created', resp);
        this._router.navigate(['assetupload'], { queryParams: { url: this.url } });
      }, error => {
        console.log(error)
      })
    }, err => {
      console.log(err)
    })


    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }


  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userId')
  }
}
