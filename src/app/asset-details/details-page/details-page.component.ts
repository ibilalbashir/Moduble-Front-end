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
  constructor(private formBuilder: FormBuilder, private uploadService: UploadService) { }

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


    this.uploadService.uploadFn("container", this.registerForm.value['file']).subscribe(res => {
      console.log('file uploaded ', res);
    }, err => {
      console.log(err)
    })
    this.submitted = true;
    this.finalObj = this.registerForm.value;
    this.finalObj['type'] = this.type;
    this.finalObj['uploadedBy'] = localStorage.getItem('userId');

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    } else {
      console.log(this.finalObj)
    }


  }
}
