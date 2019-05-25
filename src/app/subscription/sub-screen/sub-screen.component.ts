import { InvitationService } from './../../../Shared/services/invitation.service';
import { SignupService } from './../../../Shared/services/signup.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-sub-screen',
  templateUrl: './sub-screen.component.html',
  styleUrls: ['./sub-screen.component.css']
})
export class SubScreenComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  obj = {};

  constructor(private formBuilder: FormBuilder, private _invitationService: InvitationService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({

      email: ['', [Validators.required, Validators.email]],

    });
  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }


    this.obj = this.registerForm.value;

    this._invitationService.sendInvitation(this.obj).subscribe(res => {
      console.log('email invitaiton resp ', res)
    }, err => {
      console.log(err);
    })

  }

}
